// Ejercicio: Manejo de objetos en JavaScript

// 1. Creamos un objeto que representa a un estudiante

let estudiante = {
    nombre: "Ana",
    edad: 22,
    carrera: "Informática",
    asignaturas: [
        "programación ", "base de datos",
        "redes"],
    activo: true,
}
console.log("Nombre:", estudiante.nombre);
console.log("Edad:", estudiante.edad);

// 2. Accedemos y mostramos propiedades del objeto


// 3. Modificamos una propiedad
estudiante.edad = 23;
console.log(estudiante);

// 4. Añadimos una nueva propiedad
estudiante.semestre = 6;
console.log(estudiante);

// 5. Recorremos las propiedades del objeto con for...in

for (let propiedad in estudiante)
    console.log(propiedad + ": " + estudiante[propiedad]);

// 6. Creamos un método en el objeto

estudiante.presentarse = function () {
    console.log(`Hola soy ${this.nombre}, tengo ${this.edad} 
        años y estudio ${this.carrera}`);
    estudiante.presentarse();
}


estudiante.presentarse2 = function () {
    return `Hola, soy ${this.nombre}, tengo ${this.edad}
    años y estudio ${this.carrera}`;
}
console.log(estudiante.presentarse2());

// 7. Llamamos al método


// 8. Creamos un array de objetos
let estudiantes = [
    { nombre: 'Carlos', edad: 20, carrera: 'Medicina' },
    { nombre: 'Laura', edad: 21, carrera: 'Derecho' },
    { nombre: 'Pedro', edad: 22, carrera: 'Ingenieria' },
];

// 9. Recorremos el array de objetos
console.log("Lista de estudiantes:");
estudiantes.forEach((estudiante, indice) => {
    console.log(`Estudiante ${indice + 1}: ${estudiante.nombre}, ${estudiante.edad}años, ${estudiante.carrera}`);

});

// 10. Buscamos un estudiante por su nombre

let estudianteCarlos = estudiantes.find(estudiante =>
    estudiante.nombre = "Carlos");
console.log("Estudiante encontrado", estudianteCarlos);
//hacer una función que busque un objeto en el array cuyo nombre coincida ocn el que le pasemos por parámetro.

function buscarEstudiante(nombre) {
    let estudianteEncontrado = estudiantes.find(estudiante =>
        estudiante.nombre === nombre);
    return estudianteEncontrado;
}

function buscarEstudiante2(nombre) {
    return estudiantes.find(estudiante => estudiante.nombre
        === nombre);
}

let estudianteBuscado = buscarEstudiante2("Carlos");
if (estudianteBuscado != undefined) {
    console.log("Estudiante encontrado:",
        estudianteBuscado);
} else {
    console.log("El estudiante no existe");
}

console.log(buscarEstudiante2("Carlos"));

