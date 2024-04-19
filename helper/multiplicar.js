/*
//---- CREANDO LOGICA EN OTRO ARCHIVO multiplicar.js

// hacer la tabla del 5 en javascrip
const fs = require('fs'); // se exporta la libreria para poder hacer yso del file system

const crearArchivo = ( j = 5 ) =>{
    console.log('=============');
    console.log('Tabla del 5');
    console.log('=============');
    let salida = '';
    for(i = 1;i<=10;i++){
        salida += `${j} x ${i} = ${j * i}\n`; //la salida se concatena y se da un salto de linea.
    }

console.log(salida);

//el file system para grabar un archivo. en el primer parametro
//si no se pone el path, se graba en la rireccion donde esta ejecutando.
//segundo parametro son los datos. y el tercero es un callback que recibe el error si algo sale mal.
fs.writeFileSync(`tabla-del-${j}.txt`, salida);
    console.log(`Tabla del ${j} Creado`);

}

module.exports = {
    crearArchivo
}

---

//---- PARA MANEJAR UN POSIBLE ERROR

// hacer la tabla del 5 en javascrip
const fs = require('fs'); // se exporta la libreria para poder hacer yso del file system

//const { resolve } = requiere('path');
const crearArchivo = ( j = 5 ) =>{
    const promesa =new Promise((resolve, reject)=>{
        console.log('=============');
        console.log('Tabla del ',j);
        console.log('=============');
        let salida = '';
        for(i = 1;i<=10;i++){
            salida += `${j} x ${i} = ${j * i}\n`; //la salida se concatena y se da un salto de linea.
        }

        console.log(salida);

        //el file system para grabar un archivo. en el primer parametro
        //si no se pone el path, se graba en la rireccion donde esta ejecutando.
        //segundo parametro son los datos. y el tercero es un callback que recibe el error si algo sale mal.
        fs.writeFileSync(`tabla-del-${j}.txt`, salida);

        let nombreArchivo =`Tabla del ${j}`;
        (nombreArchivo) ?resolve(nombreArchivo) :reject(`No existe ${nombreArchivo}`);
    });

    return promesa;

}

module.exports = {
    crearArchivo
}

----

//---- USANDO LA PALABRA RESERVADA ASYNC

// hacer la tabla del 5 en javascrip
const fs = require('fs'); // se exporta la libreria para poder hacer yso del file system

//const { resolve } = requiere('path');
const crearArchivo = async( j = 5 ) =>{
    try{
        console.log('=============');
        console.log('Tabla del ',j);
        console.log('=============');
        let salida = '';
        for(i = 1;i<=10;i++){
            salida += `${j} x ${i} = ${j * i}\n`; //la salida se concatena y se da un salto de linea.
        }
        console.log(salida);

        fs.writeFileSync(`tabla-del-${j}.txt`, salida);

        return `Tabla del ${j}`;
    }catch(err){
        throw err;
    }

}

module.exports = {
    crearArchivo
}


----

//---- ACTUALIZACION POR LA OPCION DE MOSTRAR EN CONSOLA O NO LA TABLA

// hacer la tabla del 5 en javascrip
const fs = require('fs'); // se exporta la libreria para poder hacer yso del file system

const { resolve } = require('path');
const crearArchivo = async( j = 5, listar = true ) =>{
    try{
        let salida = '';
        for(i = 1;i<=10;i++){
            salida += `${j} x ${i} = ${j * i}\n`; //la salida se concatena y se da un salto de linea.
        }
        if(listar){
            console.log('=============');
            console.log('Tabla del ',j);
            console.log('=============');
            console.log(salida);
        }
        

        fs.writeFileSync(`tabla-del-${j}.txt`, salida);

        return `Tabla del ${j}`;
    }catch(err){
        throw err;
    }

};

module.exports = {
    crearArchivo
}

---

//---- AÑADIENDO COLORES A LA IMRPESIÓN EN CONSOLA

// hacer la tabla del 5 en javascrip
const fs = require('fs'); // se exporta la libreria para poder hacer yso del file system
const colors = require('colors');
const { resolve } = require('path');
const crearArchivo = async( j = 5, listar = true ) =>{
    try{
        let salida = '';
        for(i = 1;i<=10;i++){
            salida += `${j} ${'x'.red} ${i} ${'='.red} ${j * i}\n`; //la salida se concatena y se da un salto de linea.
        }
        if(listar){
            console.log('============='.green);
            console.log('Tabla del ',colors.blue(j));
            console.log('============='.blue);
            console.log(salida);
        }
        

        fs.writeFileSync(`tabla-del-${j}.txt`, salida);

        return `Tabla del ${j}`;
    }catch(err){
        throw err;
    }

};

module.exports = {
    crearArchivo
}

----

//---- AÑADIENDO LA OPCION DE TABLA DE MULTIPLICACION HASTA X

// hacer la tabla del 5 en javascrip
const fs = require('fs'); // se exporta la libreria para poder hacer yso del file system
const colors = require('colors');
const { resolve } = require('path');
const crearArchivo = async( j = 5, listar = true, hasta=10 ) =>{
    try{
        let salida = '';
        for(i = 1;i<=hasta;i++){
            salida += `${j} ${'x'.red} ${i} ${'='.red} ${j * i}\n`; //la salida se concatena y se da un salto de linea.
        }
        if(listar){
            console.log('============='.green);
            console.log('Tabla del ',colors.blue(j));
            console.log('============='.blue);
            console.log(salida);
        }
        

        fs.writeFileSync(`tabla-del-${j}.txt`, salida);

        return `Tabla del ${j}`;
    }catch(err){
        throw err;
    }

};

module.exports = {
    crearArchivo
}


//---- PARA SOLUCIOANR EL PROBLEMA DE LA IMPRESION EN EL ARCHIVO POR EL FORMATO DE COLORES

const fs = require('fs'); // se exporta la libreria para poder hacer yso del file system
const colors = require('colors');
const { resolve } = require('path');
const crearArchivo = async( j = 5, listar = true, hasta=10 ) =>{
    try{
        let salida = '';
        let consola = '';
        for(i = 1;i<=hasta;i++){
            salida += `${j} ${'x'} ${i} ${'='} ${j * i}\n`; 
            consola += `${j} ${'x'.red} ${i} ${'='.red} ${j * i}\n`; 
        }
        if(listar){
            console.log('============='.green);
            console.log('Tabla del ',colors.blue(j));
            console.log('============='.blue);
            console.log(consola);
        }
        

        fs.writeFileSync(`tabla-del-${j}.txt`, salida);

        return `Tabla del ${j}`;
    }catch(err){
        throw err;
    }

};

module.exports = {
    crearArchivo
}


*/

//---- PARA GUARDAR LOS ARCHIVOS CREADOS EN UNA CARPETA LLAMADA SALIDA

const fs = require('fs'); // se exporta la libreria para poder hacer yso del file system
const colors = require('colors');
const { resolve } = require('path');
const crearArchivo = async( j = 5, listar = true, hasta=10 ) =>{
    try{
        let salida = '';
        let consola = '';
        for(i = 1;i<=hasta;i++){
            salida += `${j} ${'x'} ${i} ${'='} ${j * i}\n`; 
            consola += `${j} ${'x'.red} ${i} ${'='.red} ${j * i}\n`; 
        }
        if(listar){
            console.log('============='.green);
            console.log('Tabla del ',colors.blue(j));
            console.log('============='.blue);
            console.log(consola);
        }
        

        fs.writeFileSync(`./salida/tabla-del-${j}.txt`, salida);

        return `Tabla del ${j}`;
    }catch(err){
        throw err;
    }

};

module.exports = {
    crearArchivo
}