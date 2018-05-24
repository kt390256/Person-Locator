
const queriesController = require('./queriesController');
const models = require('../models');

module.exports.showAddPatient = function(req,res){

  res.render('newPatient', {title: 'Add Patient'});

}

module.exports.addPatient = function(req, res){

  let Patient;
  let name = req.body.patientName;
  let location = req.body.location;

  Patient = new models.Patient({
    patientName : name,
    location : location
  });

  Patient.save(err=> {
    if(err){return res.send('err');}
  })
  return res.redirect('/');
}
