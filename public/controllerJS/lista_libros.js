'use strict';

const tablaLibros = document.querySelector('#tbl-libros tbody');
let listaLibros = [];

const inicializar = async() => {
    listaLibros = await obtenerListaLibros('/listar-libros');
    mostrarLibros();
};

const mostrarLibros = () => {
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

        fila.insertCell().innerText = libros.titulo,
            fila.insertCell().innerText = libros.autor,
            fila.insertCell().innerText = libros.publicacion,
            fila.insertCell().innerText = libros.editorial,
            fila.insertCell().innerText = '₡' + libros.precio,
            fila.insertCell().innerText = libros.descuento,
            fila.insertCell().innerText = libros.isbn,
            fila.insertCell().innerText = libros.genero,
            fila.insertCell().innerText = libros.premios,
            fila.insertCell().innerText = libros.sipnosis,
            fila.insertCell().innerText = libros.portada,
            fila.insertCell().innerText = libros.contraportada

        let celdaEliminar = fila.insertCell();
        celdaEliminar.appendChild(botonEliminar);

        botonEliminar.addEventListener('click', () => {
            eliminarLibro('/eliminar-libro', libros._id);
        });

        let celdaPerfil = fila.insertCell();
        celdaPerfil.appendChild(botonPerfil);

        botonPerfil.addEventListener('click', () => {
            let tituloLibro = '';
            let nombreAutor = '';
            let fechaPublicacion = '';
            let nombreEditorial = '';
            let precioLibro = '';
            let descuentoLibro = '';
            let isbnLibro = '';
            let generoLibro = '';
            let premiosLibro = '';
            let sipnosisLibro = '';
            let portadaLibro = '';
            let contraportadaLibro = '';


            let indice = botonPerfil.parentNode.parentNode.rowIndex;

            tituloLibro = document.getElementById('tbl-libros').rows[indice].cells[0].innerHTML
            nombreAutor = document.getElementById('tbl-libros').rows[indice].cells[1].innerHTML
            fechaPublicacion = document.getElementById('tbl-libros').rows[indice].cells[2].innerHTML
            nombreEditorial = document.getElementById('tbl-libros').rows[indice].cells[3].innerHTML
            precioLibro = document.getElementById('tbl-libros').rows[indice].cells[4].innerHTML
            descuentoLibro = document.getElementById('tbl-libros').rows[indice].cells[5].innerHTML
            isbnLibro = document.getElementById('tbl-libros').rows[indice].cells[6].innerHTML
            premiosLibro = document.getElementById('tbl-libros').rows[indice].cells[7].innerHTML
            generoLibro = document.getElementById('tbl-libros').rows[indice].cells[8].innerHTML
            sipnosisLibro = document.getElementById('tbl-libros').rows[indice].cells[9].innerHTML
            portadaLibro = document.getElementById('tbl-libros').rows[indice].cells[10].innerHTML
            contraportadaLibro = document.getElementById('tbl-libros').rows[indice].cells[11].innerHTML

            obtenerLibros(tituloLibro, nombreAutor, fechaPublicacion, nombreEditorial, precioLibro, descuentoLibro, isbnLibro, generoLibro, premiosLibro, sipnosisLibro, portadaLibro, contraportadaLibro);
        });
    });
    let numFilas = 0;
    numFilas = tablaLibros.rows.length
    for (let i = 0; i < numFilas; i++) {

        let celdaPublicacion = 0
        celdaPublicacion = tablaLibros.rows[i].cells[2];
        celdaPublicacion.style.display = 'none';

        let celdaEditorial = 0
        celdaEditorial = tablaLibros.rows[i].cells[3];
        celdaEditorial.style.display = 'none';

        let celdaISBN = 0
        celdaISBN = tablaLibros.rows[i].cells[6];
        celdaISBN.style.display = 'none';

        let celdaDescuentos = 0
        celdaDescuentos = tablaLibros.rows[i].cells[5];
        celdaDescuentos.style.display = 'none';

        // let celdaPremios = 0
        // celdaPremios = tablaLibros.rows[i].cells[8];
        // celdaPremios.style.display = 'none';

        let celdaSinopsis = 0
        celdaSinopsis = tablaLibros.rows[i].cells[9];
        celdaSinopsis.style.display = 'none';

        let celdaPortada = 0
        celdaPortada = tablaLibros.rows[i].cells[10];
        celdaPortada.style.display = 'none';

        let celdaContraportada = 0
        celdaContraportada = tablaLibros.rows[i].cells[11];
        celdaContraportada.style.display = 'none';

    }

};

function obtenerLibros(titulo, autor, publicacion, editorial, precio, descuento, isbn, premios, genero, sipnosis, portada, contraportada) {

    location.href = 'perfil_libro.html?titulo=' + encodeURI(titulo) + '&autor=' + encodeURI(autor) + '&publicacion=' + encodeURI(publicacion) + '&editorial=' + encodeURI(editorial) + '&precio=' + encodeURI(precio) + '&descuento=' + encodeURI(descuento) + '&isbn=' + encodeURI(isbn) + '&premios=' + encodeURI(premios) + '&genero=' + encodeURI(genero) + '&sipnosis=' + encodeURI(sipnosis) + '&portada=' + encodeURI(portada) + '&contraportada=' + encodeURI(contraportada);

};

inicializar();