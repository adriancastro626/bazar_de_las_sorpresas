const btnRegistrar = document.getElementById('btn-registrar');
const inputAdjunto = document.getElementById('txt-adjunto');
const inputNombreR = document.getElementById('txt-nombre');
const inputApellido = document.getElementById('txt-apellido');
const listaGenero = document.getElementById("slt-genero");
const fechaNacimiento = document.getElementById("txt-nacimiento");
const fechaDefuncion = document.getElementById("txt-defuncion");
const inputBiografia = document.getElementById("txt-biografia");
const inputFoto = document.querySelector('#user-photo');


const validar = () => {

    let hayError = false;

    if (inputNombreR.value == '') {

        hayError = true;
        inputNombreR.classList.add('input-error');
    } else {
        inputNombreR.classList.remove('input-error');
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
        registrarAutor();
        /* imprimir();
         Swal.fire({
             'icon': 'success',
             'title': 'El autor ha sido registrado',
             'text': 'Se enviará un correo electrónico'
         }).then(() => {
             window.location.href = 'lista_autores.html';
         });*/
        // imprimir();
    }

};




// const imprimir = () => {
//     let nombreAutor = inputNombreR.value;
//     let apellidoAutor = inputApellido.value;
//     let nacionalidad = listaGenero.value;
//     let nacimientoAutor = fechaNacimiento.value;
//     let defuncionAutor = fechaDefuncion.value;
//     let biografiaAutor = inputBiografia.value;




//     console.log('El nombre del autor es', nombreAutor);
//     console.log('El apellido del autor es', apellidoAutor);
//     //    console.log('El genero del autor es', generoAutor)
//     console.log('La nacionalidad del autor es', nacionalidad);
//     console.log('El autor nacio en ', nacimientoAutor);
//     console.log('El autor fallecio en', defuncionAutor);
//     console.log("Esta es la biografia del autor", biografiaAutor);

// };

const registrarAutor = () => {
    let data = {

        "foto": inputFoto.src,
        "nombre": inputNombreR.value,
        "apellido": inputApellido.value,
        "nacionalidad": listaGenero.options[listaGenero.value].text,
        "nacimiento": fechaNacimiento.value,
        "defuncion": fechaDefuncion.value,
        "biografia": inputBiografia.value
    };
    registrarDatos('registrar-autor', data, 'lista_autores.html');
};

btnRegistrar.addEventListener('click', () => {
    // imprimir();
    validar();

});