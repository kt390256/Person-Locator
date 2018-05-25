

const queriesController = require('./queriesController');

/* GET home page. */
module.exports.getEverything = function(req, res, next){

queriesController.getPatientName()
.then( physician => {
    res.render('index', { data: physician });
}).catch(err => {console.log("Coming from Home controller", err)});
};

module.exports.searchAddress = function(req,res, err){

  var name = req.query.physician;

  queriesController.getAddress(name)
  .then(data => {
    console.log(data);
    if(data!=null){
        console.log("Object is not null");
    res.render('map', {
                physicianInfo: data,
                //passing object from backend to frontend <script> tag must be in JSON format
                encodephysicianJSON: encodeURIComponent(JSON.stringify(data))
              });
            }//end of it
            else{
              console.log("Object is null")
              res.render('temp', {
                          name: name
                        });
            }
 }).catch(err => {console.log("Coming from Home controller", err)});
}
