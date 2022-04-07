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

const notificarEliminacion = () => {
    Swal.fire({
        'icon': 'warning',
        'title': 'Ítem eliminado',
        'text': 'Ha eliminado un ítem del carrito de compras.'
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
    // PLACEHOLDER
    Swal.fire({
        'icon': 'success',
        'title': 'Compra exitosa!!! ',
        'text': 'Su compra se ha efectuado con éxito.'
    });
});

btnComprar.addEventListener('click', () => {
    // PLACEHOLDER
    window.location.href = 'carrito_compras.html'
});