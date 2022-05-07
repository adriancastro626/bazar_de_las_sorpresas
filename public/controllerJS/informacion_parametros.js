'use strict';

const tablaPromociones = document.querySelector('#tabla-promociones tbody');
let listaPromociones = [];

const inicalizarPromociones = async() =>{
    listaPromociones = await obtenerListaPromociones('/listar-promociones');
    mostrarTablas();
};



const mostrarTablas = async()=>{
    tablaPromociones.innerHTML = '';
    
    listaPromociones.forEach(promocion =>{
        let fila = tablaPromociones.insertRow();

        fila.insertCell().innerText = promocion.nombrepromocion,
        fila.insertCell().innerText = promocion.porcentajepromocion

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
            eliminarPromocion('/eliminar-promocion', promocion._id);
        });

        celdaEliminar.appendChild(botonEliminar);
        celdaModificar.appendChild(botonModificar);
    });
};

inicalizarPromociones();





