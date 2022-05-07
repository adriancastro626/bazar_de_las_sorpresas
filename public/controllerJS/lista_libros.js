'use strict';

const tablaLibros = document.querySelector('#tbl-libros tbody');
let listaLibros = [];

const inicializarLibros = async() =>{
    listaLibros = await obtenerListaLibros('/listar-libros');
    mostrarTablas();
};

const inicializar = async()=>{
    listaLibros = await obtenerListaLibros('/listar-libros');
    mostrarLibros();
};

const mostrarLibros =() => {
    tablaLibros.innerHTML = '';
    listaLibros.forEach(libros => {
        let botonPerfil = document.createElement('button');
        botonPerfil.name = 'boton-perfil';
        botonPerfil.classList.add('fa-book');
        botonPerfil.classList.add('fa-solid');
        botonPerfil.classList.add('fa-1l');
        botonPerfil.classList.add('icono-eliminar-modificar');

        let botonEliminar = document.createElement('button');
        botonEliminar.classList.add('fa-trash-can');
        botonEliminar.classList.add('fa-solid');
        botonEliminar.classList.add('fa-1l');
        botonEliminar.classList.add('icono-eliminar-modificar');
        botonEliminar.name = 'boton-eliminar';

        let fila = tablaLibros.insertRow();
        
        fila.insertCell().innerText = libros.titulo
        fila.insertCell().innerText = libros.publicacion,
        fila.insertCell().innerText = libros.autor,
        fila.insertCell().innerText = libros.editorial,
        fila.insertCell().innerText = libros.precio,
        fila.insertCell().innerText = libros.isbn

        let celdaEliminar = fila.insertCell();
        celdaEliminar.appendChild(botonEliminar);

        botonEliminar.addEventListener('click', ()=> {
            eliminarLibro('/eliminar-libro', libros._id);
        });

        let celdaPerfil = fila.insertCell();
        celdaPerfil.appendChild(botonPerfil);

        botonPerfil.addEventListener('click', () => {
            let tituloLibro = '';
            let nombreAutor = '';
            let fechaPublicacion = '';
            let nombreEditorial ='';
            let precioLibro = '';
            let isbnLibro = '';

            
            let indice = botonPerfil.parentNode.parentNode.rowIndex;

            tituloLibro = document.getElementById('tbl-libros').rows[indice].cells[0].innerHTML
            nombreAutor = document.getElementById('tbl-libros').rows[indice].cells[1].innerHTML
            nombreEditorial = document.getElementById('tbl-libros').rows[indice].cells[2].innerHTML
            precioLibro = document.getElementById('tbl-libros').rows[indice].cells[3].innerHTML
            isbnLibro = document.getElementById('tbl-libros').rows[indice].cells[4].innerHTML

            obtenerLibros(tituloLibro, nombreAutor, nombreEditorial, precioLibro,isbnLibro);
        });
    });   
};

function obtenerLibros(titulo, autor, editorial,precio, isbn) {

    location.href = 'perfil_libro.html?titulo=' + encodeURI(titulo) + '&autor=' + encodeURI(autor) + '&editorial=' + encodeURI(editorial) + '&precio=' + encodeURI(precio) + '&isbn=' + encodeURI(isbn);

};

inicializar();