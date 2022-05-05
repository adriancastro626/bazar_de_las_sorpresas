'use strict';

const tablaLibros = document.querySelector('#tbl-libros tbody');
let listaLibros = [];

const inicializarLibros = async() =>{
    listaLibros = await obtenerListaLibros('/listar-libros');
    mostrarTablas();
};

const mostrarTablas = async()=>{
    tablaLibros.innerHTML = '';
    
    listaLibros.forEach(libros =>{
        let fila = tablaLibros.insertRow();

        fila.insertCell().innerText = libros.titulo,
        fila.insertCell().innerText = libros.autor,
        fila.insertCell().innerText = libros.editorial,
        fila.insertCell().innerText = libros.fotos,
        fila.insertCell().innerText = libros.precio,
        fila.insertCell().innerText = libros.publicacion,
        fila.insertCell().innerText = libros.premios,
        fila.insertCell().innerText = libros.isbn,
        fila.insertCell().innerText = libros.sipnosis
    });
};

inicializarLibros();