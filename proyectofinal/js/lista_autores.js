const cuerpoTabla = document.querySelector("#tbl-libros tbody"); // se usa selectores de css

document.getElementById("btn-agregar-autor").addEventListener('click', () => {
    window.location.href = "registro_autor.html";

});

const mostrarDatos = () => {
    cuerpoTabla.innerHTML = '';
    let fila = cuerpoTabla.insertRow(); // CREO LA FILA

    fila.insertCell().innerText = "Gabriel";
    fila.insertCell().innerText = "García Marquez"; // NOMBRO LA FILA Y SUMA COLUMNAS
    fila.insertCell().innerText = "Colombia";
    fila.insertCell().innerText = "6 de marzo 1927";
    fila.insertCell().innerText = "17 de abril 2014";
    let fila2 = cuerpoTabla.insertRow(); // CREO LA FILA
    fila2.insertCell().innerText = "Gabriel";
    fila2.insertCell().innerText = "García Marquez";
    fila2.insertCell().innerText = "Colombia";
    fila2.insertCell().innerText = "6 de marzo 1927";
    fila2.insertCell().innerText = "17 de abril 2014";
    let fila3 = cuerpoTabla.insertRow(); // CREO LA FILA
    fila3.insertCell().innerText = "Gabriel";
    fila3.insertCell().innerText = "García Marquez";
    fila3.insertCell().innerText = "Colombia";
    fila3.insertCell().innerText = "6 de marzo 1927";
    fila3.insertCell().innerText = "17 de abril 2014";
    let fila4 = cuerpoTabla.insertRow(); // CREO LA FILA
    fila4.insertCell().innerText = "Gabriel";
    fila4.insertCell().innerText = "García Marquez";
    fila4.insertCell().innerText = "Colombia";
    fila4.insertCell().innerText = "6 de marzo 1927";
    fila4.insertCell().innerText = "17 de abril 2014";
    let fila5 = cuerpoTabla.insertRow(); // CREO LA FILA
    fila5.insertCell().innerText = "Gabriel";
    fila5.insertCell().innerText = "García Marquez";
    fila5.insertCell().innerText = "Colombia";
    fila5.insertCell().innerText = "6 de marzo 1927";
    fila5.insertCell().innerText = "17 de abril 2014";
    let fila6 = cuerpoTabla.insertRow(); // CREO LA FILA
    fila6.insertCell().innerText = "Gabriel";
    fila6.insertCell().innerText = "García Marquez";
    fila6.insertCell().innerText = "Colombia";
    fila6.insertCell().innerText = "6 de marzo 1927";
    fila6.insertCell().innerText = "17 de abril 2014";
    let fila7 = cuerpoTabla.insertRow(); // CREO LA FILA
    fila7.insertCell().innerText = "Gabriel";
    fila7.insertCell().innerText = "García Marquez";
    fila7.insertCell().innerText = "Colombia";
    fila7.insertCell().innerText = "6 de marzo 1927";
    fila7.insertCell().innerText = "17 de abril 2014";
    let fila8 = cuerpoTabla.insertRow(); // CREO LA FILA
    fila8.insertCell().innerText = "Gabriel";
    fila8.insertCell().innerText = "García Marquez";
    fila8.insertCell().innerText = "Colombia";
    fila8.insertCell().innerText = "6 de marzo 1927";
    fila8.insertCell().innerText = "17 de abril 2014";
    let fila9 = cuerpoTabla.insertRow(); // CREO LA FILA
    fila9.insertCell().innerText = "Gabriel";
    fila9.insertCell().innerText = "García Marquez";
    fila9.insertCell().innerText = "Colombia";
    fila9.insertCell().innerText = "6 de marzo 1927";
    fila9.insertCell().innerText = "17 de abril 2014";


};

mostrarDatos();