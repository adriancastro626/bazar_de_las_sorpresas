const cuerpoTabla = document.querySelector('#tbl-reporte-socios tbody');

let listaSocios = [];

const inicializar = async() => {
    listaSocios = await obtenerDatos('listar-comercios');
    mostrarDatos();
};

const mostrarDatos = () => {
    cuerpoTabla.innerHTML = '';
    listaSocios.forEach(socio => {
        if (socio.nombrecomercio.toLowerCase()) {
            let fila = cuerpoTabla.insertRow();

            fila.insertCell().innerText = socio.nombrecomercio;
            fila.insertCell().innerText = socio.direccioncomercio;
            fila.insertCell().innerText = socio.cantoncomercio;


        }
    });
};
inicializar();