let tabla = document.getElementById('tbl-compras');
let padres = tabla.querySelectorAll('.fila-padre');
let comentario = document.getElementById('icono-comentarios-1');
let botonesComentarios = document.querySelectorAll('.btn-comentar');

const eventosExpandir = () => {
    padres.forEach((padre) => {
        padre.addEventListener('click', (elemento) => {
            let classname = padre.getAttribute("data-hija");
            let hijos = tabla.querySelectorAll('.' + classname);
            hijos.forEach((hijo) => {
                if (hijo.className.search("oculta") > -1) {
                    hijo.className = hijo.className.replace("oculta", " ");

                } else {
                    hijo.className = hijo.className + ' oculta';
                }
            });
        });
    });
};

const agregarComentario = () => {
    Swal.fire({
        icon: 'info',
        title: 'Dejanos un comentario :-)',
        text: 'Cuentanos qué te ha parecido este libro:',
        input: 'textarea',
        inputAttributes: {
            autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Comentar',
        cancelButtonText: 'Cancelar'
    });
};

const eventosComentarios = () => {
    botonesComentarios.forEach(boton => {
        boton.addEventListener('click', () => {
            agregarComentario();
        });
    });
};

eventosExpandir();
eventosComentarios();