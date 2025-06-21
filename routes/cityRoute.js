
const express = require('express')
let router = express.Router()

const {
    getCities,getCountries,newCity,updateCity,deleteCity
} = require("../controllers/cityController");

router.route("/city").get(getCities);
router.route("/country").get(getCountries);

router.route("/newCity").post(newCity);
router.route("/updateCity").put(updateCity);
router.route("/deleteCity").delete(deleteCity);



module.exports = router;