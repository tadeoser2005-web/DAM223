console.log("Hola mundo NODE");

let Edad1 = 20;

let Edad2 = 67;

console.log("Edad promedio:")

console.log((Edad1+Edad2)/2);

console.log("Medidor de procesos");

console.time('miProceso');

for(let i = 0 ; i < 100000000 ; i ++);{}

console.timeEnd('miProceso');

