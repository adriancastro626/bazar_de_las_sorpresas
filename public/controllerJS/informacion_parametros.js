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



const tablaCorreo = document.querySelector('#factura-info tbody');
let listaCorreoFactura = [];

const inicializarCorreo = async() =>{
    listaCorreoFactura = await obtenerCorreoFactura('/listar-correoadmin');
    mostrarCorreo();
};

const mostrarCorreo = async()=>{
    tablaCorreo.innerHTML = '';

    listaCorreoFactura.forEach(correoadmin =>{
        let datoCorreo = tablaCorreo.insertRow();

        datoCorreo.insertCell().innerText = correoadmin.correoadmin
    });
};

inicializarCorreo();



const tablaImpuesto = document.querySelector('#impuesto-info tbody');
let listaImpuesto = [];

const inicializarImpuesto = async() =>{
    listaImpuesto = await obtenerImpuesto('/listar-impuesto');
    mostrarImpuesto();
};

const mostrarImpuesto = async()=>{
    tablaImpuesto.innerHTML = '';

    listaImpuesto.forEach(impuesto =>{
        let datoImpuesto = tablaImpuesto.insertRow();

        datoImpuesto.insertCell().innerText = impuesto.tasaimpuesto +'%'
    });
};

inicializarImpuesto();



const tablaDescuento = document.querySelector('#descuento-info tbody');
let listaLibrofan = [];

const inicializarDescuento = async() =>{
    listaLibrofan = await obtenerDescuento('/listar-descuentofan');
    mostrarDescuento();
};

const mostrarDescuento = async()=>{
    tablaDescuento.innerHTML = '';

    listaLibrofan.forEach(descuentolibrofan =>{
        let datoDescuento = tablaDescuento.insertRow();

        datoDescuento.insertCell().innerText = descuentolibrofan.descuentolibrofan +'%'
    });
};

inicializarDescuento();



const tablaMinimo = document.querySelector('minimo-info tbody');
let listaMinimo = [];

const inicializarMinimo = async() =>{
    listaMinimo = await obtenerMinimo('/listar-descuentofan');
    mostrarMinimo();
};

const mostrarMinimo = async()=>{
    tablaMinimo.innerHTML = '';

    listaMinimo.forEach(minimocompra =>{
        let datoMinimo = tablaMinimo.insertRow();

        datoMinimo.insertCell().innerText = minimocompra.minimo
    });
};


inicializarMinimo();