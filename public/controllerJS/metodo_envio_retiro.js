const selectProvincias = document.getElementById('slct-provincias');
const selectCantones = document.getElementById('slct-cantones');
const selectEstablecimiento = document.getElementById('slct-establecimiento');
const btnAtras = document.getElementById('btn-atras');
const btnContinuar = document.getElementById('btn-continuar');

let listaComercios = [];
const url = 'https://ubicaciones.paginasweb.cr/';

// Completar opciones de provincia, canton y distrito
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

const inicializar = async() => {
    listaComercios = await obtenerDatos('listar-comercios');
};

//Cargar comercios por cantón
const listarComercios = (canton, elemento) => {
    let contador = 0;
    listaComercios.forEach(comercio => {
        if (comercio.cantoncomercio.includes(canton)) {
            let opcion = document.createElement('option');
            opcion.text = comercio.nombrecomercio;
            opcion.value = toString(contador + 1);
            elemento.appendChild(opcion);
        }
    });
};

// Validación
const validar = () => {
    let hayError = false;

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

    if (selectEstablecimiento.value == '') {
        hayError = true;
        selectEstablecimiento.classList.add('input-error');
    } else {
        selectEstablecimiento.classList.remove('input-error');
    }

    if (hayError) {
        Swal.fire({
            'icon': 'warning',
            'title': 'Información incompleta',
            'text': 'Por favor revise los campos resaltados.'
        });
    } else {
        window.location.href = 'metodos_pago.html'
    }
};

listarSelect(url + 'provincias.json', selectProvincias);
selectProvincias.addEventListener('change', () => {
    listarSelect(url + 'provincia/' + selectProvincias.value + '/cantones.json', selectCantones);
});
selectCantones.addEventListener('change', () => {
    listarComercios(selectCantones.options[selectCantones.value].text, selectEstablecimiento);
});

btnAtras.addEventListener('click', () => {
    window.location.href = 'carrito_compras.html'
});

btnContinuar.addEventListener('click', () => {
    validar();
});

inicializar();