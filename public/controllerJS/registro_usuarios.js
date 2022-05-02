let selectProvincias = document.getElementById('slct-provincias');
let selectCantones = document.getElementById('slct-cantones');
let selectDistritos = document.getElementById('slct-distritos');
const inputNombre = document.getElementById('txt-nombre');
const inputSegundoNombre = document.getElementById('txt-segundoNombre');
const inputPrimerApellido = document.getElementById('txt-apellido');
const inputSegundoApellido = document.getElementById('txt-segundoApellido');
const inputTipoIdentificacion = document.getElementById('slt-tipo');
const inputIdentificacion = document.getElementById('txt-identificacion');
const inputGenero = document.getElementById('slt-genero');
const inputOtroGenero = document.getElementById('txt-otroGenero');
const inputNacimiento = document.getElementById('txt-nacimiento');
const inputGeneroLiterario = document.getElementById('slt-generoLiterario');
const inputCorreo = document.getElementById('txt-correo');
const inputConfirmacionCorreo = document.getElementById('txt-confirmacionCorreo');
const inputContrasenna = document.getElementById('txt-contrasenna');
const inputConfirmacionContrasenna = document.getElementById('txt-confirmacion');
const inputAutores = document.getElementById('slt-autores');
const inputDireccion = document.getElementById('direccion-exacta');
const inputMapa = document.getElementById('mapa');
const inputFoto = document.getElementById('btn-foto');
const btnRegistrar = document.getElementById('btn-registrar');

//API para seleccionar Provincia, Canton, Distrito

const url = 'https://ubicaciones.paginasweb.cr/';

let listarSelect = (url, elemento) => {
    fetch(url)
        .then(res => res.json())
        .then((datos) => {
            for (let dato in datos) {
                let opcion = document.createElement('option');
                opcion.text = datos[dato];
                opcion.value = dato;
                elemento.appendChild(opcion);
            }
        })
        .catch(err => { throw err });
};


listarSelect(url + 'provincias.json', selectProvincias);

selectProvincias.addEventListener('change', () => {
    listarSelect(url + 'provincia/' + selectProvincias.value + '/cantones.json', selectCantones);
});

selectCantones.addEventListener('change', () => {
    listarSelect(url + 'provincia/' + selectProvincias.value + '/canton/' + selectCantones.value + '/distritos.json', selectDistritos);
});

// Fin API para seleccionar Provincia, Canton, Distrito

//Registro de Usuario

const validar = () => {

    let hayError = false;

    if (inputNombre.value == '') {

        hayError = true;
        inputNombre.classList.add('input-error');
    } else {
        inputNombre.classList.remove('input-error');
    }

    if (inputSegundoNombre.value == '') {

        hayError = true;
        inputSegundoNombre.classList.add('input-error');
    } else {
        inputSegundoNombre.classList.remove('input-error');
    }

    if (inputPrimerApellido.value == '') {

        hayError = true;
        inputPrimerApellido.classList.add('input-error');
    } else {
        inputPrimerApellido.classList.remove('input-error');
    }

    if (inputSegundoApellido.value == '') {

        hayError = true;
        inputSegundoApellido.classList.add('input-error');
    } else {
        inputSegundoApellido.classList.remove('input-error');
    }

    if (inputTipoIdentificacion.value == '') {

        hayError = true;
        inputTipoIdentificacion.classList.add('input-error');
    } else {
        inputTipoIdentificacion.classList.remove('input-error');
    }

    if (inputIdentificacion.value == '') {

        hayError = true;
        inputIdentificacion.classList.add('input-error');
    } else {
        inputIdentificacion.classList.remove('input-error');
    }

    if (inputGenero.value == '') {

        hayError = true;
        inputGenero.classList.add('input-error');
    } else {
        inputGenero.classList.remove('input-error');
    }

    // if (inputOtroGenero.value == '') {

    //     hayError = true;
    //     inputOtroGenero.classList.add('input-error');
    // } else {
    //     inputOtroGenero.classList.remove('input-error');
    // }

    if (inputNacimiento.value == '') {

        hayError = true;
        inputNacimiento.classList.add('input-error');
    } else {
        inputNacimiento.classList.remove('input-error');
    }

    if (inputGeneroLiterario.value == '') {

        hayError = true;
        inputGeneroLiterario.classList.add('input-error');
    } else {
        inputGeneroLiterario.classList.remove('input-error');
    }

    if (inputCorreo.value == '') {

        hayError = true;
        inputCorreo.classList.add('input-error');
    } else {
        inputCorreo.classList.remove('input-error');
    }

    if (inputConfirmacionCorreo.value == '') {

        hayError = true;
        inputConfirmacionCorreo.classList.add('input-error');
    } else {
        inputConfirmacionCorreo.classList.remove('input-error');
    }

    if (inputContrasenna.value == '') {

        hayError = true;
        inputContrasenna.classList.add('input-error');
    } else {
        inputContrasenna.classList.remove('input-error');
    }

    if (inputConfirmacionContrasenna.value == '') {

        hayError = true;
        inputConfirmacionContrasenna.classList.add('input-error');
    } else {
        inputConfirmacionContrasenna.classList.remove('input-error');
    }

    if (inputAutores.value == '') {

        hayError = true;
        inputAutores.classList.add('input-error');
    } else {
        inputAutores.classList.remove('input-error');
    }

    if (inputDireccion.value == '') {

        hayError = true;
        inputDireccion.classList.add('input-error');
    } else {
        inputDireccion.classList.remove('input-error');
    }

    if (selectProvincias.value == '') {

        hayError = true;
        selectProvincias.classList.add('input-error');
    } else {
        selectProvincias.classList.remove('input-error');
    }

    if (selectCantones.value == '') {

        hayError = true;
        selectCantones.classList.add('input-error');
    } else {
        selectCantones.classList.remove('input-error');
    }

    if (selectDistritos.value == '') {

        hayError = true;
        selectDistritos.classList.add('input-error');
    } else {
        selectDistritos.classList.remove('input-error');
    }

    if (hayError == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'El usuario no se puede registrar',
            'text': 'Complete todos los espacios'
        });

    } else {
        registrarUsuario();
    }

};

// Back-end Base de Datos

const registrarUsuario = () => {
    let data = {
        "primernombre": inputNombre.value,
        "segundonombre": inputSegundoNombre.value,
        "primerapellido": inputPrimerApellido.value,
        "segundoapellido": inputSegundoApellido.value,
        "fechanacimiento": inputNacimiento.value,
        "tipoidentificacion": inputTipoIdentificacion.value,
        "numeroidentificacion": inputIdentificacion.value,
        "genero": inputGenero.value,
        "otrogenero": inputOtroGenero.value,
        "foto": inputFoto.value,
        "correousuario": inputCorreo.value,
        "contrasenna": inputContrasenna.value,
        "generoliterario": inputGeneroLiterario.value,
        "autorfav": inputAutores.value,
        "provincia": selectProvincias.value,
        "canton": selectCantones.value,
        "distrito": selectDistritos.value,
        "direccion": inputDireccion.value

    };
    registrarDatos('registrar-usuario', data, 'inicio_sesion.html');
};

btnRegistrar.addEventListener('click', () => {
    validar();
});