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
let listaCarrito = [];
let usuarioConectado = JSON.parse(localStorage.getItem('usuarioConectado'));

const mostrarMetodos = () => {
    // let filtro = usuarioConectado.correo;
    let filtro = "prueba@gmail.com";

    listaCarrito.forEach(item => {
        if (item.correoUsuario.includes(filtro)) {

            libro = consultarLibro(item.isbncarrito);
            // console.log(libro);

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
            contenedorImagen.src = libro.fotos; // Agregar indice de la foto
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
            // botonEliminar.addEventListener('click', () => {
            //     eliminarDatos('eliminar-carrito', item._id);
            // });
        }
    })
};

const inicializar = async() => {
    listaCarrito = await obtenerDatos('mostrar-carrito');
    console.log(listaCarrito);
    mostrarMetodos(listaCarrito);
};

const consultarLibro = async(isbn) => {
    libro = await obtenerElemento(`/obtener-libro-isbn/${isbn}`);
    console.log(libro);
};

const paginaSiguiente = () => {
    let navegar;
    if (radioEnvio[0].checked) {
        navegar = 'metodo_envio_domicilio.html';
    } else {
        navegar = 'metodo_envio_retiro.html';
    }
    localStorage.setItem('metodoEnvio', navegar);
    return navegar;
};


//PLACEHOLDER
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
            console.log('Se eliminó el género');
        }
    });
};

btnPagar.addEventListener('click', () => {
    window.location.href = paginaSiguiente();
});

btnComprar.addEventListener('click', () => {
    window.location.href = 'pagina_principal.html';
});

inicializar();