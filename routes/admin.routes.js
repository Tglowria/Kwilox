const express = require('express');
const { saveDrinks, updateDrinks, deleteDrinks, getAllDrinks} = require("../controllers/admin.controllers");


const router = express.Router();

router.post('/save', saveDrinks);
router.put('/update', updateDrinks);
router.delete('/delete', deleteDrinks);
router.get('/allDrinks', getAllDrinks);

module.exports = router;