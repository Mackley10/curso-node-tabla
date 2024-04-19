/*
//----- REQUERIR INFORMACIÓN

// hacer la tabla del 5 en javascrip
console.clear();
console.log('=============');
console.log('Tabla del 5');
console.log('=============');
const j = 5;
for(i = 1;i<=10;i++){
    console.log(`${j} x ${i} = ${j * i}`);
}

---

//---- REQUERIR PAQUETES

// hacer la tabla del 5 en javascrip
const fs = require('fs'); // se exporta la libreria para poder hacer yso del file system
console.clear();
console.log('=============');
console.log('Tabla del 5');
console.log('=============');
const j = 5;
let salida = '';
for(i = 1;i<=10;i++){
    salida += `${j} x ${i} = ${j * i}\n`; //la salida se concatena y se da un salto de linea.
}
console.log(salida);

//el file system para grabar un archivo. en el primer parametro
//si no se pone el path, se graba en la rireccion donde esta ejecutando.
//segundo parametro son los datos. y el tercero es un callback que recibe el error si algo sale mal.
fs.writeFile('tabla-del-5.txt', salida, (err) => {
    if(err) throw err;
    console.log('Tabla-del-5 creado');
})

---

//---- GUARDANDO TABLAS DE DIVERSOS NUMERO EN ARCHIVOS

// hacer la tabla del 5 en javascrip
const fs = require('fs'); // se exporta la libreria para poder hacer yso del file system
console.clear();
console.log('=============');
console.log('Tabla del 5');
console.log('=============');

const j = 10;

let salida = '';
for(i = 1;i<=10;i++){
    salida += `${j} x ${i} = ${j * i}\n`; //la salida se concatena y se da un salto de linea.
}
console.log(salida);

//el file system para grabar un archivo. en el primer parametro
//si no se pone el path, se graba en la rireccion donde esta ejecutando.
//segundo parametro son los datos. y el tercero es un callback que recibe el error si algo sale mal.
fs.writeFile(`tabla-del-${j}.txt`, salida, (err) => {
    if(err) throw err;
    console.log(`Tabla del ${j} Creado`);
})

----

//---- CREANDO LOGICA EN OTRO ARCHIVO multiplicar.js

// hacer la tabla del 5 en javascrip
const {crearArchivo} = require('./helper/multiplicar')
console.clear();
const j = 3;
crearArchivo(j);

---

//---- PARA MANEJAR UN POSIBLE ERROR

// hacer la tabla del 5 en javascrip
const {crearArchivo} = require('./helper/multiplicar')
console.clear();
const j = 7;
crearArchivo(j)
    .then( nombreArchivo => console.log(nombreArchivo, 'Creado'))
    .catch( err =>console.log(err));


----

//---- OBTENIENDO EL ARGUMENTO DESDE CONSOLA

// hacer la tabla del 5 en javascrip
const {crearArchivo} = require('./helper/multiplicar')
console.clear();
const [ , ,arg3 = 'j = 5'] = process.argv; // estamos tomando el tercer argumento.
const[ , j ]= arg3.split( '='); //separa el string por el caracter =
console.log(j);
crearArchivo(j)
    .then( nombreArchivo => console.log(nombreArchivo, 'Creado'))
    .catch( err =>console.log(err));

----

//---- HACIENDO USO DE LA DEPENDENCIA YARGS EN APP.JS

// hacer la tabla del 5 en javascrip
const {crearArchivo} = require('./helper/multiplicar');
const argv = require('yargs').argv;
console.clear();

console.log(process.argv);
console.log(argv);
console.log('j de yargs:', argv.j);

//const [ , ,arg3 = 'j = 5'] = process.argv; // estamos tomando el tercer argumento.
//const[ , j ]= arg3.split( '='); //separa el string por el caracter =
//console.log(j);

crearArchivo(j)
    .then( nombreArchivo => console.log(nombreArchivo, 'Creado'))
    .catch( err =>console.log(err));
    
----

//---- CONFIGURANDO LOS YARGS EN APP.JS

// hacer la tabla del 5 en javascrip
const {crearArchivo} = require('./helper/multiplicar');
const argv = require('yargs')
    .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true
    })
    .argv;
console.clear();
//console.log(process.argv);
console.log(argv);
console.log('Base de yargs', argv.b);

---- 

//---- PARA VALIDAR QUE EL ARGUMENTO SEA DEL TIPO CORRECTO

// hacer la tabla del 5 en javascrip
const { option } = require('yargs');
const {crearArchivo} = require('./helper/multiplicar');
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true
    })
    .check((argv, options ) => {
        if(isNaN(argv.b)){
        throw 'La base debe ser un Numero';
        }
        return true;
        
    })
    .argv;
console.clear();
//console.log(process.argv);
console.log(argv);
//console.log('Base de yargs', argv.b);

crearArchivo(argv.b)
    .then( nombreArchivo => console.log(nombreArchivo, 'Creado'))
    .catch( err =>console.log(err));

----

//---- PARA VALIDAR QUE EL ARGUMENTO SEA DEL TIPO CORRECTO

// hacer la tabla del 5 en javascrip
const { option } = require('yargs');
const {crearArchivo} = require('./helper/multiplicar');
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true
    })
    .check((argv, options ) => {
        if(isNaN(argv.b)){
        throw 'La base debe ser un Numero';
        }
        return true;
        
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false
        
    })
    .argv;

console.clear();
console.log(argv);

crearArchivo(argv.b)
    .then( nombreArchivo => console.log(nombreArchivo, 'Creado'))
    .catch( err =>console.log(err));

----

//---- PONIENDO YARGS EN OTRA CARPETA

// hacer la tabla del 5 en javascrip
const { option } = require('yargs');
const {crearArchivo} = require('./helper/multiplicar');
const argv = require('./Config/yargs');


console.clear();
console.log(argv);

crearArchivo(argv.b)
    .then( nombreArchivo => console.log(nombreArchivo, 'Creado'))
    .catch( err =>console.log(err));



//---- IMPORTANDO LOS ARCHIVOS DE LA DEPENDECIA DE COLORES

// hacer la tabla del 5 en javascrip
const { option } = require('yargs');
const {crearArchivo} = require('./helper/multiplicar');
const colors = require('colors');
const argv = require('./Config/yargs');


console.clear();
console.log(argv);

crearArchivo(argv.b,argv.l)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'Creado'))
    .catch( err =>console.log(err));

*/

//---- AÑADIENDO LA OPCION DE TABLA DE MULTIPLICACION HASTA X

const { option } = require('yargs');
const {crearArchivo} = require('./helper/multiplicar');
const colors = require('colors');
const argv = require('./Config/yargs');


console.clear();
console.log(argv);

crearArchivo(argv.b,argv.l,argv.h)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'Creado'))
    .catch( err =>console.log(err));
