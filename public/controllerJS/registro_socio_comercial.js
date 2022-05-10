const btnRegistrar = document.getElementById('btn-registrar_socio');
const inputCedula = document.getElementById('txt-idsocio');
const inputFecha = document.getElementById('txt-fecha');
const inputNombre = document.getElementById('txt-nombre');
const inputProvincias = document.getElementById('slct-provincias');
const inputCantones = document.getElementById('slct-cantones');
const inputDistritos = document.getElementById('slct-distritos');
const inputDireccion = document.getElementById('direccion-exacta');
const inputFoto = document.getElementById('file-foto');


let selectProvincias = document.getElementById('slct-provincias');
let selectCantones = document.getElementById('slct-cantones');
let selectDistritos = document.getElementById('slct-distritos');

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


//Crear Funciones
const validar = () => {
    let hayError = false;

    if (inputCedula.value == '') {
        hayError = true;
        inputCedula.classList.add('input-error')
    } else {
        inputCedula.classList.remove('input-error')
    }

    if (inputFecha.value == '') {
        hayError = true;
        inputFecha.classList.add('input-error')
    } else {
        inputFecha.classList.remove('input-error')
    }
    if (inputProvincias.value == '') {
        hayError = true;
        inputProvincias.classList.add('input-error')
    } else {
        inputProvincias.classList.remove('input-error')
    }

    if (inputCantones.value == '') {
        hayError = true;
        inputCantones.classList.add('input-error')
    } else {
        inputCantones.classList.remove('input-error')
    }

    if (inputDistritos.value == '') {
        hayError = true;
        inputDistritos.classList.add('input-error')
    } else {
        inputDistritos.classList.remove('input-error')
    }

    if (inputNombre.value == '') {
        hayError = true;
        inputNombre.classList.add('input-error')
    } else {
        inputNombre.classList.remove('input-error')
    }

    if (inputDireccion.value == '') {
        hayError = true;
        inputDireccion.classList.add('input-error')
    } else {
        inputDireccion.classList.remove('input-error')
    }

    if (inputFoto.value == '') {
        hayError = true;
        inputFoto.classList.add('input-error')
    } else {
        inputFoto.classList.remove('input-error')
    }

    if (hayError == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'El usuario no se puede registrar',
            'text': 'Por favor revise los campos resaltados'
        });
        //json
    } else {
        registrarComercio();

    }
};



const registrarComercio = () => {
    let data = {
        "nombrecomercio": inputNombre.value,
        "cedulajuridica": inputCedula.value,
        "fechainicio": inputFecha.value,
        "provinciacomercio": inputProvincias.value,
        "cantoncomercio": inputCantones.value,
        "distritocomercio": inputDistritos.value,
        "direccioncomercio": inputDireccion.value,
        "fotocomercio": inputFoto.value
    };
    registrarDatos('registrar-comercio', data, 'lista_socios.html');
};

btnRegistrar.addEventListener('click', () => {
    validar();
});