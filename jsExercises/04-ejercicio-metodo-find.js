// Ejercicio: Uso del método find en JavaScript

// 1. Creamos un array de objetos que representan libros
const libros = [
    {
        id: 1, titulo: "El Quijote", autor: "Miguel de Cervantes",
        fecha: 1949
    },
    {
        id: 2, titulo: "Cien años de soledad", autor: "Gabriel García Marquez",
        fecha: 1967
    },
    {
        id: 3, titulo: "Rayuela", autor: "Julio Cortazar",
        fecha: 1963
    },
    {
        id: 4, titulo: "Ficciones", autor: "Jorge Luis Borges",
        fecha: 1944
    },
]

console.log(libros)

// 2. Función para encontrar un libro por su ID
function EncontrarLibroId(id) {
    return libros.find(libro => libro.id === id);
}
console.log("libro con id 3:", EncontrarLibroId(3));
console.log("libro con id 1:", EncontrarLibroId(1));


// 3. Función para encontrar un libro por su título (ignorando mayúsculas/minúsculas)

function encontrarLibroPorTitulo(titulo) {
    return libros.find(libro => libro.titulo.toLocaleLowerCase()
        === titulo.toLocaleLowerCase());
}

console.log("libro titulado rayuela:",
    encontrarLibroPorTitulo("rayuela"));

// 4. Función para encontrar el primer libro de un autor específico
function encontrarLibroporAutor(autor) {
    return libros.find(libro => libro.autor.includes(autor));
}
function encontrarLibroporAutor2(autor) {
    return libros.find(libro => libro.autor.toLocaleLowerCase().
        includes(autor.toLocaleLowerCase()));
}
console.log("libro de borges:", encontrarLibroporAutor2('borges'));

console.log("libro de Borges:", encontrarLibroporAutor('Borges'));
// 5. Función para encontrar el primer libro publicado después de un año específico

function encontrarLibroDespuesAnyo(anyo) {
    return libros.find(libro => libro.anyo > anyo);
}
console.log("primer libro después de 1950:",
    encontrarLibroDespuesAnyo(1950));
// 6. Función para encontrar un libro que cumpla múltiples criterios

function encontrarLibroCriterios(criterios) {
    return libros.find(libro => {
        for (let propiedad in criterios) {
            if (libro[propiedad] !== criterios[propiedad]) {
                return false;
            }
        }
        return true;
    })
}
let criterios = { autor: "George Orwell", anyo: 1949};
let libroEncontrado = encontrarLibroCriterios(criterios);


console.log(libroEncontrado);
// 7. Intentar encontrar un libro que no existe
 
