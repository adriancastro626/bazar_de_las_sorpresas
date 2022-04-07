// Elementos de la sección método de envío
const radioEnvio = document.getElementsByName('radio-envio');

// Elementos de la sección información de pago
const indicadorCompras = document.getElementById('indicador-compras');
const indicadorEnvio = document.getElementById('indicador-envio');
const indicadorImpuestos = document.getElementById('indicador-impuestos');
const indicadorTotal = document.getElementById('indicador-total');
const btnPagar = document.getElementById('btn-proceder-pago');
const btnComprar = document.getElementById('btn-seguir-comprando');

// Elementos de items del carrito
const btnEliminar1 = document.getElementById('icono-eliminar-1');
const btnEliminar2 = document.getElementById('icono-eliminar-2');
const btnEliminar3 = document.getElementById('icono-eliminar-3');

// PLACEHOLDER: Actualizar lista del carrito
const actualizarLista = () => {
    listaCarrito.forEach(item => {

    });
};

const paginaSiguiente = () => {
    let navegar;
    if (radioEnvio[0].checked) {
        navegar = 'metodo_envio_domicilio.html';
    } else {
        navegar = 'metodo_envio_retiro.html';
    }
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
            console.log('Se eliminó el género');
        }
    });
};

btnEliminar1.addEventListener('click', () => {
    // PLACEHOLDER
    notificarEliminacion();
});

btnEliminar2.addEventListener('click', () => {
    // PLACEHOLDER
    notificarEliminacion();
});

btnEliminar3.addEventListener('click', () => {
    // PLACEHOLDER
    notificarEliminacion();
});

btnPagar.addEventListener('click', () => {
    window.location.href = paginaSiguiente();
});

btnComprar.addEventListener('click', () => {
    window.location.href = 'pagina_principal.html';
});