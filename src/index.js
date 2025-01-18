// PRIMER MODELO

/*const { obtenertitulo, obtenerdocente } = require('../src/funciones') //se importo desestructurada
const { boot} = require('../src/objetos')
//const fun = require('../src/funciones')
//const obt = require('../src/objetos')

//const {cursoboot, dificultad, nivel} = boot

console.log(obtenertitulo())
console.log(obtenerdocente('Jhonathan', 'Devrier'))
console.log(boot.cursoboot)
console.log("La dificultad del curso es ", boot.dificultad)
console.log("el nivel es ",boot.nivel)*/

// ESM ULTIMO MODELO

import { obtenertitulo, obtenerdocente } from "../src/funciones.js";
import { boot } from "../src/objetos.js";

console.log(obtenertitulo())
console.log(obtenerdocente('Jhonathan', 'Devrier'))
console.log(boot.cursoboot)
console.log("La dificultad del curso es ", boot.dificultad)
console.log("el nivel es ",boot.nivel)