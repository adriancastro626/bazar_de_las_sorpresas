'use strict';

const selectGenero = document.getElementById('select-genero');
let listaGeneros = [];

const inicializarGeneros = async() => {
    listaGeneros = await obtenerListaGeneros('/listar-generosliterarios');
    mostrarSelectgenero();
};


const mostrarSelectgenero = async() => {
    selectGenero.innerHTML = '';
    const selectList = document.createElement('select');
    selectList.id = "select-generoLiterario";
    selectGenero.appendChild(selectList);

    listaGeneros.forEach(generos => {
        let option = document.createElement('option');
        option.setAttribute('value', generos.nombregenero);
        option.text = generos.nombregenero;
        selectList.appendChild(option);
    });

};

inicializarGeneros();