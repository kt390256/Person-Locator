const patient = require('../models').Patient;

const dbGetPatientName = () => {

    return patient.findAll().then(data => {return data;})
                            .catch(err => {console.log(err)});
};

const dbGetPatientAddress = (name) => {

  return patient.findOne({
    where: {
      $or:{
        patientName :{ $iLike: '%'+ name +'%' }
      }
    }
  }).then(data=> {
    return data;
  }).catch(err => {
    console.log(err);
  })
}

module.exports = {

    dbGetPatientName,
    dbGetPatientAddress
}
