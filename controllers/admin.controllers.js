const mongoose = require("mongoose");
const Drinks = require("../models/admin.models");

const saveDrinks = async (req, res) => {
  try {
    const { drinkName, manufacturerCompany, expiryDate, quantityAvailable } =
      req.body;
    if (
      !drinkName ||
      !manufacturerCompany ||
      !expiryDate ||
      !quantityAvailable
    ) {
      return res.status(400).json({
        message: "Please fill all fields",
      });
    }

    const newDrinks = new Drinks({
      drinkName,
      manufacturerCompany,
      expiryDate,
      quantityAvailable,
    });

    await newDrinks.save();

    res.status(200).json({
      message: "Drink Details Added Successfully",
    });
  } catch (error) {
    res.status(500).json({ error, message: "Error Saving Drink Details" });
  }
};

const updateDrinks = async (req, res) => {
  try {
    const { id } = req.query;
    const { drinkName, manufacturerCompany, expiryDate, quantityAvailable } =
      req.body;

    if ((!drinkName, !manufacturerCompany, !expiryDate, !quantityAvailable)) {
      return res.status(400).json({
        message: "Please fill all fields",
      });
    }

    const updatedDrinks = await Drinks.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        drinkName,
        manufacturerCompany,
        expiryDate,
        quantityAvailable,
      },
      { new: true }
    );

    res.status(200).json({
      message: "Drink Details Updated Successfully",
    });
  } catch (error) {
    res.status(500).json({ error, message: "Error Updating Drink Details" });
  }
};

const deleteDrinks = async (req, res) => {
  try {
    const { id } = req.query;

    const deletedDrinks = await Drinks.findByIdAndDelete({
      _id: id,
    });

    res.status(200).json({
      message: "Drink Details Deleted Successfully",
      deletedDrinks,
    });
  } catch (error) {
    res.status(500).json({ error, message: "Error Deleting AvailableDrinks" });
  }
};

module.exports = { saveDrinks, updateDrinks, deleteDrinks };
