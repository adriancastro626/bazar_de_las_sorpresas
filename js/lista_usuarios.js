const cuerpoTabla = document.querySelector('#tbl-usuarios tbody');
let listaUsuarios = [];

// document.getElementById('btn-agregar-platillo').addEventListener('click', () => {
//     window.location.href = 'registrar.html';
// });

const inicializar = async() => {
    listaUsuarios = await obtenerDatos('listar-usuarios');
    mostrarDatos();
};

// const obtenerTipoUsuario = (pidUsuario) => {
//     let tipoUsuario;
//     switch (pidUsuario) {
//         case 1:
//             tipoUsuario = 'Usuario';
//             break;
//         case 2:
//             tipoUsuario = 'Administrador';
//             break;
//     }
//     return tipoUsuario;
// };

const mostrarDatos = () => {
    cuerpoTabla.innerHTML = '';

    let filtro = document.getElementById('txt-filtro').value.toLowerCase();
    listaUsuarios.forEach(usuario => {

        if (usuario.primernombre.toLowerCase().includes(filtro) || usuario.primerapellido.toLowerCase().includes(filtro)) {

            let fila = cuerpoTabla.insertRow();

            // fila.insertCell().innerText = obtenerTipoUsuario(usuario.tipoPlatillo);
            fila.insertCell().innerText = usuario.primernombre;
            fila.insertCell().innerText = usuario.primerapellido;
            fila.insertCell().innerText = usuario.correousuario;
            fila.insertCell().innerText = usuario.numeroidentificacion;
            fila.insertCell().innerText = usuario.provincia;
            fila.insertCell().innerText = usuario.genero;

            // Celda para los botones
            let celdaBotones = fila.insertCell();
            let botonEliminar = document.createElement('button');
            botonEliminar.classList.add('btn-eliminar');
            botonEliminar.type = 'button';
            botonEliminar.textContent = 'Eliminar';
            celdaBotones.appendChild(botonEliminar);
            botonEliminar.addEventListener('click', () => {
                eliminarDatos('eliminar-usuario', usuario._id);
            });

            celdaBotones.appendChild(botonEliminar);

        }
    });
};

inicializar();
document.getElementById('txt-filtro').addEventListener('keyup', mostrarDatos);