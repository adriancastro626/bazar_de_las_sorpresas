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
            'text': 'Por favor revise los campos resaltados'
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

const imprimir = () => {
    // let adjunto = inputAdjunto.value; // preguntar como se ve el adjunto y corregir error
    let nombreCorreo = inputCorreoRecuperar.value;



    console.log('El nombre del usuario es ', nombreCorreo);


};


btnRecuperar.addEventListener('click', () => {
    imprimir();
    recuperar();

});