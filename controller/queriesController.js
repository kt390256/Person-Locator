

const queries = require('../db/queries');

module.exports.getPatientName = () => {

  return queries.dbGetPatientName().then(data => {return data;})
                                  .catch(err => {console.log(err)})
}

module.exports.getAddress = (name) => {

  return queries.dbGetPatientAddress(name).then(data => {
    return data;})
  .catch(err => {console.log(err)})

}
