var cities = require("../models/cityData") 
var countries = require("../models/countryData")


const getCountries = (request, response) => {
    response.json({
        country: countries
    });
  
};

const getCities = (request, response) => {
    response.json({
        cities: cities
    });
  
};

const newCity = (request, response) => {
    const city = request.body;
    response.json({
        newCity: city
    });
};

const updateCity = (request, response) => {
    const city = request.body;
    response.json({
        updatedCity: city
    });
};

const deleteCity = (request, response) => {
    const city = request.body;
    response.json({
        deletedCity: city
    });
};

module.exports = {
    getCities,
    getCountries,
    newCity,
    updateCity,
    deleteCity
};