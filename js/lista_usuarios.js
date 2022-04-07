let usuarioConectado = JSON.parse(localStorage.getItem('usuarioConectado'));

document.getElementById('campo-nombre-lista').textContent = usuarioConectado.nombre;
document.getElementById('campo-correo-lista').textContent = usuarioConectado.correo;



let listaUsuarios = [{
    'tipo': 1,
    'nombre': 'Pablo',
    'segundoNombre': 'Arturo',
    'apellido': 'Rodriguez',
    'segundoApellido': 'Salazar',
    'tipoIdentificacion': 'Cedula de Identidad',
    'numeroIdentificacion': '1-0987-0678',
    'genero': 'Masculino',
    'otroGenero': '',
    'fechaNacimiento': '01/11/1987',
    'generoLiterario': 'Ciencia Ficcion, Terror, Drama',
    'correo': 'pablo@gmail.com',
    'contrasenna': '123',
    'autor': 'Carmen Naranjo, Lucas R.',
    'provincia': 'San Jose',
    'canton': 'Escazu',
    'distrito': 'San Miguel',
    'direccion': 'De la Ferreteria de San Miguel, 200 Norte, casa color blanco',
    'coordenadas': '',
    'foto': ''
}, {
    'tipo': 2,
    'nombre': 'Vanessa',
    'segundoNombre': 'Maria',
    'apellido': 'Cascante',
    'segundoApellido': 'Mendez',
    'tipoIdentificacion': 'Cedula de Identidad',
    'numeroIdentificacion': '2-0365-0465',
    'genero': 'Femenino',
    'otroGenero': '',
    'fechaNacimiento': '09/23/1992',
    'generoLiterario': 'Romance, Biografias, Terror',
    'correo': 'vanessa@gmail.com',
    'contrasenna': '321',
    'autor': 'Stephen H, Pablo Neruda',
    'provincia': 'Alajuela',
    'canton': 'San Mateo',
    'distrito': 'San Mateo',
    'direccion': 'Contiguo a la plaza de San Mateo',
    'coordenadas': '',
    'foto': ''
}, {
    'tipo': 3,
    'nombre': 'Raul',
    'segundoNombre': 'Carlos',
    'apellido': 'Flores',
    'segundoApellido': 'Jimenez',
    'tipoIdentificacion': 'Cedula de Identidad',
    'numeroIdentificacion': '6-0480-0112',
    'genero': 'Masculino',
    'otroGenero': '',
    'fechaNacimiento': '04/10/1977',
    'generoLiterario': 'Fantasia, Cuentos Magicos, Historia',
    'correo': 'raul@gmail.com',
    'contrasenna': '987',
    'autor': 'James Black, Oliver Becker',
    'provincia': 'Puntarenas',
    'canton': 'Miramar',
    'distrito': 'San Gerardo',
    'direccion': 'De la Pops de miramar, 250 metros este contiguo a la Escuela',
    'coordenadas': '',
    'foto': ''
}, {
    'tipo': 4,
    'nombre': 'Joselyn',
    'segundoNombre': 'Josefa',
    'apellido': 'Morales',
    'segundoApellido': 'Benavidez',
    'tipoIdentificacion': 'Cedula de Identidad',
    'numeroIdentificacion': '4-0153-0309',
    'genero': 'Femenino',
    'otroGenero': '',
    'fechaNacimiento': '11/11/2001',
    'generoLiterario': 'Biografia, Ciencia, Historia',
    'correo': 'joselyn@gmail.com',
    'contrasenna': '987',
    'autor': 'Carmen Naranjo, Lucas R.',
    'provincia': 'Cartago',
    'canton': 'Lima',
    'distrito': 'Centro',
    'direccion': 'Lima Cartago centro, calle la petra, casa blanca',
    'coordenadas': '',
    'foto': ''
}];

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