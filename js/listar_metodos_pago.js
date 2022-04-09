const obtenerMetodos = document.getElementById('cont-listar-metodos');
const btnAgregar = document.getElementById('icono-agregar');

// Puebla la lista de métodos con los datos del JSON
const mostrarMetodos = () => {
    listaMetodos.forEach(metodo => {
        let nombreMetodo = definirNombreMetodo(metodo.numeroTarjeta);
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

        // Establece la jerarquía entre los elementos
        spanEliminar.appendChild(iconoEliminar);
        botonEliminar.appendChild(spanEliminar);
        contenerdorLinea.appendChild(botonEliminar);
        contenerdorLinea.appendChild(elemento);
        obtenerMetodos.appendChild(contenerdorLinea);
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

// Alertas
const notificarAgregar = () => {
    window.location.href = 'registro_metodo_pago.html'
};

const accion = () => {
    Swal.fire({
        'icon': 'error',
        'title': 'Método eliminado!',
        'text': 'Se ha eliminado el método de pago.'
    });
    // console.log('Calls');
};

const botonesEliminar = document.getElementsByName('boton-eliminar');

mostrarMetodos();

btnAgregar.addEventListener('click', () => {
    // PLACEHOLDER
    notificarAgregar();
});

// Crea un escucha de eventos por botón
botonesEliminar.forEach(boton => {
    boton.addEventListener('click', accion());
});