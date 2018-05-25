

const queriesController = require('./queriesController');

/* GET home page. */
module.exports.getEverything = function(req, res, next){

queriesController.getPhysicianName()
.then( physician => {
    res.render('index', { data: physician });
}).catch(err => {console.log("Coming from Home controller", err)});
};

module.exports.searchAddress = function(req,res, err){

  let nameForParse = req.query.physician;
  let nameArr = nameForParse.split(" ");


//if only one name is enter, doesn't know if it is first name or last name
   if(nameArr.length == 1){
    let someName = nameArr[0];
    console.log("This is some name: " + someName);
    queriesController.getRandomName(someName)
    .then(data => {
      console.log("You only enter 1 name");
      console.log("Check to see if this thing exists in the db", data);
      //if name exist in database
      if(data!=null){
      res.render('map', {
                  physicianInfo: data,
                  //passing object from backend to frontend <script> tag must be in JSON format
                  encodephysicianJSON: encodeURIComponent(JSON.stringify(data))
                });
              }//end of if
              //if name doesnt exist in db
              else{
                res.render('temp', {name: nameForParse});
              }
   }).catch(err => {console.log("Coming from Home controller", err)});
  }//end of if

//if first name and last name entered
else if(nameArr.length == 2){
      console.log("You only enter 2 name");
  let firstName = nameArr[0];
  let lastName  = nameArr[nameArr.length-1];
  console.log("This is last name: " + lastName);
  console.log("This is first name: " + firstName);
  queriesController.getFLName(firstName, lastName)
  .then(data => {

    console.log("Check to see if this thing exists in the db", data);
    //if name exist in database
    if(data!=null){
    res.render('map', {
                physicianInfo: data,
                //passing object from backend to frontend <script> tag must be in JSON format
                encodephysicianJSON: encodeURIComponent(JSON.stringify(data))
              });
            }//end of if
            //if name doesnt exist in db
            else{
              res.render('temp', {name: nameForParse});
            }
 }).catch(err => {console.log("Coming from Home controller", err)});
}//end of if

else{
  let firstName = nameArr[0];
  let middleName = nameArr[nameArr.length-2];
  let lastName = nameArr[nameArr.length-1];
  console.log(lastName);
  console.log(middleName);
  console.log(firstName);
///////////////////////////////////if middle name is entered///////////////////////////////
  queriesController.getFMLName(firstName, middleName, lastName)
  .then(data => {
    console.log("You only enter 3 or more name");
    console.log("Check to see if this thing exists in the db", data);
    //if name exist in database
    if(data!=null){
    res.render('map', {
                physicianInfo: data,
                //passing object from backend to frontend <script> tag must be in JSON format
                encodephysicianJSON: encodeURIComponent(JSON.stringify(data))
              });
            }//end of if
            //if name doesnt exist in db
            else{
              res.render('temp', {name: nameForParse});
            }
 }).catch(err => {console.log("Coming from Home controller", err)});
  }//end of else
}//end of function
