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
mapboxgl.accessToken = 'pk.eyJ1IjoiZ2FoZWVsIiwiYSI6ImNsMnB1MjdhZDJvcHMzanNiaTdybTR0MXIifQ.R9Uyo4zTtxYTkqjcLJ-7gw';
const coordinates = document.getElementById('coordinates');
const map = new mapboxgl.Map({
    container: 'mapa', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-84.107337, 9.936220], // starting position [lng, lat] -74.5, 40
    zoom: 9 // starting zoom
});

const marker = new mapboxgl.Marker({
        draggable: true
    })
    .setLngLat([-84.107337, 9.936220])
    .addTo(map);

function onDragEnd() {
    const lngLat = marker.getLngLat();
    coordinates.style.display = 'block';
    coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
}

marker.on('dragend', onDragEnd);

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

btnAtras.addEventListener('click', () => {
    window.location.href = 'carrito_compras.html'
});

btnContinuar.addEventListener('click', () => {
    validar();
});