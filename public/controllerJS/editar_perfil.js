let usuarioConectado = JSON.parse(localStorage.getItem('usuarioConectado'));
const perfilModificar = document.querySelector('.span-boton');


document.getElementById('campo-nombre-lateral').textContent = usuarioConectado.nombre;
document.getElementById('campo-correo-lateral').textContent = usuarioConectado.correo;
document.getElementById('campo-nombre').textContent = usuarioConectado.nombre;
document.getElementById('campo-segundoNombre').textContent = usuarioConectado.segundoNombre;
document.getElementById('campo-apellido').textContent = usuarioConectado.apellido;
document.getElementById('campo-segundoApellido').textContent = usuarioConectado.segundoApellido;
document.getElementById('campo-tipoIdentificacion').textContent = usuarioConectado.tipoIdentificacion;
document.getElementById('campo-numeroIdentificacion').textContent = usuarioConectado.numeroIdentificacion;
document.getElementById('campo-genero').textContent = usuarioConectado.genero;
document.getElementById('campo-otroGenero').textContent = usuarioConectado.otroGenero;
document.getElementById('campo-fechaNacimiento').textContent = usuarioConectado.fechaNacimiento;
document.getElementById('campo-generoLiterario').textContent = usuarioConectado.generoLiterario;
document.getElementById('campo-correo').textContent = usuarioConectado.correo;
document.getElementById('campo-contrasenna').textContent = usuarioConectado.contrasenna;
document.getElementById('campo-autor').textContent = usuarioConectado.autor;
document.getElementById('campo-provincia').textContent = usuarioConectado.provincia;
document.getElementById('campo-canton').textContent = usuarioConectado.canton;
document.getElementById('campo-distrito').textContent = usuarioConectado.distrito;
document.getElementById('campo-direccion').textContent = usuarioConectado.direccion;
// document.getElementById('campo-coordenadas').textContent = usuarioConectado.coordenadas;
// document.getElementById('campo-foto').textContent = usuarioConectado.foto;


/*<span id="campo-nombre"></span>*/

const inputNombre = document.getElementById('campo-nombre');
const btnActualizar = document.getElementById('btn-actualizar');

const actualizar = () => {

    let hayError = false;

    if (inputNombre.value == '') {

        hayError = true;
        inputNombre.classList.add('input-error');
    } else {
        inputNombre.classList.remove('input-error');
    }

    if (hayError == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'Error al actualizar',
            'text': 'Por favor revise la informacion'
        });

    } else {
        Swal.fire({
            'icon': 'success',
            'title': 'Perfil Actualizado',
            'text': 'Los cambios se han guardado con exito'
        }).then(() => {
            window.location.href = 'editar_perfil.html';
        });
    }

};

btnActualizar.addEventListener('click', () => {
    actualizar();

});


// icono-actualizar

// Función de evento para modificar datos

perfilModificar.addEventListener('click', () => {

    console.log('Permitiendo la modificación de la información del perfil');
    Swal.fire({
        'icon': 'success',
        'title': 'Modificar perfil',
    }).then(() => {
        listaGenerosCompleto.reset();
    });

});