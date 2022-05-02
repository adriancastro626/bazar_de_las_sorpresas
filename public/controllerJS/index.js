let usuarioConectado = JSON.parse(localStorage.getItem('usuarioConectado'));

document.getElementById('campo-nombre-lista').textContent = usuarioConectado.nombre;
document.getElementById('campo-correo-lista').textContent = usuarioConectado.correo;

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

const actualizarUsuario = () => {
    Swal.fire({
        icon: 'info',
        title: 'Actualizar Usuario',
        text: 'Dar click en el boton',
        inputAttributes: {
            autocapitalize: 'off'
        },
        confirmButtonText: 'Actualizar',
    }).then(() => {
        window.location.href = 'editar_perfil.html';
    });


};

const eventosComentarios = () => {
    botonesComentarios.forEach(boton => {
        boton.addEventListener('click', () => {
            actualizarUsuario();
        });
    });
};

eventosComentarios();