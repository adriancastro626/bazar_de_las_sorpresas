const obtenerMetodos = document.getElementById('cont-listar-metodos');
const btnAtras = document.getElementById('btn-atras');
const btnContinuar = document.getElementById('btn-continuar');

let listaMetodos = [];
let usuarioConectado = JSON.parse(localStorage.getItem('usuarioConectado'));
let tipoEntrega = JSON.parse(localStorage.getItem('tipoEntrega'));
let tarjeta = '';

const inicializar = async() => {
    listaMetodos = await obtenerDatos('listar-tarjetas');
    mostrarMetodos(listaMetodos);
};

const mostrarMetodos = () => {
    let contador = 0;
    // let filtro = usuarioConectado.correo;
    let filtro = "prueba@gmail.com";
    listaMetodos.forEach(metodo => {
        if (metodo.correousuario.includes(filtro)) {
            let nombreMetodo = definirNombreMetodo(metodo.numtarjeta);
            let radioLabel = document.createElement('label');
            let radioInput = document.createElement('input');

            contador = contador + 1;
            radioInput.type = 'radio';
            radioInput.name = 'seleccion-metodo';
            radioInput.id = 'radio-' + nombreMetodo;
            radioInput.value = toString(contador);
            radioInput.classList.add('radio-metodo');
            (metodo.favorito || contador == 1) ? radioInput.checked = true: radioInput.checked = false;

            radioLabel.appendChild(radioInput);
            radioLabel.appendChild(document.createTextNode(nombreMetodo));

            obtenerMetodos.appendChild(radioLabel);

            if (radioInput.checked) { tarjeta = metodo.numtarjeta }
        }
    });
};

const definirNombreMetodo = (numeroTarjeta) => {
    let nombreMetodo;

    if (numeroTarjeta.substr(0, 1) == '4') {
        nombreMetodo = 'VISA-' + numeroTarjeta.slice(-4);
    } else {
        nombreMetodo = 'MasterCard-' + numeroTarjeta.slice(-4);
    }

    return nombreMetodo;
};

const guardarHistorial = () => {
    let registroHistorial = {
        "correousuario": '',
        "metodopago": tarjeta,
        "nombrelibro": '',
        "numeropedido": 0,
        "isbnhistorial": 0,
        "fechacompra": new Date(),
        "costo": 0,
        "estado": 'Enviado',
        "entrega": tipoEntrega.tipo,
        "calificacion": 5,
        "comentario": ''

    };
};

const guardarVentas = () => {

};

const generarFactura = () => {

};

btnAtras.addEventListener('click', () => {
    window.location.href = tipoEntrega.url;
});

btnContinuar.addEventListener('click', () => {
    localStorage.setItem('numeroTarjeta', JSON.stringify(tarjeta));
    guardarHistorial();
    guardarVentas();
    // PLACEHOLDER: Generar factura
    generarFactura();
    Swal.fire({
        'icon': 'success',
        'title': 'Compra exitosa !!!',
        'text': 'Se ha efectuado la compra con éxito.'
    }).then(() => {
        window.open('factura.html', '_blank');
        window.location.href = 'pagina_principal.html';
    });
});

inicializar();