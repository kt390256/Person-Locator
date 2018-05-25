'use strict'

module.exports = (sequelize, DataTypes) => {

//creates patient model

var Physician = sequelize.define('Physician', {
  physicianFirstName: DataTypes.STRING,
  physicianMiddleName: DataTypes.STRING,
  physicianLastName: DataTypes.STRING,
  location: DataTypes.STRING
});

	return Physician;
}
