'use strict';

const listaGenerosCompleto = document.querySelector('#lista-generos-ingresar');
const listaGenerosNuevo = document.querySelector('#txt-ingresar-genero');
const listaGenerosIngresar = document.querySelector('#btn-ingresar');
const listaGenerosEliminar = document.querySelector('.lista-generos-tabla-eliminar');
const listaGenerosModificar = document.querySelector('.lista-generos-tabla-modificar');


// Función de evento para ingresar géneros
listaGenerosIngresar.addEventListener('click', () => {

    if (listaGenerosNuevo.value == "") {
        listaGenerosNuevo.classList.add('lista-generos-incompleto');
        Swal.fire({
            'icon': 'error',
            'title': 'Por favor indique el género que desea ingresar',
        });
    } else {
        let genero = {
            nombregenero: listaGenerosNuevo.value
        };

        registrarGenero(genero, '/registrar-generoliterario')

        listaGenerosNuevo.classList.remove('lista-generos-incompleto');

        // Impresión de los resultados
        console.log('Se ingresó el género', listaGenerosNuevo.value);
        Swal.fire({
            'icon': 'success',
            'title': 'Género literario registrado',
        }).then(() => {
            window.location.href = 'lista_generos.html';
        });

    }
});


// Función de evento para eliminar géneros
listaGenerosEliminar.addEventListener('click', () => {

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
            console.log('Se eliminó el género literario');
        }
    })
});


// Función de evento para modificar géneros

listaGenerosModificar.addEventListener('click', () => {

    console.log('Permitiendo la modificación del género literario');
    Swal.fire({
        'icon': 'success',
        'title': 'Modificar género',
    }).then(() => {
        listaGenerosCompleto.reset();
    });

});


//Pendiente: solo el primer modificar y eliminar sirven