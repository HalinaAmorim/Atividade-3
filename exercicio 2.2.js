const dispositivo1 = { info: { bateria: { nivel: 85 } } };
const dispositivo2 = { info: null };
const dispositivo3 = { info: { bateria: { nivel: 0 } } };

const nivel1 = dispositivo1.info?.bateria?.nivel ?? -1;
const nivel2 = dispositivo2.info?.bateria?.nivel ?? -1;
const nivel3 = dispositivo3.info?.bateria?.nivel ?? -1;

console.log(nivel1); 
console.log(nivel2); 
console.log(nivel3); 

