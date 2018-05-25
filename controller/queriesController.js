

const queries = require('../db/queries');

module.exports.getPhysicianName = () => {

  return queries.dbGetPhysicianName().then(data => {return data;})
                                  .catch(err => {console.log(err)})
}

module.exports.getRandomName = name => {

  return queries.dbGetRandomName(name).then(data => {
    return data;})
  .catch(err => {console.log(err)})

}

module.exports.getFLName = (first, last) => {

  return queries.dbGetFLName(first, last).then(data => {
    return data;})
  .catch(err => {console.log(err)})

}

module.exports.getFMLName = (first, middle, last) => {

  return queries.dbGetFMLName(first, middle, last).then(data => {
    return data;})
  .catch(err => {console.log(err)})

}
