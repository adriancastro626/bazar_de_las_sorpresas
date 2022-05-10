const obtenerMetodos = document.getElementById('cont-listar-metodos');
const btnAgregar = document.getElementById('icono-agregar');

let listaMetodos = [];
let usuarioConectado = JSON.parse(localStorage.getItem('usuarioConectado'));

const inicializar = async() => {
    listaMetodos = await obtenerDatos('listar-tarjetas');
    mostrarMetodos(listaMetodos);
};

// Puebla la lista de métodos con los datos de la base de datos
const mostrarMetodos = () => {
    let filtro = usuarioConectado.correousuario;
    // let filtro = "prueba@gmail.com";

    listaMetodos.forEach(metodo => {
        if (metodo.correousuario.includes(filtro)) {
            let nombreMetodo = definirNombreMetodo(metodo.numtarjeta);
            // Define los componentes del HTML por método de pago
            let contenerdorLinea = document.createElement('div');
            let elemento = document.createElement('p');
            let botonEliminar = document.createElement('button');
            let spanEliminar = document.createElement('span');
            let iconoEliminar = document.createElement('i');

            // Otorga carácteristicas y clases a los elementos del HTML
            elemento.textContent = nombreMetodo;
            iconoEliminar.classList.add('fa-xmark');
            iconoEliminar.classList.add('fa-solid');
            iconoEliminar.classList.add('fa-xl');
            botonEliminar.classList.add('icono-eliminar');
            botonEliminar.name = 'boton-eliminar';
            contenerdorLinea.classList.add('cont-linea');

            // Detecta cuando se presiona el botón eliminar
            botonEliminar.addEventListener('click', () => {
                eliminarDatos('eliminar-tarjeta', metodo._id);
            });

            // Establece la jerarquía entre los elementos
            spanEliminar.appendChild(iconoEliminar);
            botonEliminar.appendChild(spanEliminar);
            contenerdorLinea.appendChild(botonEliminar);
            contenerdorLinea.appendChild(elemento);
            obtenerMetodos.appendChild(contenerdorLinea);
        }
    });
};

// Define el nombre del método basado el el número de tarjeta
const definirNombreMetodo = (numeroTarjeta) => {
    let nombreMetodo;

    if (numeroTarjeta.substr(0, 1) == '4') {
        nombreMetodo = 'VISA-' + numeroTarjeta.slice(-4);
    } else {
        nombreMetodo = 'MasterCard-' + numeroTarjeta.slice(-4);
    }

    return nombreMetodo;
};

// Agregar nuevo método de pago
btnAgregar.addEventListener('click', () => {
    window.location.href = 'registro_metodo_pago.html';
});

inicializar();