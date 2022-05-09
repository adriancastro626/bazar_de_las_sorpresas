'use strict';

// Variables
const formLibroCompleto = document.querySelector('#formulario-libros-completo');
const formLibroTitulo = document.querySelector('#txt-titulo');
const formLibroPortada = document.querySelector('#subir-portada');
const formLibroContraportada = document.querySelector('#subir-contraportada');
const formLibroPublicacion = document.querySelector('#date-publicacion');
const formLibroGenero = document.querySelector('#select-genero');
const formLibroAutor = document.querySelector('#select-autor');
const formLibroDescuento = document.querySelector('#select-promocion');
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
    const formGeneroLiterario = document.querySelector('#select-generoLiterario');
    if (formGeneroLiterario.value == "") {
        formLibroIncompleto = true;
        formGeneroLiterario.classList.add('formulario-libros-incompleto');
    } else {
        formGeneroLiterario.classList.remove('formulario-libros-incompleto');
        console.log('El género literario es', formGeneroLiterario.value);
    };

    // Autor
    const formAutorLibro = document.querySelector('#select-autorLibro');
    if (formAutorLibro.value == "") {
        formLibroIncompleto = true;
        formAutorLibro.classList.add('formulario-libros-incompleto');
    } else {
        formAutorLibro.classList.remove('formulario-libros-incompleto');
        console.log('El autor es', formAutorLibro.value);
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
    let formLibroPremios = "";
    let formPremioFecha = "";

    formLibroPremioNobel.forEach(check => {
        if (check.value == 'Premio Nobel de Literatura') {
            if (formLibroFechaNobel.value == "") {
                formLibroIncompleto = true;
                formLibroFechaNobel.classList.add('formulario-libros-incompleto');
            } else {
                formLibroFechaNobel.classList.remove('formulario-libros-incompleto');
                formPremioFecha = check.value + ". Año: " + formLibroFechaNobel.value
            };
        }
    });
    console.log(formPremioFecha);

    for (let i = 0; i < formLibroPremioNobel.length; i++) {
        if (formLibroPremioNobel[i].value == 'Premio Nobel de Literatura') {
            formLibroPremioNobel[i].value = formPremioFecha;
            // console.log(formPremioFecha);
            formLibroPremios = formLibroPremioNobel[i].value + ", ";
            // console.log(formLibroPremios);
        } else {
            formLibroPremios = formLibroPremios + formLibroPremioNobel[i].value + ", ";
        }
    }
    console.log(formLibroPremios);


    // Sinopsis
    if (formLibroSinopsis.value == "") {
        formLibroIncompleto = true;
        formLibroSinopsis.classList.add('formulario-libros-incompleto');
    } else {
        formLibroSinopsis.classList.remove('formulario-libros-incompleto');
    };

    //Promociones
    const formDescuento = document.querySelector('#select-descuento');
    console.log('El descuento es', formDescuento.value);

    // Acciones a ejecutar al presionar el botón
    if (formLibroIncompleto == true) {
        Swal.fire({
            'icon': 'error',
            'title': 'El libro no se puede registrar',
            'text': 'Por favor revise los campos resaltados',
        });
        formLibroImprimir();
    } else {

        let libro = {
            titulo: formLibroTitulo.value,
            editorial: formLibroEditorial.value,
            portada: formLibroPortada.src,
            contraportada: formLibroContraportada.src,
            precio: formLibroPrecio.value,
            publicacion: formLibroPublicacion.value,
            genero: formGeneroLiterario.value,
            autor: formAutorLibro.value,
            descuento: formDescuento.value,
            isbn: formLibroISBN.value,
            premios: formLibroPremios,
            sipnosis: formLibroSinopsis.value
        };

        console.log(libro);

        registrarLibro(libro, '/registrar-libro')

        formLibroImprimir();
        Swal.fire({
                'icon': 'success',
                'title': 'Libro registrado',
            })
             .then(() => {
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

    // console.log('El género literario es', formGeneroLiterario.value);

    // console.log('El autor es', formLibroAutor.value);

    // console.log('El descuento es', formLibroDescuento.value);

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