window.onload = function() {
    
    var queryString1 = window.location.search;
    var urlParams1 = new URLSearchParams(queryString1);
    var autor = urlParams1.get('autor');
    document.getElementById('autor').innerText = autor;

    var queryString2 = window.location.search;
    var urlParams2 = new URLSearchParams(queryString2);
    var publicacion = urlParams2.get('publicacion');
    document.getElementById('publicacion').innerText = publicacion;

    var queryString3 = window.location.search;
    var urlParams3 = new URLSearchParams(queryString3);
    var editorial = urlParams3.get('editorial');
    document.getElementById('editorial').innerText = editorial;

    var queryString4 = window.location.search;
    var urlParams4 = new URLSearchParams(queryString4);
    var isbn = urlParams4.get('isbn');
    document.getElementById('isbn').innerText = isbn;

    var queryString5 = window.location.search;
    var urlParams5 = new URLSearchParams(queryString5);
    var genero = urlParams5.get('genero');
    document.getElementById('genero').innerText = genero;

    var queryString6 = window.location.search;
    var urlParams6 = new URLSearchParams(queryString6);
    var premios = urlParams6.get('premios');
    document.getElementById('premios').innerText = premios;

    var queryString7 = window.location.search;
    var urlParams7 = new URLSearchParams(queryString7);
    var titulo = urlParams7.get('titulo');
    document.getElementById('titulo').innerText = titulo;

    var queryString8 = window.location.search;
    var urlParams8 = new URLSearchParams(queryString8);
    var precio = urlParams8.get('precio');
    document.getElementById('precio').innerText = precio;
    
    var queryString9 = window.location.search;
    var urlParams9 = new URLSearchParams(queryString9);
    var descuento = urlParams9.get('descuento');
    document.getElementById('descuento').innerText = descuento;

    var queryString10 = window.location.search;
    var urlParams10 = new URLSearchParams(queryString10);
    var sipnosis = urlParams10.get('sipnosis');
    document.getElementById('sipnosis').innerText = sipnosis;

    var queryString11 = window.location.search;
    var urlParams11 = new URLSearchParams(queryString11);
    var portada = urlParams11.get('portada');
    document.getElementById('portada').src = portada;

    var queryString12 = window.location.search;
    var urlParams12 = new URLSearchParams(queryString12);
    var contraportada = urlParams12.get('contraportada');
    document.getElementById('contraportada').src = contraportada;
};
