'use strict'

module.exports = (sequelize, DataTypes) => {

//creates patient model

var Patient = sequelize.define('Patient', {
  patientName: DataTypes.STRING,
  location: DataTypes.STRING
});

	return Patient;
}
