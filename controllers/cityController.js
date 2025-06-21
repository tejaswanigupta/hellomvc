var cities = require("../models/cityData") 


const getCities = (request, response) => {
    response.json({
        cities: cities
    });
  
};

const getCountries = (request, response) => {
    response.send('Get countries.');
};



module.exports = {
    getCities,
    getCountries
};