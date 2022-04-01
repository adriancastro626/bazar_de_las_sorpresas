const btnRegistrar = document.getElementById('btn-registrar_socio');
const inputCedula = document.getElementById('txt-idsocio');
const inputFecha = document.getElementById('txt-fecha');
const listaPuntoRetiro = document.getElementById('slt-retiro');

//Crear Funciones
const validar = () => {
    let hayError = false;

    if (inputCedula.value == '') {
        hayError = true;
        inputCedula.classList.add('input-error')
    } else {
        inputCedula.classList.remove('input-error')
    }

    if (inputFecha.value == '') {
        hayError = true;
        inputFecha.classList.add('input-error')
    } else {
        inputFecha.classList.remove('input-error')
    }

    if (hayError == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'El usuario no se puede registrar',
            'text': 'Por favor revise los campos resaltados'
        });
        //json
    } else {
        imprimir();
        Swal.fire({
            'icon': 'success',
            'title': 'Socio Comercial Registrado',
            'text': 'Se enviará un correo electrónico'
        }).then(() => {
            window.location.href = 'registro-socio-comercial.html';
        });

    }
};

const imprimir = () => {
    let Cedula = inputCedula.value;
    let Fecha = inputFecha.value;



    console.log('La cédula jurídica es', Cedula);
    console.log('La fecha de inicio de relación comercial es', Fecha);

};

btnRegistrar.addEventListener('click', () => {
    validar();
});