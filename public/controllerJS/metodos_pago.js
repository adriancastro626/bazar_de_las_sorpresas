const obtenerMetodos = document.getElementById('cont-listar-metodos');
const btnAtras = document.getElementById('btn-atras');
const btnContinuar = document.getElementById('btn-continuar');

let listaMetodos = [];
let usuarioConectado = JSON.parse(localStorage.getItem('usuarioConectado'));
let tipoEntrega = JSON.parse(localStorage.getItem('tipoEntrega'));
let tarjeta = '';
let informacionCompra = JSON.parse(localStorage.getItem('informacionCompra'));
let listaCarrito = informacionCompra.isbn;
let pedido = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);

const inicializar = async() => {
    listaMetodos = await obtenerDatos('listar-tarjetas');
    mostrarMetodos(listaMetodos);
};

const mostrarMetodos = () => {
    let contador = 0;
    let filtro = usuarioConectado.correousuario;
    // let filtro = "prueba@gmail.com";
    listaMetodos.forEach(metodo => {
        if (metodo.correousuario.includes(filtro)) {
            let nombreMetodo = definirNombreMetodo(metodo.numtarjeta);
            let radioLabel = document.createElement('label');
            let radioInput = document.createElement('input');

            contador = contador + 1;
            radioInput.type = 'radio';
            radioInput.name = 'seleccion-metodo';
            radioInput.id = 'radio-' + nombreMetodo;
            radioInput.setAttribute('tarjeta', metodo.numtarjeta);
            radioInput.value = toString(contador);
            radioInput.classList.add('radio-metodo');
            (metodo.favorito || contador == 1) ? radioInput.checked = true: radioInput.checked = false;

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

const obtenerSeleccionMetodo = () => {
    const metodos = document.getElementsByName('seleccion-metodo');
    metodos.forEach(metodo => {
        if (metodo.checked) {
            tarjeta = metodo.getAttribute('tarjeta');
            console.log(tarjeta);
        }
    });
};

const guardarHistorial = async() => {

    for (let i = 0; i < listaCarrito.length; i++) {
        let libro = await obtenerElemento(`obtener-libro-isbn/${listaCarrito[i]}`);

        let registroHistorial = {
            "correousuario": usuarioConectado.correousuario,
            // "correousuario": "prueba@gmail.com",
            "metodopago": tarjeta,
            "nombrelibro": libro.titulo,
            "autor": libro.autor,
            "numeropedido": pedido,
            "isbnhistorial": listaCarrito[i],
            "fechacompra": new Date(),
            "costo": libro.precio,
            "estado": 'Pendiente',
            "entrega": tipoEntrega.tipo,
            "calificacion": 4,
            "comentario": 'N/A'
        };

        registrarDatosSimple('registrar-historial', registroHistorial);
    };
};

const guardarVentas = async() => {
    for (let i = 0; i < listaCarrito.length; i++) {
        let libro = await obtenerElemento(`obtener-libro-isbn/${listaCarrito[i]}`);

        let registroVenta = {
            "correousuario": usuarioConectado.correousuario,
            // "correousuario": "prueba@gmail.com",
            "numeropedido": pedido,
            "fecha": new Date(),
            "costobruto": informacionCompra.compras,
            "costoneto": (informacionCompra.compras + informacionCompra.impuesto - informacionCompra.descuento - informacionCompra.descuentoFan),
            "descuento": informacionCompra.descuento,
            "grantotal": 0,
            "descuentolibrofan": informacionCompra.descuentoFan,
            "nombrelibro": libro.titulo,
            "sociocomercial": informacionCompra.socio
        };

        registrarDatosSimple('registrar-ventas', registroVenta);
    };
};

const generarFactura = () => {

};

btnAtras.addEventListener('click', () => {
    window.location.href = tipoEntrega.url;
});

btnContinuar.addEventListener('click', () => {
    obtenerSeleccionMetodo();
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