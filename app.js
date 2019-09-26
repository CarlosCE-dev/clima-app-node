const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima(35, 139).then(console.log).catch(console.log);

const getInfo = async(direccion) => {

    try {
        const getLugar = await lugar.getLugarLatLng(direccion);
        const getClima = await clima.getClima(getLugar.lat, getLugar.lng);
        return `El clima de ${ getLugar.direccion } es de ${getClima}.`
    } catch (error) {
        return `No se pudo determinar el clima de ${ direccion }`
    }


    // console.log(clima);
}

getInfo(argv.direccion).then(console.log).catch(console.log);