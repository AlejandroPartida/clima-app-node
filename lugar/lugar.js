const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    const encodedURL = encodeURI(direccion);

    const instance = axios.create({
        baseURL: 'http://api.weatherapi.com/v1/current.json',
        params: {
            key: "481a9bfa99c7429c9d8235207211101",
            q: encodedURL
        }
    });



    const resp = await instance.get();

    if (resp.data.error) {

        throw `No hay resultados para ${direccion}`;

    }

    const data = resp.data;
    const location = resp.data.location.name;
    const lat = data.location.lat;
    const lng = data.location.lon;


    return {
        location,
        lng,
        lat
    }

}


module.exports = {
    getLugarLatLng
}