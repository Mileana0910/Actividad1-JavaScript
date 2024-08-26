//DESAFIO
//Escribe un programa que reciba un arreglo de números y retorne un nuevo arreglo con solo los números
//pares utilizando funciones. 
function obtenerNumerosPares (arreglo) {
    const numerosPares = arreglo.filter(function(numero) {
        return numero % 2 === 0;
        
    })
    return numerosPares;
}
const numeros = [1,2,3,4,5,6,7,8,9,10];
const pares = obtenerNumerosPares(numeros);
console.log(pares);