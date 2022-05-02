const parametrosPromoCompleto = document.querySelector('#parametros-promocion');
const parametrosPromoNombre = document.querySelector('#txt-nombre-promo');
const parametrosPromoPorcentaje = document.querySelector('#number-porcentaje-promo');
const parametrosPromoBoton = document.querySelector('#btn-descuento');

const parametrosFanCompleto = document.querySelector('#parametros-fan');
const parametrosFanPorcentaje = document.querySelector('#number-porcentaje-fan');
const parametrosFanMonto = document.querySelector('#number-compras-fan');
const parametrosFanBoton = document.querySelector('#btn-fan');

const parametrosImpCompleto = document.querySelector('#parametros-imp');
const parametrosImp = document.querySelector('#number-imp');
const parametrosImpBoton = document.querySelector('#btn-imp');

const parametrosCorreoCompleto = document.querySelector('#parametros-correo');
const parametrosCorreo = document.querySelector('#email-nuevo-correo');
const parametrosCorreoBoton = document.querySelector('#btn-correo');

const listaPromosEliminar = document.querySelector('.parametros-tabla-eliminar');
const listaPromosModificar = document.querySelector('.parametros-tabla-modificar');




// Función de evento para ingresar promociones
parametrosPromoBoton.addEventListener('click', () => {

    let parametrosIncompletos = false;

    // Nombre
    if (parametrosPromoNombre.value == "") {
        parametrosIncompletos = true;
        parametrosPromoNombre.classList.add('parametros-incompleto');
    } else {
        parametrosPromoNombre.classList.remove('parametros-incompleto');
    };

    // Porcentaje
    if (parametrosPromoPorcentaje.value == "") {
        parametrosIncompletos = true;
        parametrosPromoPorcentaje.classList.add('parametros-incompleto');
    } else {
        parametrosPromoPorcentaje.classList.remove('parametros-incompleto');
    };

    // Acciones a ejecutar al presionar el botón
    if (parametrosIncompletos == true) {
        Swal.fire({
            'icon': 'error',
            'title': 'Por favor indique los datos de la promoción que desea ingresar',
        });
    } else {
        console.log('El nombre de la promoción es', parametrosPromoNombre.value);
        console.log('El porcentaje de la promoción es', parametrosPromoPorcentaje.value);
        Swal.fire({
            'icon': 'success',
            'title': 'Promoción registrada',
        }).then(() => {
            parametrosPromoCompleto.reset();
        });
    }

});



// Función de evento para descuento Libro Fan
parametrosFanBoton.addEventListener('click', () => {

    let parametrosIncompletos = false;

    // Porcentaje
    if (parametrosFanPorcentaje.value == "") {
        parametrosIncompletos = true;
        parametrosFanPorcentaje.classList.add('parametros-incompleto');
    } else {
        parametrosFanPorcentaje.classList.remove('parametros-incompleto');
    };

    // Monto de compras
    if (parametrosFanMonto.value == "") {
        parametrosIncompletos = true;
        parametrosFanMonto.classList.add('parametros-incompleto');
    } else {
        parametrosFanMonto.classList.remove('parametros-incompleto');
    };

    // Acciones a ejecutar al presionar el botón
    if (parametrosIncompletos == true) {
        Swal.fire({
            'icon': 'error',
            'title': 'Por favor indique los datos del descuento Libro Fan que desea ingresar',
        });
    } else {
        console.log('El porcentaje de descuento de Libro Fan es', parametrosFanPorcentaje.value);
        console.log('El monto mínimo de compras para el descuento de Libro Fan es', parametrosFanMonto.value);
        Swal.fire({
            'icon': 'success',
            'title': 'Datos Libro Fan registrados',
        }).then(() => {
            parametrosFanCompleto.reset();
        });
    }

});



// Función de evento para ingresar impuesto
parametrosImpBoton.addEventListener('click', () => {
    if (parametrosImp.value == "") {
        parametrosImp.classList.add('parametros-incompleto');
        Swal.fire({
            'icon': 'error',
            'title': 'Por favor indique el porcentaje de impuesto que desea ingresar',
        });
    } else {
        parametrosImp.classList.remove('parametros-incompleto');

        // Impresión de los resultados
        console.log('El porcentaje de impuesto es', parametrosImp.value);
        Swal.fire({
            'icon': 'success',
            'title': 'Impuesto registrado',
        }).then(() => {
            parametrosImpCompleto.reset();
        });

    };
});



// Función de evento para ingresar correo para facturas
parametrosCorreoBoton.addEventListener('click', () => {
    if (parametrosCorreo.value == "") {
        parametrosCorreo.classList.add('parametros-incompleto');
        Swal.fire({
            'icon': 'error',
            'title': 'Por favor indique el correo electrónico que desea ingresar',
        });
    } else {
        parametrosCorreo.classList.remove('parametros-incompleto');

        // Impresión de los resultados
        console.log('El correo electrónico es', parametrosCorreo.value);
        Swal.fire({
            'icon': 'success',
            'title': 'Correo electrónico registrado',
        }).then(() => {
            parametrosCorreoCompleto.reset();
        });

    };
});



// Función de evento para eliminar promociones
listaPromosEliminar.addEventListener('click', () => {

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
            console.log('Se eliminó la promoción');
        }
    })
});




// Función de evento para modificar promociones

listaPromosModificar.addEventListener('click', () => {

    console.log('Permitiendo la modificación de la promoción');
    Swal.fire({
        'icon': 'success',
        'title': 'Modificar género',
    }).then(() => {
        listaGenerosCompleto.reset();
    });

});