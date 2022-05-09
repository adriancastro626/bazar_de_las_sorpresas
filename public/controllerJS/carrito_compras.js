// Elementos de la sección método de envío
const radioEnvio = document.getElementsByName('radio-envio');

// Elementos de la sección información de pago
const indicadorCompras = document.getElementById('indicador-compras');
const indicadorEnvio = document.getElementById('indicador-envio');
const indicadorImpuestos = document.getElementById('indicador-impuestos');
const indicadorTotal = document.getElementById('indicador-total');
const btnPagar = document.getElementById('btn-proceder-pago');
const btnComprar = document.getElementById('btn-seguir-comprando');

// Elementos de la lista de compras
const contenedorExterno = document.getElementById('cont-items');


// Variables
let compras = 0;
let envio = 0;
let impuesto = 0;
let total = 0;
let listaCarrito = [];
let usuarioConectado = JSON.parse(localStorage.getItem('usuarioConectado'));

const mostrarMetodos = async() => {
    // let filtro = usuarioConectado.correo;
    let filtro = "prueba@gmail.com";
    compras = 0;

    for (let i = 0; i < listaCarrito.length; i++) {
        // listaCarrito.forEach(async(item) => {
        if (listaCarrito[i].correoUsuario.includes(filtro)) {

            let libro = await obtenerElemento(`obtener-libro-isbn/${listaCarrito[i].isbncarrito}`);
            compras = compras + libro.precio;

            // Crear elementos HTML
            let contenedorItem = document.createElement('div');
            let contenedorItemInteriorIzquierdo = document.createElement('div');
            let contenedorImagen = document.createElement('img');
            let contenedorItemInteriorMedio = document.createElement('div');
            let contenedorMedioSuperior = document.createElement('div');
            let pTitulo = document.createElement('p');
            let pAutor = document.createElement('p');
            let contenedorMedioInferior = document.createElement('div');
            let pPrecio = document.createElement('p');
            let contenedorItemInteriorDerecho = document.createElement('div');
            let contenedorNumeroItems = document.createElement('div');
            let cantidadItems = document.createElement('input');
            let botonEliminar = document.createElement('button');
            let sBotonEliminar = document.createElement('span');
            let iconoEliminar = document.createElement('i');

            // Dar propiedades a los elementos HTML
            contenedorItem.classList.add('caja-exterior-item');
            contenedorItemInteriorIzquierdo.classList.add('caja-interior-izquierda');
            contenedorImagen.src = libro.fotos;
            // contenedorImagen.src = '../imgs/el_nombre_del_viento.jpg';
            contenedorImagen.alt = `Portada del libro: ${libro.titulo}`;
            // contenedorImagen.alt = 'Portada del libro: El Nombre del Viento';
            contenedorItemInteriorMedio.classList.add('caja-interior-media');
            contenedorMedioSuperior.classList.add('cont-media-superior');
            pTitulo.classList.add('parrafo-titulo');
            pTitulo.textContent = libro.titulo;
            // pTitulo.textContent = 'El Nombre del Viento';
            pAutor.classList.add('parrafo-autor');
            pAutor.textContent = libro.autor;
            // pAutor.textContent = 'Patrick Rothfuss';
            contenedorMedioInferior.classList.add('cont-media-inferior');
            pPrecio.classList.add('parrafo-precio');
            pPrecio.textContent = `₡ ${libro.precio}`;
            // pPrecio.textContent = '₡ 10000.00';
            contenedorItemInteriorDerecho.classList.add('caja-interior-derecha');
            contenedorNumeroItems.classList.add('cont-numero-items');
            cantidadItems.type = 'number';
            // cantidadItems.placeholder = item.cantidadcarrito;
            cantidadItems.placeholder = '1';
            cantidadItems.min = '1';
            cantidadItems.id = 'input-cantidad';
            botonEliminar.classList.add('btn-eliminar');
            sBotonEliminar.classList.add('span-boton');
            iconoEliminar.classList.add('fa-solid');
            iconoEliminar.classList.add('fa-trash-can');
            iconoEliminar.classList.add('fa-2x');

            // Dar jerarquía a los elementos HTML
            contenedorNumeroItems.appendChild(cantidadItems);
            contenedorItemInteriorDerecho.appendChild(contenedorNumeroItems);
            sBotonEliminar.appendChild(iconoEliminar);
            botonEliminar.appendChild(sBotonEliminar);
            contenedorItemInteriorDerecho.appendChild(botonEliminar);
            contenedorMedioInferior.appendChild(pPrecio);
            contenedorMedioSuperior.appendChild(pTitulo);
            contenedorMedioSuperior.appendChild(pAutor);
            contenedorItemInteriorMedio.appendChild(contenedorMedioSuperior);
            contenedorItemInteriorMedio.appendChild(contenedorMedioInferior);
            contenedorItemInteriorIzquierdo.appendChild(contenedorImagen);
            contenedorItem.appendChild(contenedorItemInteriorIzquierdo);
            contenedorItem.appendChild(contenedorItemInteriorMedio);
            contenedorItem.appendChild(contenedorItemInteriorDerecho);
            contenedorExterno.appendChild(contenedorItem);

            // Detecta cuando se presiona el botón eliminar
            botonEliminar.addEventListener('click', () => {
                notificarEliminacion();
            });
        }

        actualizarPago();
    }
};

const inicializar = async() => {
    listaCarrito = await obtenerDatos('mostrar-carrito');
    mostrarMetodos(listaCarrito);
};



const paginaSiguiente = () => {
    let navegar = { 'tipo': '', 'url': '' };
    if (radioEnvio[0].checked) {
        navegar.url = 'metodo_envio_domicilio.html';
        navegar.tipo = 'Domicilio';
    } else {
        navegar.url = 'metodo_envio_retiro.html';
        navegar.tipo = 'Punto Retiro';
    }
    localStorage.setItem('tipoEntrega', JSON.stringify(navegar));
    return navegar;
};

const notificarEliminacion = () => {
    Swal.fire({
        title: 'Estás seguro?',
        text: "El libro se eliminará del carrito de compras.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar',
        cancelButtonText: 'Cancelar',
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                    'Eliminado!',
                    'Se ha eliminado el libro del carrito de compras.',
                    'success'
                )
                // eliminarDatos('eliminar-carrito', item._id);
        }
    });
};

const actualizarPago = () => {
    impuesto = 0.13 * compras; // Actualizar con parámetro de la base de datos.

    if (radioEnvio[0].checked) {
        envio = 2000.00; //Tomar parámetro de la base de datos
    } else {
        envio = 0.00;
    }

    indicadorCompras.textContent = `₡ ${compras}`;
    indicadorEnvio.textContent = `₡ ${envio}`;
    indicadorImpuestos.textContent = `₡ ${impuesto}`;
    indicadorTotal.textContent = `₡ ${compras + envio + impuesto}`;
};

btnPagar.addEventListener('click', () => {
    window.location.href = paginaSiguiente().url;
});

btnComprar.addEventListener('click', () => {
    window.location.href = 'pagina_principal.html';
});

// radioEnvio.addEventListener('change', () => {
//     actualizarPago();
// });

inicializar();