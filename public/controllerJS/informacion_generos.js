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

        let celdaBotones = fila.insertCell();

        let botonEliminar = document.createElement('button');
        botonEliminar.classList.add('btn-eliminar');
        botonEliminar.innerHTML = 'Eliminar';

        botonEliminar.addEventListener('click', ()=> {
            eliminarGenero('/eliminar-generoliterario', generosliterarios._id);
        });

        celdaBotones.appendChild(botonEliminar);

    });
};

inicializarGeneros();