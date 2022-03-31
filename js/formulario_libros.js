const formLibroTitulo = document.querySelector('#txt-titulo');
const formLibroFoto = document.querySelector('#file-foto');
const formLibroPublicacion = document.querySelector('#date-publicacion');
const formLibroGenero = document.querySelector('#select-genero');
const formLibroAutor = document.querySelector('#select-autor');
const formLibroISBN = document.querySelector('#txt-isbn');
const formLibroEditorial = document.querySelector('#txt-editorial');
const formLibroPrecio = document.querySelector('#number-precio');
const formLibroSinopsis = document.querySelector('#textarea-sinopsis');
// const formLibroPremios = document.querySelector('#checkbox-premios');
// const formLibroNobel = document.querySelector('#checkbox-premio-nobel div input[type=date]');
const formLibroGuardar = document.querySelector('#btn-guardar');


const formLibroValidacion = () => {

    let formLibroIncompleto = false;

    if (formLibroTitulo.value == "") {
        formLibroIncompleto = true;
        formLibroTitulo.classList.add('formulario-libros-incompleto');
    } else {
        formLibroTitulo.classList.remove('formulario-libros-incompleto');
    };


    if (formLibroFoto.value == "") {
        formLibroIncompleto = true;
        formLibroFoto.classList.add('formulario-libros-incompleto');
    } else {
        formLibroFoto.classList.remove('formulario-libros-incompleto');
    };


    if (formLibroPublicacion.value == "") {
        formLibroIncompleto = true;
        formLibroPublicacion.classList.add('formulario-libros-incompleto');
    } else {
        formLibroPublicacion.classList.remove('formulario-libros-incompleto');
    };


    if (formLibroGenero.value == 0) {
        formLibroIncompleto = true;
        formLibroGenero.classList.add('formulario-libros-incompleto');
    } else {
        formLibroGenero.classList.remove('formulario-libros-incompleto');
    };


    if (formLibroAutor.value == 0) {
        formLibroIncompleto = true;
        formLibroAutor.classList.add('formulario-libros-incompleto');
    } else {
        formLibroAutor.classList.remove('formulario-libros-incompleto');
    };


    if (formLibroISBN.value == "") {
        formLibroIncompleto = true;
        formLibroISBN.classList.add('formulario-libros-incompleto');
    } else {
        formLibroISBN.classList.remove('formulario-libros-incompleto');
    };


    if (formLibroEditorial.value == "") {
        formLibroIncompleto = true;
        formLibroEditorial.classList.add('formulario-libros-incompleto');
    } else {
        formLibroEditorial.classList.remove('formulario-libros-incompleto');
    };


    if (formLibroPrecio.value == "") {
        formLibroIncompleto = true;
        formLibroPrecio.classList.add('formulario-libros-incompleto');
    } else {
        formLibroPrecio.classList.remove('formulario-libros-incompleto');
    };


    // if ((formLibroPremios.value == 1) && (formLibroNobel.value == "")) {
    //     formLibroIncompleto = true;
    //     formLibroNobel.classList.add('formulario-libros-incompleto');
    // } else {
    //     formLibroNobel.classList.remove('formulario-libros-incompleto');
    // };


    if (formLibroSinopsis.value == "") {
        formLibroIncompleto = true;
        formLibroSinopsis.classList.add('formulario-libros-incompleto');
    } else {
        formLibroSinopsis.classList.remove('formulario-libros-incompleto');
    };


    if (formLibroIncompleto == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'El usuario no se puede registrar',
            'text': 'Por favor revise los campos resaltados',
        });
    } else {
        formLibroImprimir()
        Swal.fire({
            'icon': 'success',
            'title': 'Usuario registrado',
            'text': 'Le enviaremos un correo electronico con la informacion',
        })
    }

};


const formLibroImprimir = () => {

    console.log('titulo', formLibroTitulo.value);
    console.log('foto', formLibroFoto.value);
    console.log('public', formLibroPublicacion.value);
    console.log('generi', formLibroGenero.value);
    console.log('autor', formLibroAutor.value);
    console.log('isbn', formLibroISBN.value);
    console.log('editor', formLibroEditorial.value);
    console.log('precio', formLibroPrecio.value);
    console.log('sinop', formLibroSinopsis.value);

}


formLibroGuardar.addEventListener('click', () => {

    formLibroValidacion();

    // if (formLibroPremios.value == 1) {
    //     console.log('igual a 1');
    // } else {
    //     console.log('diferente');
    // };

})