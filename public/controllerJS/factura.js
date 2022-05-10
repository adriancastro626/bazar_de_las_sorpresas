const nombreCliente = document.querySelector('#cont-nombre-cliente a');
let listaNombres = [];
const inicializar = async() => {
    listaNombres = await obtenerDatos('listar-ventas');
    mostrarDatos();
};

const mostrarDatos = () => {
    nombreCliente.innerHTML = '';
    listaNombres.forEach(nombre => {
        if (nombre.correousuario.toLowerCase()) {
            let fila = nombreCliente.insertRow();

            fila.insertCell().innerText = nombre.correousuario;



        }
    });
};
inicializar();