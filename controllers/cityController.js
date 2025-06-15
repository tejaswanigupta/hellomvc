
const getCities = (request, response) => {
    response.send('Get cities.');
};

const getCountries = (request, response) => {
    response.send('Get countries.');
};



module.exports = {
    getCities,
    getCountries
};