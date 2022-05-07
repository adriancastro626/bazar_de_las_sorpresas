window.onload = function() {
    
    var queryString1 = window.location.search;
    var urlParams1 = new URLSearchParams(queryString1);
    var autor = urlParams1.get('autor');
    document.getElementById('autor').innerText = autor;



    var queryString3 = window.location.search;
    var urlParams3 = new URLSearchParams(queryString3);
    var editorial = urlParams3.get('editorial');
    document.getElementById('editorial').innerText = editorial;

    var queryString4 = window.location.search;
    var urlParams4 = new URLSearchParams(queryString4);
    var isbn = urlParams4.get('isbn');
    document.getElementById('isbn').innerText = isbn;

    var queryString7 = window.location.search;
    var urlParams7 = new URLSearchParams(queryString7);
    var precio = urlParams7.get('precio');
    document.getElementById('precio').innerText = precio;
};