const express = require('express');
const { saveDrinks, updateDrinks, deleteDrinks} = require("../controllers/admin.controllers");


const router = express.Router();

router.post('/save', saveDrinks);
router.put('/update', updateDrinks);
router.delete('/delete', deleteDrinks);

module.exports = router;