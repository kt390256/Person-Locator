

const queriesController = require('./queriesController');

/* GET home page. */
module.exports.getEverything = function(req, res, next){

queriesController.getPatientName()
.then( patient => {
    res.render('index', { title: 'Express', data: patient });
}).catch(err => {console.log("Coming from Home controller", err)});
};

module.exports.searchAddress = function(req,res, err){

  var name = req.query.patientName;

  queriesController.getAddress(name)
  .then(name => {
    console.log(name);
    res.render('map', {
                patientInfo: name,
                //passing object from backend to frontend <script> tag must be in JSON format
                encodePatientJSON: encodeURIComponent(JSON.stringify(name))
              });
 }).catch(err => {console.log("Coming from Home controller", err)});
}
