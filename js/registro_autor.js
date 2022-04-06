const btnRegistrar = document.getElementById('btn-registrar');
const inputAdjunto = document.getElementById('txt-adjunto');
const inputNombre = document.getElementById('txt-nombre');
const inputApellido = document.getElementById('txt-apellido');
const listaGenero = document.getElementById("slt-genero");
const fechaNacimiento = document.getElementById("txt-nacimiento");
const fechaDefuncion = document.getElementById("txt-defuncion");
const inputBiografia = document.getElementById("txt-biografia");


const validar = () => {

    let hayError = false;

    if (inputNombre.value == '') {

        hayError = true;
        inputNombre.classList.add('input-error');
    } else {
        inputNombre.classList.remove('input-error');
    }


    if (inputApellido.value == '') {
        hayError = true;
        inputApellido.classList.add('input-error');
    } else {
        inputApellido.classList.remove('input-error');
    }

    if (listaGenero.value == '') {
        hayError = true;
        listaGenero.classList.add('input-error');
    } else {
        listaGenero.classList.remove('input-error');
    }

    if (fechaNacimiento.value == '') {
        hayError = true;
        fechaNacimiento.classList.add('input-error');
    } else {
        fechaNacimiento.classList.remove('input-error');
    }

    if (inputBiografia.value == '') {
        hayError = true;
        inputBiografia.classList.add('input-error');
    } else {
        inputBiografia.classList.remove('input-error');
    }

    if (hayError == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'El usuario no se puede registrar',
            'text': 'Por favor revise los campos resaltados'
        });

    } else {
        imprimir();
        Swal.fire({
            'icon': 'success',
            'title': 'El autor ha sido registrado',
            'text': 'Se enviará un correo electrónico'
        }).then(() => {
            window.location.href = 'lista_autores.html';
        });
    }

};




const imprimir = () => {
    let adjunto = inputAdjunto.value; // preguntar como se ve el adjunto y corregir error
    let nombreAutor = inputNombre.value;
    let apellidoAutor = inputApellido.value;
    let generoAutor = listaGenero.value;
    let nacimientoAutor = fechaNacimiento.value;
    let defuncionAutor = fechaDefuncion.value;
    let biografiaAutor = inputBiografia.value;



    console.log('La foto esta contenida el siguiente adjunto', adjunto);
    console.log('El nombre del autor es', nombreAutor);
    console.log('El apellido del autor es', apellidoAutor);
    console.log('El genero del autor es', generoAutor)
    console.log('El autor nacio en ', nacimientoAutor);
    console.log('El autor fallecio en', defuncionAutor);
    console.log("Esta es la biografia del autor", biografiaAutor);

};

btnRegistrar.addEventListener('click', () => {
    imprimir();
    validar();

});