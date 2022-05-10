const campoNombre = document.getElementById('campo-nombre');
const campoSegundoNombre = document.getElementById('campo-segundoNombre');
const campoApellido = document.getElementById('campo-apellido');
const campoSegundoApellido = document.getElementById('campo-segundoApellido');
const campoNacimiento = document.getElementById('campo-fechaNacimiento');
const campoTipoIdentificacion = document.getElementById('campo-tipoIdentificacion');
const campoNumIdentificacion = document.getElementById('campo-numeroIdentificacion');
const campoGenero = document.getElementById('campo-genero');
const campoOtroGenero = document.getElementById('campo-otroGenero');
const campoFoto = document.getElementById('btn-foto');
const campoCorreo = document.getElementById('campo-correo');
const campoContrasenna = document.getElementById('campo-contrasenna');
const campoProvincia = document.getElementById('campo-provincia');
const campoUbicacion = document.getElementById('campo-direccion');
const campoMapa = document.getElementById('btn-editar');
const campoAutor = document.getElementById('campo-autor');
const campoGeneroLiterario = document.getElementById('campo-generoLiterario');


// Mapa

// Inicializar mapa
mapboxgl.accessToken = 'pk.eyJ1IjoiZ2FoZWVsIiwiYSI6ImNsMnB1MjdhZDJvcHMzanNiaTdybTR0MXIifQ.R9Uyo4zTtxYTkqjcLJ-7gw';
const coordinates = document.getElementById('coordinates');
const map = new mapboxgl.Map({
    container: 'mapa', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-84.107337, 9.936220], // starting position [lng, lat] -74.5, 40
    zoom: 9 // starting zoom
});

const marker = new mapboxgl.Marker({
        draggable: true
    })
    .setLngLat([-84.107337, 9.936220])
    .addTo(map);

function onDragEnd() {
    const lngLat = marker.getLngLat();
    coordinates.style.display = 'block';
    coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
}

marker.on('dragend', onDragEnd);


// const btnAgregar = document.getElementById('icono-agregar');

let listaUsuarios = [];

const empezar = async() => {
    listaUsuarios = await obtenerDatos('listar-usuarios');
    mostrarUsuarios(listaUsuarios);
};

// Puebla la lista de métodos con los datos de la base de datos
const mostrarUsuarios = () => {
    let filtro = usuarioConectado.correousuario;




    listaUsuarios.forEach(usuario => {
        if (usuario.correousuario.includes(filtro)) {
            let primernombre = usuario.primernombre;
            let segundonombre = usuario.segundonombre;
            let primerapellido = usuario.primerapellido;
            let segundoapellido = usuario.segundoapellido;
            let fechanacimiento = usuario.fechanacimiento;
            let tipoidentificacion = definirIdentificacion(usuario.tipoidentificacion);
            let numeroidentificacion = usuario.numeroidentificacion;
            let genero = definirGenero(usuario.genero);
            let otrogenero = usuario.otrogenero;
            let foto = usuario.foto;
            let correousuario = usuario.correousuario;
            let contrasenna = usuario.contrasenna;
            let provincia = definirProvincia(usuario.provincia);
            let ubicacion = usuario.direccion;
            let mapa = usuario.mapa;
            // let mapa = usuario.mapa;
            // let mapa = usuario.mapa;



            // Crea el elemento en el HTML
            let contenerdorProvincia = document.createElement('div');
            let elementoProvincia = document.createElement('p');
            contenerdorProvincia.appendChild(elementoProvincia);
            elementoProvincia.textContent = provincia;
            campoProvincia.appendChild(contenerdorProvincia);

            let contenerdorNombre = document.createElement('div');
            let elementoNombre = document.createElement('p');
            contenerdorNombre.appendChild(elementoNombre);
            elementoNombre.textContent = primernombre;
            campoNombre.appendChild(contenerdorNombre);

            let contenerdorSegundoNombre = document.createElement('div');
            let elementoSegundoNombre = document.createElement('p');
            contenerdorSegundoNombre.appendChild(elementoSegundoNombre);
            elementoSegundoNombre.textContent = segundonombre;
            campoSegundoNombre.appendChild(contenerdorSegundoNombre);

            let contenerdorApellido = document.createElement('div');
            let elementoApellido = document.createElement('p');
            contenerdorApellido.appendChild(elementoApellido);
            elementoApellido.textContent = primerapellido;
            campoApellido.appendChild(contenerdorApellido);

            let contenerdorSegundoApellido = document.createElement('div');
            let elementoSegundoApellido = document.createElement('p');
            contenerdorSegundoApellido.appendChild(elementoSegundoApellido);
            elementoSegundoApellido.textContent = segundoapellido;
            campoSegundoApellido.appendChild(contenerdorSegundoApellido);

            let contenerdorNacimiento = document.createElement('div');
            let elementoNacimiento = document.createElement('p');
            contenerdorNacimiento.appendChild(elementoNacimiento);
            elementoNacimiento.textContent = fechanacimiento;
            campoNacimiento.appendChild(contenerdorNacimiento);


            let contenerdorcampoTipoIdentificacion = document.createElement('div');
            let elementocampoTipoIdentificacion = document.createElement('p');
            contenerdorcampoTipoIdentificacion.appendChild(elementocampoTipoIdentificacion);
            elementocampoTipoIdentificacion.textContent = tipoidentificacion;
            campoTipoIdentificacion.appendChild(contenerdorcampoTipoIdentificacion);

            let contenerdorcampoNumIdentificacion = document.createElement('div');
            let elementocampoNumIdentificacion = document.createElement('p');
            contenerdorcampoNumIdentificacion.appendChild(elementocampoNumIdentificacion);
            elementocampoNumIdentificacion.textContent = numeroidentificacion;
            campoNumIdentificacion.appendChild(contenerdorcampoNumIdentificacion);

            let contenerdorcampoGenero = document.createElement('div');
            let elementocampoGenero = document.createElement('p');
            contenerdorcampoGenero.appendChild(elementocampoGenero);
            elementocampoGenero.textContent = genero;
            campoGenero.appendChild(contenerdorcampoGenero);

            let contenerdorcampoOtroGenero = document.createElement('div');
            let elementocampoOtroGenero = document.createElement('p');
            contenerdorcampoOtroGenero.appendChild(elementocampoOtroGenero);
            elementocampoOtroGenero.textContent = otrogenero;
            campoOtroGenero.appendChild(contenerdorcampoOtroGenero);

            let contenerdorcampoFoto = document.createElement('div');
            let elementocampoFoto = document.createElement('p');
            contenerdorcampoFoto.appendChild(elementocampoFoto);
            elementocampoFoto.textContent = foto;
            campoFoto.appendChild(contenerdorcampoFoto);

            let contenerdorcampoCorreo = document.createElement('div');
            let elementocampoCorreo = document.createElement('p');
            contenerdorcampoCorreo.appendChild(elementocampoCorreo);
            elementocampoCorreo.textContent = correousuario;
            campoCorreo.appendChild(contenerdorcampoCorreo);

            let contenerdorcampoContrasenna = document.createElement('div');
            let elementocampoContrasenna = document.createElement('p');
            contenerdorcampoContrasenna.appendChild(elementocampoContrasenna);
            elementocampoContrasenna.textContent = "**********";
            campoContrasenna.appendChild(contenerdorcampoContrasenna);

            let contenerdorcampoUbicacion = document.createElement('div');
            let elementocampoUbicacion = document.createElement('p');
            contenerdorcampoUbicacion.appendChild(elementocampoUbicacion);
            elementocampoUbicacion.textContent = ubicacion;
            campoUbicacion.appendChild(contenerdorcampoUbicacion);

            // let contenerdorcampoMapa = document.createElement('div');
            // let elementocampoMapa = document.createElement('p');
            // contenerdorcampoMapa.appendChild(elementocampoMapa);
            // elementocampoMapa.textContent = mapa;
            // campoMapa.appendChild(contenerdorcampoMapa);

            let contenerdorcampoAutor = document.createElement('div');
            let elementocampoAutor = document.createElement('p');
            contenerdorcampoAutor.appendChild(elementocampoAutor);
            elementocampoAutor.textContent = mapa;
            campoAutor.appendChild(contenerdorcampoAutor);

            let contenerdorcampoGeneroLiterario = document.createElement('div');
            let elementocampoGeneroLiterario = document.createElement('p');
            contenerdorcampoGeneroLiterario.appendChild(elementocampoGeneroLiterario);
            elementocampoGeneroLiterario.textContent = mapa;
            campoGeneroLiterario.appendChild(contenerdorcampoGeneroLiterario);

        }
    });
};

// Define el nombre del método basado el el número de tarjeta
const definirProvincia = (provincia) => {
    let nombreProvincia;

    if (provincia.substr(0, 8) == '1') {
        nombreProvincia = 'San José-';
    } else if (provincia.substr(0, 8) == '2') {
        nombreProvincia = 'Alajuela';
    } else if (provincia.substr(0, 8) == '3') {
        nombreProvincia = 'Cartago';
    } else if (provincia.substr(0, 8) == '4') {
        nombreProvincia = 'Heredia';
    } else if (provincia.substr(0, 8) == '5') {
        nombreProvincia = 'Guanacaste';
    } else if (provincia.substr(0, 8) == '6') {
        nombreProvincia = 'Puntarenas';
    } else {
        nombreProvincia = 'Limón';
    }

    return nombreProvincia;
};


const definirIdentificacion = (tipoidentificacion) => {
    let nombreIdentificacion;

    if (tipoidentificacion == '1') {
        nombreIdentificacion = 'Cédula de Identidad';
    } else if (tipoidentificacion == '2') {
        nombreIdentificacion = 'DIMEX';
    } else if (tipoidentificacion == '3') {
        nombreIdentificacion = 'NITE';
    } else if (tipoidentificacion == '4') {
        nombreIdentificacion = 'DIDI';
    } else {
        nombreIdentificacion = 'Otro';
    }

    return nombreIdentificacion;
};

const definirGenero = (tipoGenero) => {
    let nombreGenero;

    if (tipoGenero == '1') {
        nombreGenero = 'Femenino';
    } else if (tipoGenero == '2') {
        nombreGenero = 'Masculino';
    } else {
        nombreGenero = 'Otro';
    }

    return nombreGenero;
};

empezar();


































const inputNombre = document.getElementById('campo-nombre');
const btnActualizar = document.getElementById('btn-actualizar');

const redirigir = () => {

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
            window.location.href = 'pagina_principal.html';
        });
    }

};

btnActualizar.addEventListener('click', () => {
    redirigir();

});


// icono-actualizar

// Función de evento para modificar datos

// perfilModificar.addEventListener('click', () => {

//     console.log('Permitiendo la modificación de la información del perfil');
//     Swal.fire({
//         'icon': 'success',
//         'title': 'Modificar perfil',
//     }).then(() => {
//         listaGenerosCompleto.reset();
//     });

// });