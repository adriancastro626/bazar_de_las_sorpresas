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
        usuarioAceptado = validar_credenciales(pcorreo, pcontrasenna);
        if (usuarioAceptado) {
            window.location.href = 'pagina_principal.html';
        }
    }

};

const validar = (susuario, scontrasenna) => {

    let error = false;

    if (susuario || scontrasenna == '') {
        error = true;
        inputUsuario.classList.add('input-error');
        inputContrasenna.classList.add('input-error');
    } else {
        inputUsuario.classList.remove('input-error');
        inputContrasenna.classList.remove('input-error');
    }

    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'Ingrese usuario y/o contraseña valido',
            'text': ''
        });

    } else {
        Swal.fire({
            'icon': 'success',
            'title': 'Saludos',
            'text': 'El Bazar de las Sorpresas'
        });

    }

    return error;

};

btnIngresar.addEventListener('click', obtenerAcceso);