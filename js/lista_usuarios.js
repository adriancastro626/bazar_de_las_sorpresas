let listaUsuarios = [{
    'tipo': 1,
    'nombre': 'Pablo Monestel',
    'correo': 'pablo@gmail.com',
    'nacimiento': '12-10-1987',
    'contrasenna': '123'
}, {
    'tipo': 2,
    'nombre': 'Vanessa Romero',
    'correo': 'vanessa@gmail.com',
    'nacimiento': '03-07-1993',
    'contrasenna': '321'
}, {
    'tipo': 3,
    'nombre': 'Pedro Roman',
    'correo': 'pedro@gmail.com',
    'nacimiento': '01-09-1990',
    'contrasenna': '567'
}, {
    'tipo': 4,
    'nombre': 'Julio Spavel',
    'correo': 'julio@gmail.com',
    'nacimiento': '10-01-1979',
    'contrasenna': '987'
}];

// console.log('---Ciclo For---');
// for (let i = 0; i < listaUsuarios.length; i++) {
//     console.log(listaUsuarios[i]);
// }

// console.log('---Ciclo While---');
// let i = 0;9
// while (i < listaUsuarios.length) {
//     console.log(listaUsuarios[i]);
//     i++;
// }

console.log('---Ciclo For Each---');

listaUsuarios.forEach(usuario => {
    console.log(usuario);
});

listaUsuarios.forEach(usuario => {
    console.log(usuario.nombre, usuario.nacimiento);
});

const cuerpoTabla = document.querySelector("#tbl-usuarios tbody"); // se usa selectores de css

document.getElementById("btn-registrar").addEventListener('click', () => {
    window.location.href = "registroUsuarios.html";
    cuerpoTabla.innerHTML = '';

});

const mostrarDatos = () => {
    let fila = cuerpoTabla.insertRow(); // CREO LA FILA

    fila.insertCell().innerText = "Gabriel";
    fila.insertCell().innerText = "García Marquez"; // NOMBRO LA FILA Y SUMA COLUMNAS
    fila.insertCell().innerText = "Masculino";
    fila.insertCell().innerText = "6 de marzo 1927";
    fila.insertCell().innerText = "17 de abril 2014";
};

mostrarDatos();