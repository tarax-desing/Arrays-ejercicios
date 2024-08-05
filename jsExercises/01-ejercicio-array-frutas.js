// Ejercicio: Manejo básico de arrays en JavaScript



// 1. Crea un array llamado 'frutas' con 5 nombres de frutas
let frutas =   ["manzanas","peras", "ciruelas", "melocotón", "uvas"]
    console.log('array completo',frutas)

// 2. Imprime el array completo


// 3. Imprime la longitud del array

    console.log('longitud del array ',frutas.length);


// 4. Accede e imprime el tercer elemento del array

console.log('tercer elemento',frutas[2]);
// 5. Añade una fruta al final del array usando push()

frutas.push("kiwi");
console.log('añade elemento',frutas);
// 6. Elimina el último elemento del array usando pop()
let frutaEliminada = frutas.pop();
console.log("array después del pop", frutas);

console.log('array después del pop',frutas);


// 7. Añade una fruta al principio del array usando unshift()
frutas.unshift('fresa');
console.log("array después del unshift", frutas);

// 8. Elimina el primer elemento del array usando shift()
let primeraFruta = frutas 
console.log('array final', frutas);
