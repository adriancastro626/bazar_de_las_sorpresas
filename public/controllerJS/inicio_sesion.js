const inputValidarUsuario = document.getElementById('txt-usuario');
const inputValidarContrasenna = document.getElementById('txt-contrasenna');
const btnIngresar = document.getElementById('btn-ingresar');



const validarCredenciales = () => {
    let ingresoCorrecto = false;
    listaUsuarios.forEach(usuario => {
        if ((usuario.correo == inputValidarUsuario.value) && (usuario.contrasenna == inputValidarContrasenna.value)) {
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




const validar = () => {

    let hayError = false;

    if (inputValidarUsuario.value || inputValidarContrasenna.value == '') {

        hayError = true;
        inputValidarUsuario.classList.add('input-error');
        inputValidarContrasenna.classList.add('input-error');

    } else {
        inputValidarUsuario.classList.remove('input-error');
        inputValidarContrasenna.classList.remove('input-error');

    }

    if (hayError == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'Ingrese usuario y/o contraseña valido',
            'text': ''
        });

    } else {
        Swal.fire({
            'icon': 'success',
            'title': 'Saludos',
            'text': 'El Bazar de las Sorpresas'
        })
    }

};

btnIngresar.addEventListener('click', () => {
    validar();

});