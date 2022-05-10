/*const btnEditar = document.getElementById('btn-editar-socio');
const btnEliminar = document.getElementById('btn-eliminar-socio');*/
const btnAgregar = document.getElementById('btn-agregar-socio');
const cuerpoTabla = document.querySelector('#tbl-socios tbody');
let listaSocios = [];

const inicializar = async() => {
    listaSocios = await obtenerDatos('listar-comercios');
    mostrarDatos();
};

const obtenerProvincia = (pidProvincia) => {
    let provinciacomercio;
    switch (pidProvincia) {
        case 1:
            provinciacomercio = 'San José'
            break;

        case 2:
            provinciacomercio = 'Alajuela'
            break;
        case 3:
            provinciacomercio = 'Cartago'
            break;
        case 4:
            provinciacomercio = 'Heredia'
            break;
        case 5:
            provinciacomercio = 'Guanacaste'
            break;
        case 6:
            provinciacomercio = 'Puntarenas'
            break;
        case 7:
            provinciacomercio = 'Limón'
            break;
    }

    return provinciacomercio;
}

// btnEditar.addEventListener('click', () => {
//     Swal.fire({
//         'icon': 'info',
//         'title': 'Botón de editar seleccionado',
//         'text': 'Redirigiendo a la pagina de edición de socios'
//     });
// });

// btnEliminar.addEventListener('click', () => {
//     Swal.fire({
//         'icon': 'error',
//         'title': 'Socio Comercial Eliminado',

//     });
// });

btnAgregar.addEventListener('click', () => {
    Swal.fire({
        'icon': 'info',
        'title': 'Botón de agregar seleccionado',
        'text': 'Redirigiendo a la pagina de agregar socios'
    }).then(() => {
        window.location.href = 'registro_socio_comercial.html';
    });
});

const mostrarDatos = () => {
    cuerpoTabla.innerHTML = '';
    let filtro = document.getElementById('txt-filtro').value.toLowerCase();
    listaSocios.forEach(socio => {
        if (socio.nombrecomercio.toLowerCase().includes(filtro)) {
            let fila = cuerpoTabla.insertRow();

            fila.insertCell().innerText = socio.fotocomercio;
            fila.insertCell().innerText = socio.nombrecomercio;
            fila.insertCell().innerText = socio.direccioncomercio;

        }
    });
};
inicializar();
document.getElementById('txt-filtro').addEventListener('keyup', mostrarDatos);






//.then(() => {
//   window.location.href = 'editar_primer_socio.html'
// });

/*img src="../imgs/usuarioSinFoto.png" alt="img-tercer-socio" class="img">
<br>
<p>Punto de retiro: Provincia, Cantón, Distrito</p>
<br>
<button type="button" id="btn-editar-socio" class="btn-oscuro">Editar Socio Comercial</button>
<br><br>
<button type="button" id="btn-eliminar-socio" class="btn-claro">Eliminar Socio Comercial</button> */
