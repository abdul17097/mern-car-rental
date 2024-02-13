const { Car } = require("../model/carModel");
const mongoose = require("mongoose");

const createCar = async (req, res) => {
  try {
    const { formData } = req.body;
    console.log(req.body);
    const createCar = await Car.create(req.body);

    if (createCar) {
      return res.status(200).json({ success: true, data: createCar });
    } else {
      return res.json({ success: false });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

const allCar = async (req, res) => {
  try {
    const cars = await Car.find();

    if (cars) {
      res.status(200).json({ cars: cars, success: true });
    } else {
      res.status(402).json({ success: false });
    }
  } catch (error) {
    res.json({ error: error.message });
  }
};

const oneCar = async (req, res) => {
  try {
    const car = await Car.findOne({ _id: req.params.id });
    if (car) {
      res.status(200).json({ car: car, success: true });
    } else {
      res.status(404).json({ success: false });
    }
  } catch (error) {
    res.json({ success: false });
  }
};

// const deleteCar = async (req, res) => {
//   try {
//     console.log(req.params.id);
//     const car = await Car.findById({ _id: req.params.id });
//     if (car) {
//       const deleteCar = await Car.deleteOne({ _id: car._id });
//       res.json({ car: deleteCar, success: true });
//     } else {
//       res.json({ success: false });
//     }
//   } catch (error) {
//     res.json({ success: false });
//   }
// };
const deleteCar = async (req, res) => {
  try {
    const carId = req.params.id; // Extract car ID from request parameters
    const car = await Car.findById(carId); // Find car by ID
    if (car) {
      await Car.deleteOne({ _id: carId }); // Delete car
      res.json({ success: true });
    } else {
      res.status(404).json({ success: false, message: "Car not found" }); // Return 404 if car not found
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" }); // Return 500 for internal server errors
  }
};

const deleteCars = async (req, res) => {
  try {
    const { ObjectId } = require("mongodb"); // Simplified ObjectId import

    const carIds = req.body.map((id) => new ObjectId(id));

    const result = await Car.remove({ _id: { $in: carIds } });

    if (result.deletedCount > 0) {
      res.json({ message: `${result.deletedCount} cars deleted successfully` });
    } else {
      res.status(404).json({ message: "No cars found for deletion" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const carCatagory = async (req, res) => {
  try {
    const cars = await Car.find(req.params);

    if (cars) {
      res.status(200).json({ cars: cars, success: true });
    } else {
      res.status(402).json({ success: false });
    }
  } catch (error) {}
};

const updateRecords = async (req, res) => {
  try {
    const updateOperation = {
      $set: {
        driver: 1000, // Set the default value for the new field
      },
      // Update all records in the Car collection
    };
    const result = await Car.updateMany({}, updateOperation);
    // Check the result and send a response
    if (result) {
      res
        .status(200)
        .json({ message: `${result.nModified} records updated successfully` });
    } else {
      res.status(500).json({ message: "Failed to update records" });
    }
  } catch (error) {}
};

module.exports = {
  createCar,
  allCar,
  oneCar,
  deleteCar,
  deleteCars,
  carCatagory,
  updateRecords,
};
