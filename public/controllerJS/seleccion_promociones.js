'use strict';

const selectPromocion = document.getElementById('select-promocion');
let listaPromociones = [];

const inicializarPromociones = async() => {
    listaPromociones = await obtenerListaPromociones('/listar-promociones');
    mostrarSelectpromo();
};


const mostrarSelectpromo = async() => {
    selectPromocion.innerHTML = '';
    const selectList = document.createElement('select');
    selectList.id = "select-descuento";
    selectPromocion.appendChild(selectList);

    listaPromociones.forEach(promociones => {
        let option = document.createElement('option');
        option.setAttribute('value', promociones.nombrepromocion +' '+ promociones.porcentajepromocion + '%');
        option.text = promociones.nombrepromocion +' '+ promociones.porcentajepromocion + '%';
        selectList.appendChild(option);
    });

};

inicializarPromociones();