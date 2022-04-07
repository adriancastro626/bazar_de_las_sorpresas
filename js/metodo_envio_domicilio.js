const selectProvincias = document.getElementById('slct-provincias');
const selectCantones = document.getElementById('slct-cantones');
const selectDistritos = document.getElementById('slct-distritos');
const direccionExacta = document.getElementById('direccion-exacta');
const btnAtras = document.getElementById('btn-atras');
const btnContinuar = document.getElementById('btn-continuar');

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

// Inicializar mapa
const initMap = () => {
    // The location of Uluru
    const costarica = { lat: 9.936220, lng: -84.107337 };
    // The map, centered at Uluru
    const mapa = new google.maps.Map(document.getElementById("mapa"), {
        zoom: 10,
        center: costarica,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: costarica,
        map: mapa,
    });
}


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

    if (selectDistritos.value == '') {
        hayError = true;
        selectDistritos.classList.add('input-error');
    } else {
        selectDistritos.classList.remove('input-error');
    }

    if (direccionExacta.value == '') {
        hayError = true;
        direccionExacta.classList.add('input-error');
    } else {
        direccionExacta.classList.remove('input-error');
    }

    if (hayError) {
        Swal.fire({
            'icon': 'warning',
            'title': 'Información incompleta',
            'text': 'Por favor revise los campos resaltados.'
        });
        //json
    } else {
        window.location.href = 'metodos_pago.html'
    }
};


listarSelect(url + 'provincias.json', selectProvincias);

selectProvincias.addEventListener('change', () => {
    listarSelect(url + 'provincia/' + selectProvincias.value + '/cantones.json', selectCantones);
});

selectCantones.addEventListener('change', () => {
    listarSelect(url + 'provincia/' + selectProvincias.value + '/canton/' + selectCantones.value + '/distritos.json', selectDistritos);
});

initMap();

btnAtras.addEventListener('click', () => {
    window.location.href = 'carrito_compras.html'
});

btnContinuar.addEventListener('click', () => {
    validar();
});