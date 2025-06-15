
const express = require('express')
let router = express.Router()

const {
    getCities,getCountries
} = require("../controllers/cityController");

router.route("/city").get(getCities);
router.route("/country").get(getCountries);
router.route("/city2").get(getCities);



module.exports = router;