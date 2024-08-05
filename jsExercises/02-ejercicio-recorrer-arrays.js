// Ejercicio: Recorrer arrays con for y forEach en JavaScript

// 1. Creamos un array de números
let numeros = [1, 2, 3, 4, 5, 6, 8, 9, 10];

// 2. Recorremos el array con un bucle for
for (let i = 0; i < numeros.length; i++) {
    console.log(`indice: ${i}: ${numeros[i]}`);
    console.log("indice:" + i + ": " + numeros[i]);
}

// 3. Recorremos el array con forEach

numeros.forEach((numeros, indice) => {
    console.log(`indice ${indice}: ${numeros} `);
});

// 4. Calculamos la suma de los números usando for



let suma = 0;

for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}

console.log("La suma de los números es:", suma);

// 5. Calculamos la suma de los números usando forEach
let sumaEach = 0;
numeros.forEach(numeros => {
    sumaEach += numeros;
});
console.log(`La suma con forEach es: ${sumaEach}`);



// 6. Creamos un nuevo array con los números pares usando for
let paresFor = [];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) { 
        paresFor.push(numeros[i]); 
    }
}

console.log("Los números pares son:", paresFor);


// 7. Creamos un nuevo array con los números pares usando forEach

let paresEach = [];
numeros.forEach(numero => {
    if( (numero % 2 )=== 0){
        paresEach.push(numero);
    }
    
});
console.log(" Números pares utilizando foreach:",
    paresEach);