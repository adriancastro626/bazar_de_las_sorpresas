const listaGenerosCompleto = document.querySelector('#lista-generos-ingresar');
const listaGenerosNuevo = document.querySelector('#txt-ingresar-genero');
const listaGenerosIngresar = document.querySelector('#btn-ingresar');
const listagenerosEliminar = document.querySelector('.lista-generos-tabla-eliminar');
const listagenerosModificar = document.querySelector('.lista-generos-tabla-modificar');


// Función de evento para ingresar géneros
listaGenerosIngresar.addEventListener('click', () => {

    if (listaGenerosNuevo.value == "") {
        listaGenerosNuevo.classList.add('lista-generos-incompleto');
        Swal.fire({
            'icon': 'error',
            'title': 'Por favor indique el género que desea ingresar',
        });
    } else {
        listaGenerosNuevo.classList.remove('lista-generos-incompleto');

        // Impresión de los resultados
        console.log('Se ingresó el género', listaGenerosNuevo.value);
        Swal.fire({
            'icon': 'success',
            'title': 'Género registrado',
        }).then(() => {
            listaGenerosCompleto.reset();
        });

    }
});


// Función de evento para eliminar géneros
listagenerosEliminar.addEventListener('click', () => {

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
            console.log('Se eliminó el género');
        }
    })
});


// Función de evento para modificar géneros

listagenerosModificar.addEventListener('click', () => {

    console.log('Permitiendo la modificación del género literario');

});


//Pendiente: solo el primer modificar y eliminar sirven