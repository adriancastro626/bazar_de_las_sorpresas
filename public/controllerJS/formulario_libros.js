'use strict';

// Variables
const formLibroCompleto = document.querySelector('#formulario-libros-completo');
const formLibroTitulo = document.querySelector('#txt-titulo');
const formLibroPortada = document.querySelector('#subir-portada');
const formLibroContraportada = document.querySelector('#subir-contraportada');
const formLibroPublicacion = document.querySelector('#date-publicacion');
const formLibroGenero = document.querySelector('#select-genero');
const formLibroAutor = document.querySelector('#select-autor');
const formLibroDescuento = document.querySelector('#select-descuento');
const formLibroISBN = document.querySelector('#txt-isbn');
const formLibroEditorial = document.querySelector('#txt-editorial');
const formLibroPrecio = document.querySelector('#number-precio');
const formLibroSinopsis = document.querySelector('#textarea-sinopsis');
const formLibroGuardar = document.querySelector('#btn-guardar');


// Validacion del formulario
const formLibroValidacion = () => {

    let formLibroIncompleto = false;

    // Título
    if (formLibroTitulo.value == "") {
        formLibroIncompleto = true;
        formLibroTitulo.classList.add('formulario-libros-incompleto');
    } else {
        formLibroTitulo.classList.remove('formulario-libros-incompleto');
    };

    // Adjuntos
    if (formLibroPortada.src == "") {
        formLibroIncompleto = true;
        formLibroPortada.src = "../imgs/adjunte_foto.PNG";
        formLibroPortada.classList.add('formulario-libros-incompleto');
    } else {
        formLibroPortada.classList.remove('formulario-libros-incompleto');
    };

    if (formLibroContraportada.src == "") {
        formLibroIncompleto = true;
        formLibroContraportada.src = "../imgs/adjunte_foto.PNG";
        formLibroContraportada.classList.add('formulario-libros-incompleto');
    } else {
        formLibroContraportada.classList.remove('formulario-libros-incompleto');
    };

    // Fecha de publicación
    if (formLibroPublicacion.value == "") {
        formLibroIncompleto = true;
        formLibroPublicacion.classList.add('formulario-libros-incompleto');
    } else {
        formLibroPublicacion.classList.remove('formulario-libros-incompleto');
    };

    // Género literario
    if (formLibroGenero.value == 0) {
        formLibroIncompleto = true;
        formLibroGenero.classList.add('formulario-libros-incompleto');
    } else {
        formLibroGenero.classList.remove('formulario-libros-incompleto');
    };

    // Autor
    if (formLibroAutor.value == 0) {
        formLibroIncompleto = true;
        formLibroAutor.classList.add('formulario-libros-incompleto');
    } else {
        formLibroAutor.classList.remove('formulario-libros-incompleto');
    };

    // ISBN
    if (formLibroISBN.value == "") {
        formLibroIncompleto = true;
        formLibroISBN.classList.add('formulario-libros-incompleto');
    } else {
        formLibroISBN.classList.remove('formulario-libros-incompleto');
    };

    // Editorial
    if (formLibroEditorial.value == "") {
        formLibroIncompleto = true;
        formLibroEditorial.classList.add('formulario-libros-incompleto');
    } else {
        formLibroEditorial.classList.remove('formulario-libros-incompleto');
    };

    // Precio
    if (formLibroPrecio.value == "") {
        formLibroIncompleto = true;
        formLibroPrecio.classList.add('formulario-libros-incompleto');
    } else {
        formLibroPrecio.classList.remove('formulario-libros-incompleto');
    };

    // Premios
    let formLibroPremioNobel = document.querySelectorAll('#formulario-libros-premios input[type=checkbox]:checked');
    const formLibroFechaNobel = document.querySelector('#formulario-libros-premios input[type=number]');

    formLibroPremioNobel.forEach(check => {
        if (check.value == 1) {
            if (formLibroFechaNobel.value == "") {
                formLibroIncompleto = true;
                formLibroFechaNobel.classList.add('formulario-libros-incompleto');
            } else {
                formLibroFechaNobel.classList.remove('formulario-libros-incompleto');
            };
        }
    });

    // Sinopsis
    if (formLibroSinopsis.value == "") {
        formLibroIncompleto = true;
        formLibroSinopsis.classList.add('formulario-libros-incompleto');
    } else {
        formLibroSinopsis.classList.remove('formulario-libros-incompleto');
    };

    // Acciones a ejecutar al presionar el botón
    if (formLibroIncompleto == true) {
        Swal.fire({
            'icon': 'error',
            'title': 'El libro no se puede registrar',
            'text': 'Por favor revise los campos resaltados',
        });
    } else {

        let libro = {
            titulo: formLibroTitulo.value,
            editorial: formLibroEditorial.value,
            portada: formLibroPortada.src,
            contraportada: formLibroContraportada.src,
            precio: formLibroPrecio.value,
            publicacion: formLibroPublicacion.value,
            genero: formLibroGenero.value,
            autor: formLibroAutor.value,
            descuento: formLibroDescuento.value,
            isbn: formLibroISBN.value,
            premios: formLibroPremioNobel.value,
            sipnosis: formLibroSinopsis.value
        };

        registrarDatos(libro, '/registrar-libro');

        formLibroImprimir();
        Swal.fire({
            'icon': 'success',
            'title': 'Libro registrado',
        }).then(() => {
            window.location.href = 'lista_libros.html';
        });
    }

};

// Impresión de los resultados
const formLibroImprimir = () => {

    console.log('El título es', formLibroTitulo.value);

    console.log('El enlace de la portada es ', formLibroPortada.src);

    console.log('El enlace de la portada es ', formLibroContraportada.src);

    console.log('La fecha de publicación es', formLibroPublicacion.value);

    console.log('El género literario es', formLibroGenero.value);

    console.log('El autor es', formLibroAutor.value);

    console.log('El descuento es', formLibroDescuento.value);

    console.log('El ISBN es', formLibroISBN.value);

    console.log('La editorial es', formLibroEditorial.value);

    console.log('El precio es', formLibroPrecio.value);

    let formLibroPremio = document.querySelectorAll('#formulario-libros-premios input[type=checkbox]:checked');

    formLibroPremio.forEach(check => {
        console.log('El premio es', check.value);
    });

    console.log('La sinopsis es', formLibroSinopsis.value);

};

// Función de evento
formLibroGuardar.addEventListener('click', () => {

    formLibroValidacion();

});


//Delimitación de cantidad de caracteres de la fecha
let caracteresAnnoNobel = document.querySelector('#formulario-libros-premios input[type=number]');
caracteresAnnoNobel.addEventListener('input', function() {
    if (this.value.length > 4)
        this.value = this.value.slice(0, 4);
})


let caracteresAnnoPublicacion = document.querySelector('#date-publicacion');
caracteresAnnoPublicacion.addEventListener('input', function() {
    if (this.value.length > 4)
        this.value = this.value.slice(0, 4);
})