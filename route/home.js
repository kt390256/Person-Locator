const express = require('express');
const router = express.Router();
const PhysicianController = require('../controller/PhysicianController');
const HomeController = require('../controller/HomeController');

router.get('/', HomeController.getEverything);

router.get('/addPhysician', PhysicianController.showAddPhysician);

router.post('/addPhysician', PhysicianController.addPhysician);

router.get('/search', HomeController.searchAddress);

module.exports = router;
