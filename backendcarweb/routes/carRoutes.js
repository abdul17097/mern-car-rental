const express = require('express');
const {createCar, allCar, oneCar, deleteCar, deleteCars} = require('../controllers/carController');
const router = express.Router();


router.post('/addCar', createCar);
router.get('/allCar', allCar);
router.get('/oneCar/:id', oneCar );
router.delete('/deleteCar/:id', deleteCar);
router.delete('/deleteManyCar', deleteCars);
module.exports = router;