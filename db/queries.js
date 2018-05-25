const physician = require('../models').Physician;

const dbGetPhysicianName = () => {

    return physician.findAll().then(data => {return data;})
                            .catch(err => {console.log(err)});
};

const dbGetRandomName = (name) => {

  return physician.findOne({
    where: {
      $or: {
        physicianFirstName : { $iLike: '%' + name +'%' }, //return all names with that first name
        physicianMiddleName :{ $iLike: '%'+ name +'%' },
        physicianLastName : {$iLike: '%' + name + '%'}
      }
    }
  }).then(data=> {
    console.log("You are in dbGetRandomName");
    return data;
  }).catch(err => {
    console.log(err);
  })
}

const dbGetFLName = (first, last) => {

  return physician.findOne({
    where: {
        physicianFirstName : { $iLike: '%' + first +'%' }, //return all names with that first name
        physicianLastName : {$iLike: '%' + last + '%'}
    }
  }).then(data=> {
    console.log("You are in dbGetFLName");
    return data;
  }).catch(err => {
    console.log(err);
  })
}

const dbGetFMLName = (first, middle, last) => {

  return physician.findOne({
    where: {
        physicianFirstName : { $iLike: '%' + first +'%' }, //return all names with that first name
         physicianMiddleName :{ $iLike: '%'+ middle +'%' },
        physicianLastName : {$iLike: '%' + last + '%'}
        // physicianLastName :{ $iLike: '%'+ name +'%' }
    }
  }).then(data=> {
    console.log("You are in dbGetFMLName");
    return data;
  }).catch(err => {
    console.log(err);
  })
}

module.exports = {

    dbGetPhysicianName,
    dbGetFLName,
    dbGetFMLName,
    dbGetRandomName
}
