const formLibroCompleto = document.querySelector('#formulario-libros-completo');
const formLibroTitulo = document.querySelector('#txt-titulo');
const formLibroFoto = document.querySelector('#file-foto');
const formLibroPublicacion = document.querySelector('#date-publicacion');
const formLibroGenero = document.querySelector('#select-genero');
const formLibroAutor = document.querySelector('#select-autor');
const formLibroDescuento = document.querySelector('#select-descuento');
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
            'icon': 'error',
            'title': 'El libro no se puede registrar',
            'text': 'Por favor revise los campos resaltados',
        });
    } else {
        formLibroImprimir()
        Swal.fire({
            'icon': 'success',
            'title': 'Libro registrado',
        }).then(() => {
            formLibroCompleto.reset();
        });
    }

};


const formLibroImprimir = () => {

    console.log('El título es', formLibroTitulo.value);
    console.log('Los nombres de las fotos adjunta son', formLibroFoto.value);
    console.log('La fecha de publicación es', formLibroPublicacion.value);
    console.log('El género literario es', formLibroGenero.value);
    console.log('El autor es', formLibroAutor.value);
    console.log('El descuento es', formLibroDescuento.value);
    console.log('El ISBN es', formLibroISBN.value);
    console.log('La editorial es', formLibroEditorial.value);
    console.log('El precio es', formLibroPrecio.value);
    console.log('La sinopsis es', formLibroSinopsis.value);

}


formLibroGuardar.addEventListener('click', () => {

    formLibroValidacion();

    // if (formLibroPremios.value == 1) {
    //     console.log('igual a 1');
    // } else {
    //     console.log('diferente');
    // };

})



// Pendiente
// Premios y fecha