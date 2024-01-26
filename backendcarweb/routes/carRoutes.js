const express = require('express');
const {createCar, allCar, oneCar, deleteCar, deleteCars, carCatagory, updateRecords} = require('../controllers/carController');
const router = express.Router();


router.post('/addCar', createCar);
router.get('/allCar', allCar);
router.get('/oneCar/:id', oneCar );
router.delete('/deleteCar/:id', deleteCar);
router.delete('/deleteManyCar', deleteCars);

router.get('/search/:catagory', carCatagory);
// router.post('/update', updateRecords);
module.exports = router;