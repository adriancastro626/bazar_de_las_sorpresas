'use strict';

const tablaGeneros = document.querySelector('#lista-generos-tabla tbody');
let listaGeneros = [];

const inicializarGeneros = async() =>{
    listaGeneros = await obtenerListaGeneros('/listar-generosliterarios');
    mostrarTablas();
};

const mostrarTablas = async()=>{
    tablaGeneros.innerHTML = '';

    listaGeneros.forEach(generosliterarios =>{
        let fila = tablaGeneros.insertRow();

        fila.insertCell().innerText = generosliterarios.nombregenero

        let celdaEliminar = fila.insertCell();
        let celdaModificar = fila.insertCell();

        let botonEliminar = document.createElement('button');
        botonEliminar.classList.add('fa-trash-can');
        botonEliminar.classList.add('fa-solid');
        botonEliminar.classList.add('fa-1l');
        botonEliminar.classList.add('icono-eliminar-modificar');

        let botonModificar = document.createElement('button');
        botonModificar.classList.add('fa-pen-to-square');
        botonModificar.classList.add('fa-solid');
        botonModificar.classList.add('fa-1l');
        botonModificar.classList.add('icono-eliminar-modificar');

        botonEliminar.addEventListener('click', ()=> {
            eliminarGenero('/eliminar-generoliterario', generosliterarios._id);
        });

        celdaEliminar.appendChild(botonEliminar);
        celdaModificar.appendChild(botonModificar);

    });
};

inicializarGeneros();