'use strict';

const selectAutor = document.getElementById('select-autor');
let listaAutores = [];

const inicializarAutores = async() => {
    listaAutores = await obtenerListaAutores('/listar-autores');
    mostrarSelectautor();
};


const mostrarSelectautor = async()=>{
    selectAutor.innerHTML = '';
    const selectList = document.createElement('select');
    selectAutor.appendChild(selectList);
    
    listaAutores.forEach(lista =>{
    let option = document.createElement('option');
        option.setAttribute('value', lista._id);
        option.text = lista.nombre +' '+ lista.apellido;
        selectList.appendChild(option);
    });
    
};

inicializarAutores();

