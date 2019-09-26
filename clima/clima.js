const axios = require('axios')

const getClima = async(lat, lng) => {

    const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=d7e5e315ab7f339cdf4b1a7e594624f3&units=metric`);

    return respuesta.data.main.temp;

}

module.exports = {
    getClima
}