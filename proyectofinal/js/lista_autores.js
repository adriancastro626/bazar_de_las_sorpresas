const cuerpoTabla = document.querySelector("#tbl-libros tbody"); // se usa selectores de css

document.getElementById("btn-agregar-autor").addEventListener('click', () => {
    window.location.href = "registro_autor.html";
    cuerpoTabla.innerHTML = '';
    let fila = cuerpoTabla.insertRow(); // CREO LA FILA

    fila.insertCell().innerText = "Gabriel";
    fila.insertCell().innerText = "García Marquez"; // NOMBRO LA FILA Y SUMA COLUMNAS
    fila.insertCell().innerText = "Masculino";
    fila.insertCell().innerText = "6 de marzo 1927";
    fila.insertCell().innerText = "17 de abril 2014";
});

const mostrarDatos = () => {};