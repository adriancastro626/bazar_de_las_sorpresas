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

const inputValidarUsuario = document.getElementById('txt-usuario');
const inputValidarContrasenna = document.getElementById('txt-contrasenna');
const btnIngresar = document.getElementById('btn-ingresar');


const validar = () => {

    let hayError = false;

    if (inputValidarUsuario.value || inputValidarContrasenna.value == '') {

        hayError = true;
        inputValidarUsuario.classList.add('input-error');
    } else {
        inputValidarUsuario.classList.remove('input-error');
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