const cuerpoTabla = document.querySelector('#tbl-compras tbody');

// Variables
let usuarioConectado = JSON.parse(localStorage.getItem('usuarioConectado'));

const mostrarHistorial = () => {
    // let filtro = usuarioConectado.correo;
    let filtro = "prueba@gmail.com";
    let contador = 0;
    let pedido = 0;
    let total = 0;

    let trPadre;
    let tdPedido;
    let contenedorPedido;
    let iconoFlecha;
    let pPedido;
    let tdFecha;
    let contenedorFecha;
    let pFecha;
    let tdCosto;
    let contenedorCosto;
    let pCosto;
    let tdPago;
    let contenedorPago;
    let pPago;
    let tdEstado;
    let contenedorEstado;
    let pEstado;
    let tdEntrega;
    let contenedorEntrega;
    let pEntrega

    listaCompras.forEach(libro => {
        contador = contador + 1;
        if (libro.correousuario.includes(filtro)) {
            fecha = new Date(libro.fechacompra);

            if (libro.numeropedido != pedido) {
                // Padre - Fila Visible
                trPadre = document.createElement('tr');
                tdPedido = document.createElement('td');
                contenedorPedido = document.createElement('div');
                iconoFlecha = document.createElement('i');
                pPedido = document.createElement('p');
                tdFecha = document.createElement('td');
                contenedorFecha = document.createElement('div');
                pFecha = document.createElement('p');
                tdCosto = document.createElement('td');
                contenedorCosto = document.createElement('div');
                pCosto = document.createElement('p');
                tdPago = document.createElement('td');
                contenedorPago = document.createElement('div');
                pPago = document.createElement('p');
                tdEstado = document.createElement('td');
                contenedorEstado = document.createElement('div');
                pEstado = document.createElement('p');
                tdEntrega = document.createElement('td');
                contenedorEntrega = document.createElement('div');
                pEntrega = document.createElement('p');

                trPadre.classList.add('fila-padre');
                trPadre.setAttribute('data-hija', 'hija-oculta');
                contenedorPedido.classList.add('cont-pedido');
                iconoFlecha.classList.add('fa-solid');
                iconoFlecha.classList.add('fa-caret-right');
                pPedido.textContent = libro.numeropedido;
                contenedorFecha.classList.add('cont-linea');
                pFecha.textContent = fecha.getDate() + '/' + fecha.getMonth() + '/' + fecha.getFullYear();
                contenedorCosto.classList.add('cont-linea');
                contenedorPago.classList.add('cont-linea');
                pPago.textContent = definirNombreMetodo(libro.metodopago);
                contenedorEstado.classList.add('cont-linea');
                pEstado.textContent = libro.estado;
                contenedorEntrega.classList.add('cont-linea');
                pEntrega.textContent = libro.entrega;

                cuerpoTabla.appendChild(trPadre);
                trPadre.appendChild(tdPedido);
                tdPedido.appendChild(contenedorPedido);
                contenedorPedido.appendChild(iconoFlecha);
                contenedorPedido.appendChild(pPedido);
                trPadre.appendChild(tdFecha);
                tdFecha.appendChild(contenedorFecha);
                contenedorFecha.appendChild(pFecha);
                trPadre.appendChild(tdCosto);
                tdCosto.appendChild(contenedorCosto);
                contenedorCosto.appendChild(pCosto);
                trPadre.appendChild(tdPago);
                tdPago.appendChild(contenedorPago);
                contenedorPago.appendChild(pPago);
                trPadre.appendChild(tdEstado);
                tdEstado.appendChild(contenedorEstado);
                contenedorEstado.appendChild(pEstado);
                trPadre.appendChild(tdEntrega);
                tdEntrega.appendChild(contenedorEntrega);
                contenedorEntrega.appendChild(pEntrega);

                pedido = libro.numeropedido
                total = libro.costo;

            } else {
                total = total + libro.costo;
            }

            // Hija - Fila Oculta
            let trHija = document.createElement('tr');
            let tdLibro = document.createElement('td');
            let contenedorLibro = document.createElement('div');
            let pLibro = document.createElement('p');
            let tdAutor = document.createElement('td');
            let contenedorAutor = document.createElement('div');
            let pAutor = document.createElement('p');
            let tdCostoLibro = document.createElement('td');
            let contenedorCostoLibro = document.createElement('div');
            let pCostoLibro = document.createElement('p');
            let tdCalificacion = document.createElement('td');
            let contenedorCalificacion = document.createElement('div');
            let pCalificacion = document.createElement('p');
            let tdPlumas = document.createElement('td');
            let contenedorPlumas = document.createElement('div');
            let tdComentario = document.createElement('td');
            let contenedorComentario = document.createElement('div');
            let botonComentario = document.createElement('button');
            let spanComentario = document.createElement('span');
            let iComentario = document.createElement('i');

            trHija.classList.add('fila-hija');
            trHija.classList.add('hija-oculta');
            trHija.classList.add('oculta');
            contenedorLibro.classList.add('cont-linea-oculta');
            pLibro.textContent = libro.nombrelibro;
            contenedorAutor.classList.add('cont-linea-oculta');
            pAutor.textContent = libro.autor;
            contenedorCostoLibro.classList.add('cont-linea-oculta');
            pCostoLibro.textContent = '₡ ' + libro.costo;
            contenedorCalificacion.classList.add('cont-linea-oculta');
            pCalificacion.textContent = 'Calificación:';
            contenedorPlumas.classList.add('cont-linea-oculta');
            contenedorComentario.classList.add('cont-linea-oculta');
            botonComentario.classList.add('btn-comentar');
            spanComentario.classList.add('span-boton');
            iComentario.classList.add('fa-solid');
            iComentario.classList.add('fa-comment-medical');
            iComentario.classList.add('fa-2x');

            cuerpoTabla.appendChild(trHija);
            trHija.appendChild(tdLibro);
            tdLibro.appendChild(contenedorLibro);
            contenedorLibro.appendChild(pLibro);
            trHija.appendChild(tdAutor);
            tdAutor.appendChild(contenedorAutor);
            contenedorAutor.appendChild(pAutor);
            trHija.appendChild(tdCostoLibro);
            tdCostoLibro.appendChild(contenedorCostoLibro);
            contenedorCostoLibro.appendChild(pCostoLibro);
            trHija.appendChild(tdCalificacion);
            tdCalificacion.appendChild(contenedorCalificacion);
            contenedorCalificacion.appendChild(pCalificacion);
            trHija.appendChild(tdPlumas);
            tdPlumas.appendChild(contenedorPlumas);
            trHija.appendChild(tdComentario);
            tdComentario.appendChild(contenedorComentario);
            contenedorComentario.appendChild(botonComentario);
            botonComentario.appendChild(spanComentario);
            spanComentario.appendChild(iComentario);

            pCosto.textContent = '₡ ' + total;

            for (let n = 0; n < libro.calificacion; n++) {
                let iPluma = document.createElement('i');
                iPluma.classList.add('fa-solid');
                iPluma.classList.add('fa-feather-pointed');
                iPluma.classList.add('fa-1x');
                iPluma.classList.add('coloreado');
                contenedorPlumas.appendChild(iPluma);
            }

            for (let n = 0; n < 5 - libro.calificacion; n++) {
                let iPluma = document.createElement('i');
                iPluma.classList.add('fa-solid');
                iPluma.classList.add('fa-feather-pointed');
                iPluma.classList.add('fa-1x');
                contenedorPlumas.appendChild(iPluma);
            }

            trPadre.addEventListener('click', () => {
                if (trHija.className.search("oculta") > -1) {
                    trHija.className = trHija.className.replace("oculta", " ");
                } else {
                    trHija.className = trHija.className + ' oculta';
                }
            });

            botonComentario.addEventListener('click', () => {
                agregarComentario();
            });
        }
    });
};

const inicializar = async() => {
    listaCompras = await obtenerDatos('listar-historial');
    mostrarHistorial(listaCompras);
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

const agregarComentario = () => {
    Swal.fire({
        icon: 'info',
        title: 'Dejanos un comentario :-)',
        text: 'Cuentanos qué te ha parecido este libro:',
        input: 'textarea',
        inputAttributes: {
            autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Comentar',
        cancelButtonText: 'Cancelar'
    });
};

inicializar();