const radioEnvio = document.getElementsByName('radio-envio');
const selectProvincias = document.getElementById('slct-provincias');
const selectCantones = document.getElementById('slct-cantones');
const selectDistritos = document.getElementById('slct-distritos');
const selectProvinciasRetiro = document.getElementById('slct-provincias-retiro');
const selectCantonesRetiro = document.getElementById('slct-cantones-retiro');
const selectDistritosRetiro = document.getElementById('slct-distritos-retiro');
const btnAtras = document.getElementById('btn-atras');
const btnContinuar = document.getElementById('btn-continuar');

const url = 'https://ubicaciones.paginasweb.cr/';

let domicilio = false;

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

const evaluarEntrega = () => {
    if (radioEnvio[0].checked) {
        Swal.fire({
            'icon': 'success',
            'title': 'Entrega a domicilio',
            'text': 'Ha presionado el botón Continuar.'
        });
    } else {
        Swal.fire({
            'icon': 'success',
            'title': 'Entrega a punto de retiro',
            'text': 'Ha presionado el botón Continuar.'
        });
    }
};

listarSelect(url + 'provincias.json', selectProvincias);
listarSelect(url + 'provincias.json', selectProvinciasRetiro);

selectProvincias.addEventListener('change', () => {
    listarSelect(url + 'provincia/' + selectProvincias.value + '/cantones.json', selectCantones);
});

selectProvinciasRetiro.addEventListener('change', () => {
    listarSelect(url + 'provincia/' + selectProvinciasRetiro.value + '/cantones.json', selectCantonesRetiro);
});

selectCantones.addEventListener('change', () => {
    listarSelect(url + 'provincia/' + selectProvincias.value + '/canton/' + selectCantones.value + '/distritos.json', selectDistritos);
});

initMap();

btnAtras.addEventListener('click', () => {
    // PLACEHOLDER
    // window.location.href = 'registro_metodo_pago.html'
    Swal.fire({
        'icon': 'info',
        'title': 'Regresando a la página anterior',
        'text': 'Ha presionado el botón Atrás.'
    });
});

btnContinuar.addEventListener('click', () => {
    // PLACEHOLDER
    evaluarEntrega();

});