const listaLibrosEliminar = document.querySelector('.borrar-libro');
const listagenerosModificar = document.querySelector('.editar-libro');


// Función de evento para eliminar libros
listaLibrosEliminar.addEventListener('click', () => {

    Swal.fire({
        title: '¿Estás seguro?',
        text: "No serás capaz de recuperar la información.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar',
        cancelButtonText: 'Cancelar',
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Eliminado',
                'La información ha sido eliminada.',
                'success'
            )
            console.log('Se eliminó el libro de la lista');
        }
    })
});


// Función de evento para modificar libros

listagenerosModificar.addEventListener('click', () => {

    console.log('Permitiendo la modificación del libro');
    Swal.fire({
        'icon': 'success',
        'title': 'Modificar género',
    }).then(() => {
        listaGenerosCompleto.reset();
    });

=======
const listaLibrosEliminar = document.querySelector('.borrar-libro');
const listagenerosModificar = document.querySelector('.editar-libro');


// Función de evento para eliminar libros
listaLibrosEliminar.addEventListener('click', () => {

    Swal.fire({
        title: 'Estás seguro?',
        text: "No serás capaz de recuperar la información.",
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
                'La información ha sido eliminada.',
                'success'
            )
            console.log('Se eliminó el libro de la lista');
        }
    })
});


// Función de evento para modificar libros

listagenerosModificar.addEventListener('click', () => {

    console.log('Permitiendo la modificación del libro');
    Swal.fire({
        'icon': 'success',
        'title': 'Modificar género',
    }).then(() => {
        listaGenerosCompleto.reset();
    });
});