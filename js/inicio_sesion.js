const inputUsuario = document.getElementById('txt-usuario');
const inputContrasenna = document.getElementById('txt-contrasenna');


const validarCredenciales = () => {
    let ingresoCorrecto = false;
    listaUsuarios.forEach(usuario => {
        if ((usuario.correo == inputUsuario.value) && (usuario.contrasenna == inputContrasenna.value)) {
            ingresoCorrecto = true;
            localStorage.setItem('usuarioConectado', JSON.stringify(usuario));
        }
    });

    if (ingresoCorrecto == true) {
        window.location.href = 'pagina_principal.html';
    } else {

    }

};

document.getElementById('btn-ingresar').addEventListener('click', validarCredenciales)