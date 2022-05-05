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

        let celdaBotones = fila.insertCell();

        let botonEliminar = document.createElement('button');
        botonEliminar.classList.add('btn-eliminar');
        botonEliminar.innerHTML = 'Eliminar';

        botonEliminar.addEventListener('click', ()=> {
            eliminarPromocion('/eliminar-promocion', promocion._id);
        });

        celdaBotones.appendChild(botonEliminar);
    });
};

inicalizarPromociones();