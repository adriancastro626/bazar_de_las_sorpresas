const inputNumeroTarjeta = document.getElementById('numero-tarjeta');
const inputMes = document.getElementById('mes-expiracion');
const inputAnno = document.getElementById('anno-expiracion');
const inputCVV = document.getElementById('cvv');
const inputNombre = document.getElementById('nombre-tarjetahabiente');
const iconoTarjeta = document.getElementById('icono-tarjeta');
const inputFavorito = document.getElementById('interruptor');
const btnCancelar = document.getElementById('btn-cancelar');
const btnAgregar = document.getElementById('btn-agregar');

const validar = () => {
    let hayError = false;
    let errorTarjeta = false;

    if (inputNumeroTarjeta.value == '') {
        hayError = true;
        inputNumeroTarjeta.classList.add('input-error');
    } else {
        if (inputNumeroTarjeta.value.substr(0, 1) == '4' || inputNumeroTarjeta.value.substr(0, 1) == '5') {
            inputNumeroTarjeta.classList.remove('input-error');
        } else {
            errorTarjeta = true;
            inputNumeroTarjeta.classList.remove('input-error');
        }
    }

    if (inputMes.value == '') {
        hayError = true;
        inputMes.classList.add('input-error');
    } else {
        inputMes.classList.remove('input-error');
    }

    if (inputAnno.value == '') {
        hayError = true;
        inputAnno.classList.add('input-error');
    } else {
        inputAnno.classList.remove('input-error');
    }

    if (inputCVV.value == '') {
        hayError = true;
        inputCVV.classList.add('input-error');
    } else {
        inputCVV.classList.remove('input-error');
    }

    if (inputNombre.value == '') {
        hayError = true;
        inputNombre.classList.add('input-error');
    } else {
        inputNombre.classList.remove('input-error');
    }

    // PLACEHOLDER
    if (hayError) {
        Swal.fire({
            'icon': 'warning',
            'title': 'Información incompleta',
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
            navegar();
        }
    }
};

// PLACEHOLDER
const verificarFavorito = () => {
    if (inputFavorito.value) {
        listaMetodos.forEach(metodo => {
            metodo.favorito = false;
        });
    }
};

const navegar = () => {
    verificarFavorito();
    listaMetodos.push({
        'numeroTarjeta': inputNumeroTarjeta.value,
        'nombre': inputNombre.value,
        'mesExpiracion': inputMes.value,
        'annoExpiracion': inputAnno.value,
        'favorito': inputFavorito.value
    });
    Swal.fire({
        'icon': 'success',
        'title': 'Método de pago registrado',
        'text': 'Se ha registrado un nuevo método de pago.'
    }).then(() => {
        window.location.href = 'pagina_principal.html'
    });
};

const tipoTarjeta = (numeroTarjeta) => {
    if (numeroTarjeta.length > 0) {
        if (numeroTarjeta.substr(0, 1) == '4') {
            iconoTarjeta.className = '';
            iconoTarjeta.classList.add('fa-brands');
            iconoTarjeta.classList.add('fa-cc-visa');
            iconoTarjeta.classList.add('fa-2x');
            console.log('VISA');
        } else if (numeroTarjeta.substr(0, 1) == '5') {
            iconoTarjeta.className = '';
            iconoTarjeta.classList.add('fa-brands');
            iconoTarjeta.classList.add('fa-cc-mastercard');
            iconoTarjeta.classList.add('fa-2x');
            console.log('MasterCard');
        } else {
            inputNumeroTarjeta.classList.add('input-error');
            iconoTarjeta.className = '';
            iconoTarjeta.classList.add('fa-solid');
            iconoTarjeta.classList.add('fa-credit-card');
            iconoTarjeta.classList.add('fa-2x');
            console.log('Otro');
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