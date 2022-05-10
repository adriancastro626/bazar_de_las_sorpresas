window.onload = function() {

    let queryString1 = window.location.search;
    let urlParams1 = new URLSearchParams(queryString1);
    let autor = urlParams1.get('autor');
    document.getElementById('autor').innerText = autor;

    let queryString2 = window.location.search;
    let urlParams2 = new URLSearchParams(queryString2);
    let publicacion = urlParams2.get('publicacion');
    document.getElementById('publicacion').innerText = publicacion;

    let queryString3 = window.location.search;
    let urlParams3 = new URLSearchParams(queryString3);
    let editorial = urlParams3.get('editorial');
    document.getElementById('editorial').innerText = editorial;

    let queryString4 = window.location.search;
    let urlParams4 = new URLSearchParams(queryString4);
    let isbn = urlParams4.get('isbn');
    document.getElementById('isbn').innerText = isbn;

    let queryString5 = window.location.search;
    let urlParams5 = new URLSearchParams(queryString5);
    let genero = urlParams5.get('genero');
    document.getElementById('genero').innerText = genero;

    let queryString6 = window.location.search;
    let urlParams6 = new URLSearchParams(queryString6);
    let premios = urlParams6.get('premios');
    document.getElementById('premios').innerText = premios;

    let queryString7 = window.location.search;
    let urlParams7 = new URLSearchParams(queryString7);
    let titulo = urlParams7.get('titulo');
    document.getElementById('titulo').innerText = titulo;

    let queryString8 = window.location.search;
    let urlParams8 = new URLSearchParams(queryString8);
    let precio = urlParams8.get('precio');
    document.getElementById('precio').innerText = precio;

    let queryString9 = window.location.search;
    let urlParams9 = new URLSearchParams(queryString9);
    let descuento = urlParams9.get('descuento');
    document.getElementById('descuento').innerText = descuento;

    let queryString10 = window.location.search;
    let urlParams10 = new URLSearchParams(queryString10);
    let sipnosis = urlParams10.get('sipnosis');
    document.getElementById('sipnosis').innerText = sipnosis;

    let queryString11 = window.location.search;
    let urlParams11 = new URLSearchParams(queryString11);
    let portada = urlParams11.get('portada');
    document.getElementById('portada').src = portada;

    let queryString12 = window.location.search;
    let urlParams12 = new URLSearchParams(queryString12);
    let contraportada = urlParams12.get('contraportada');
    document.getElementById('contraportada').src = contraportada;
};

const carritoBoton = document.querySelector('#btn-carrito');

const carritoInfo = () => {

    let queryString4 = window.location.search;
    let urlParams4 = new URLSearchParams(queryString4);
    let isbn = urlParams4.get('isbn');

    let cantidad = "1";

    let usuarioConectado = JSON.parse(localStorage.getItem('usuarioConectado'));
    let correo = usuarioConectado.correousuario;

    let carrito = {
        correoUsuario: correo,
        isbncarrito: isbn,
        cantidadcarrito: cantidad
    };

    console.log(carrito);

    registrarDatos('agregar-carrito', carrito, "../html/lista_libros.html")

};

carritoBoton.addEventListener('click', () => {

    carritoInfo();

});