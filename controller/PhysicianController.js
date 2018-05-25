
const queriesController = require('./queriesController');
const models = require('../models');

module.exports.showAddPhysician = function(req,res){

  res.render('newPatient', {title: 'Add Patient'});

}

module.exports.addPhysician = function(req, res){

  let Physician;
  let pFirstName = req.body.physicianFirst;
  let pMiddleName = req.body.physicianMiddle;
  let pLastName = req.body.physicianLast;
  let location = req.body.location;

  Physician = new models.Physician({
    physicianFirstName : pFirstName,
    physicianMiddleName : pMiddleName,
    physicianLastName : pLastName,
    location : location
  });

  Physician.save(err=> {
    if(err){return res.send('err');}
  })
  return res.redirect('/');
}
