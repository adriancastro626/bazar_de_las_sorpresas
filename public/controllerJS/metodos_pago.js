const obtenerMetodos = document.getElementById('cont-listar-metodos');
const btnAtras = document.getElementById('btn-atras');
const btnContinuar = document.getElementById('btn-continuar');

let listaMetodos = [];
let usuarioConectado = JSON.parse(localStorage.getItem('usuarioConectado'));

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

            radioInput.type = 'radio';
            radioInput.name = 'seleccion-metodo';
            radioInput.id = 'radio-' + nombreMetodo;
            radioInput.value = toString(contador + 1);
            radioInput.classList.add('radio-metodo');
            metodo.favorito ? radioInput.checked = true : radioInput.checked = false;

            radioLabel.appendChild(radioInput);
            radioLabel.appendChild(document.createTextNode(nombreMetodo));

            obtenerMetodos.appendChild(radioLabel);
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

btnAtras.addEventListener('click', () => {
    // window.location.href = localStorage.getItem('metodoEnvio');
    // console.log(localStorage.getItem('metodoEnvio'));
    window.location.href = 'metodo_envio_domicilio.html';
});

btnContinuar.addEventListener('click', () => {
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