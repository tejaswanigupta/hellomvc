const express = require('express')
let router = express.Router()

const {
    getCurrencies
} = require("../controllers/currencyController");

router.route("/currency").get(getCurrencies);



module.exports = router;