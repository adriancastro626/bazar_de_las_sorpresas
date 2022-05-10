const inputNumeroTarjeta = document.getElementById('numero-tarjeta');
const inputMes = document.getElementById('mes-expiracion');
const inputAnno = document.getElementById('anno-expiracion');
const inputCVV = document.getElementById('cvv');
const inputTarjetahabiente = document.getElementById('nombre-tarjetahabiente');
const iconoTarjeta = document.getElementById('icono-tarjeta');
const inputFavorito = document.getElementById('interruptor');
const btnCancelar = document.getElementById('btn-cancelar');
const btnAgregar = document.getElementById('btn-agregar');

let usuarioConectado = JSON.parse(localStorage.getItem('usuarioConectado'));
let fechaActual = new Date();

const validar = () => {
    let hayError = false;
    let errorTarjeta = false;

    if (inputNumeroTarjeta.value == '') {
        hayError = true;
        inputNumeroTarjeta.classList.add('input-error');
    } else {
        if (inputNumeroTarjeta.value.substr(0, 1) != '4' && inputNumeroTarjeta.value.substr(0, 1) != '5') {
            errorTarjeta = true;
            inputNumeroTarjeta.classList.add('input-error');
        } else {
            if (inputNumeroTarjeta.value.length < 13 || inputNumeroTarjeta.value.length > 18) {
                hayError = true;
                inputNumeroTarjeta.classList.add('input-error');
            } else {
                inputNumeroTarjeta.classList.remove('input-error');
            }
        }
    }

    if (inputAnno.value < fechaActual.getFullYear()) {
        hayError = true;
        inputAnno.classList.add('input-error');
    } else {
        if ((inputAnno.value == fechaActual.getFullYear()) && (inputMes.value < (fechaActual.getMonth() + 1))) {
            hayError = true;
            inputMes.classList.add('input-error');
        } else {
            inputAnno.classList.remove('input-error');
            if (inputMes.value < 1 || inputMes.value > 12) {
                hayError = true;
                inputMes.classList.add('input-error');
            } else {
                inputMes.classList.remove('input-error');
            }
        }
    }

    if (inputCVV.value == '') {
        hayError = true;
        inputCVV.classList.add('input-error');
    } else {
        if (inputCVV.value.length < 3 || inputCVV.value.length > 4) {
            inputCVV.classList.add('input-error');
        } else {
            inputCVV.classList.remove('input-error');
        }
    }

    if (inputTarjetahabiente.value == '') {
        hayError = true;
        inputTarjetahabiente.classList.add('input-error');
    } else {
        inputTarjetahabiente.classList.remove('input-error');
    }

    if (hayError) {
        Swal.fire({
            'icon': 'warning',
            'title': 'Información incorrecta',
            'text': 'Por favor revise los campos resaltados.'
        });
    } else {
        if (errorTarjeta) {
            inputNumeroTarjeta.classList.add('input-error');
            Swal.fire({
                'icon': 'error',
                'title': 'Tarjeta inválida',
                'text': 'Este sistema solo acepta tarjetas VISA o MasterCard.'
            });
        } else {
            registrarMetodo();
        }
    }
};

// PLACEHOLDER - Modificar no será evaluado
// const verificarFavorito = () => {
//     if (inputFavorito.value) {
//         listaMetodos.forEach(metodo => {
//             metodo.favorito = false;
//         });
//     }
// };

const registrarMetodo = () => {
    // verificarFavorito();
    let metodo = {
        "correousuario": usuarioConectado.correousuario,
        // "correousuario": "prueba@gmail.com",
        "numtarjeta": inputNumeroTarjeta.value,
        "nombretarjeta": inputTarjetahabiente.value,
        "mes": inputMes.value,
        "anno": inputAnno.value,
        "cvc": inputCVV.value,
        "favorito": inputFavorito.checked
    };
    registrarDatos('registrar-tarjeta', metodo, 'editar_perfil.html');
};

const tipoTarjeta = (numeroTarjeta) => {
    if (numeroTarjeta.length > 0) {
        if (numeroTarjeta.substr(0, 1) == '4') {
            iconoTarjeta.className = '';
            iconoTarjeta.classList.add('fa-brands');
            iconoTarjeta.classList.add('fa-cc-visa');
            iconoTarjeta.classList.add('fa-2x');
        } else if (numeroTarjeta.substr(0, 1) == '5') {
            iconoTarjeta.className = '';
            iconoTarjeta.classList.add('fa-brands');
            iconoTarjeta.classList.add('fa-cc-mastercard');
            iconoTarjeta.classList.add('fa-2x');
        } else {
            inputNumeroTarjeta.classList.add('input-error');
            iconoTarjeta.className = '';
            iconoTarjeta.classList.add('fa-solid');
            iconoTarjeta.classList.add('fa-credit-card');
            iconoTarjeta.classList.add('fa-2x');
        }
    }
};

inputNumeroTarjeta.addEventListener('keypress', () => {
    tipoTarjeta(inputNumeroTarjeta.value)
});

btnAgregar.addEventListener('click', () => {
    validar();
});

btnCancelar.addEventListener('click', () => {
    // PLACEHOLDER
    window.location.href = 'editar_perfil.html';
});