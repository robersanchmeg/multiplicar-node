//requirements 
const fs = require('fs');
var colors = require('colors');
//const fs = require('express');
//const fs = require('./fs');

let listarTabla = (base, limite) => {

    console.log('========================='.green);
    console.log(`tabla del ${base}`.green);
    console.log('========================='.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} x ${i} = ${base * i}`);
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) && !Number(limite)) {
            reject(`El valor de la base introducido ${base} y del limite ${limite} no son un número`);
            return;
        } else if (!Number(base)) {
            reject(`El valor de la base introducido ${base} no es un número`);
            return;
        } else if (!Number(limite)) {
            reject(`El valor del límite introducido ${limite} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}