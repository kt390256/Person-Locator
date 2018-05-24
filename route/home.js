const express = require('express');
const router = express.Router();
const PatientController = require('../controller/PatientController');
const HomeController = require('../controller/HomeController');

router.get('/', HomeController.getEverything);

router.get('/addPatient', PatientController.showAddPatient);

router.post('/addPatient', PatientController.addPatient);

router.get('/search', HomeController.searchAddress);

module.exports = router;
