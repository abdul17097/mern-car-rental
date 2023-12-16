const { Car } = require("../model/carModel");
const mongoose = require("mongoose");

const createCar = async (req, res) => {
  try {
    const {
      formData
    } = req.body;
    console.log(req.body);
    const createCar = await Car.create(req.body);

    if (createCar) {
      return res.status(200).json({ success: true, data: createCar });
    }else{
      return res.json({ success: false });
    }

  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

const allCar = async (req, res)=>{
  try {
    const cars = await Car.find();

    if(cars){
      res.status(200).json({ cars: cars, success: true});
    }else{
      res.status(402).json({ success: false});
    }
  } catch (error) {
    res.json({ error: error.message });
  }
}

const oneCar =  async (req, res) => {
  try {
    const car = await Car.findOne({_id: req.params.id});
    if(car){
      res.status(200).json({ car: car, success: true});
    }else{
      res.status(404).json({ success: false});
    }
    
  } catch (error) {
    res.json({ success: false});
  }
};

const deleteCar = async (req,res)=>{
  try {
    const car = await Car.findById({_id: req.params.id});
    if(car){
      const deleteCar = await Car.deleteOne({_id: car._id});
      res.json({ car: deleteCar, success: true});
    }else{
      res.json({ success: false});
    }
  } catch (error) {
    res.json({ success: false});
  }
}

const deleteCars = async (req, res) => {
  try {
    const { ObjectId } = require('mongodb'); // Simplified ObjectId import

    const carIds = req.body.map(id => new ObjectId(id));

    const result = await Car.remove({ _id: { $in: carIds } });

    if (result.deletedCount > 0) {
      res.json({ message: `${result.deletedCount} cars deleted successfully` });
    } else {
      res.status(404).json({ message: 'No cars found for deletion' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}



module.exports = {createCar, allCar, oneCar, deleteCar, deleteCars};
