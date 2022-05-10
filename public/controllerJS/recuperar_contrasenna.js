const inputCorreoRecuperar = document.getElementById('txt-correo-recuperar');
const btnRecuperar = document.getElementById('btn-recuperar');

const recuperar = () => {

    let hayError = false;

    if (inputCorreoRecuperar.value == '') {

        hayError = true;
        inputCorreoRecuperar.classList.add('input-error');
    } else {
        inputCorreoRecuperar.classList.remove('input-error');
    }

    if (hayError == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'Ingrese un correo valido',
            'text': ''
        });

    } else {
        Swal.fire({
            'icon': 'success',
            'title': 'Se ha enviado el correo con exito',
            'text': 'Revise su correo'
        }).then(() => {
            window.location.href = 'inicio_sesion.html';
        });
    }

};

btnRecuperar.addEventListener('click', () => {
    recuperar();

});