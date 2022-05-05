const btnEditar = document.getElementById('btn-editar-socio');
const btnEliminar = document.getElementById('btn-eliminar-socio')
const btnAgregar = document.getElementById('btn-agregar-socio')

btnEditar.addEventListener('click', () => {
    Swal.fire({
        'icon': 'info',
        'title': 'Botón de editar seleccionado',
        'text': 'Redirigiendo a la pagina de edición de socios'
    });
});

btnEliminar.addEventListener('click', () => {
    Swal.fire({
        'icon': 'error',
        'title': 'Socio Comercial Eliminado',

    });
});

btnAgregar.addEventListener('click', () => {
    Swal.fire({
        'icon': 'info',
        'title': 'Botón de agregar seleccionado',
        'text': 'Redirigiendo a la pagina de agregar socios'
    }).then(() => {
        window.location.href = 'registro_socio_comercial.html';
    });
});

//.then(() => {
//   window.location.href = 'editar_primer_socio.html'
// });