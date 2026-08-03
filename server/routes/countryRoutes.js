const express = require("express");

const router = express.Router();

const controllers = require("../controllers/countryController");

router.get("/", controllers.getCountries);

router.post("/", controllers.createCountry);

router.put("/:id", controllers.updateCountry);

router.delete("/:id", controllers.deleteCountry);

module.exports = router;