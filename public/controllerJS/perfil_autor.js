window.onload = function() {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var nombre = urlParams.get('nombre');
    var queryString6 = window.location.search;
    var urlParams6 = new URLSearchParams(queryString6);
    var apellido = urlParams.get('apellido');
    document.getElementById('nombreautor').innerText = nombre + " " +
        apellido;
    //fecha nacimiento


    var queryString2 = window.location.search;
    var urlParams2 = new URLSearchParams(queryString2);
    var fecnacimiento = urlParams2.get('fechanacimiento');
    document.getElementById('fechaNacimiento').innerText = fecnacimiento;

    //fecha defuncion
    var queryString3 = window.location.search;
    var urlParams3 = new URLSearchParams(queryString3);
    var fechadefuncion = urlParams3.get('fechadefuncion');
    document.getElementById('fechaDefuncion').innerText = fechadefuncion;

    //nacionalidad
    var queryString4 = window.location.search;
    var urlParams4 = new URLSearchParams(queryString4);
    var nacionalidad = urlParams4.get('nacionalidad');
    document.getElementById('Nacionalidad').innerText = nacionalidad;

    //biografia
    var queryString5 = window.location.search;
    var urlParams5 = new URLSearchParams(queryString5);
    var biografia = urlParams5.get('biografia');
    document.getElementById('Biografia').innerText = biografia;

    //adjunto

    var queryString7 = window.location.search;
    var urlParams7 = new URLSearchParams(queryString7);
    var adjunto = urlParams7.get('adjunto');
    document.querySelector('#Adjunto').src = adjunto;

};