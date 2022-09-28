const fs = require('fs');
require('colors');

const crearArchivo = async ( {base, listar = false, hasta = 10 }) => {
    let salida = '';

    for(let i = 1; i <= hasta; i++) {
        salida += `${ base } x ${ i } = ${ base * i}\n`;
    }

    if(listar) {
        console.log(salida);
    }

    fs.writeFileSync(`tablas/tabla-${base}-hasta-${hasta}.txt`, salida);

    return `tabla-${base}-hasta-${hasta}.txt`;
}

module.exports = {
   crearArchivo
}