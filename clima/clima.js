const axios = require('axios');


const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=b4ae1a6c978a60582135f2241115832f&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}