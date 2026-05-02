"use strict";
import seedrandom from "seedrandom";

var random = seedrandom(1763519);

let numerosAleatorios = Array.from({length: 100}, () => random.int32());

console.log("Demostracion de Join: {", numerosAleatorios); // De esta forma mostrara un array en formato json

console.log("Mostramos la contidad de numeros positivos: ", numerosAleatorios.filter(value => value > 0).length);

let numerosAleatoriosPositivos = numerosAleatorios.filter(value => value > 0);

console.log("Mostramos los numeros positivos: { " + numerosAleatoriosPositivos.join(",") + " }"); // Y de esta forma mostrara el Array como una concatenacion