'use strict'

const inputUsuario = document.querySelector('#txtusuario');
const inputContrasenna = document.querySelector('#txtcontrasenna');
const btnIngresar = document.querySelector('#btningresar');

let obtenerAcceso = () => {
    let correousuario = inputUsuario.value;
    let contrasenna = inputContrasenna.value;

    let errorBlancos = validar(correousuario, contrasenna);
    let usuarioAceptado = false;

    if (!errorBlancos) {
        usuarioAceptado = validar_credenciales(correousuario, contrasenna);
        let user = localStorage.getItem(correousuario);
        let data = JSON.parse(user);
        console.log(data);
    }



};

const validar = (susuario, scontrasenna) => {

    let error = false;

    if (susuario == '' || scontrasenna == '') {
        error = true;
        inputUsuario.classList.add('input-error');
        inputContrasenna.classList.add('input-error');
    } else {
        inputUsuario.classList.remove('input-error');
        inputContrasenna.classList.remove('input-error');
    }



    return error;

};

btnIngresar.addEventListener('click', obtenerAcceso);