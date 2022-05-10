const cuerpoTabla = document.querySelector('#tbl-descuentos tbody');

let listaDescuentos = [];

const inicializar = async() => {
    listaDescuentos = await obtenerDatos('listar-historial');
    mostrarDatos();
};

const mostrarDatos = () => {
    cuerpoTabla.innerHTML = '';
    listaDescuentos.forEach(descuento => {
        if (descuento.nombrelibro.toLowerCase()) {
            let fila = cuerpoTabla.insertRow();

            fila.insertCell().innerText = descuento.nombrelibro;
            fila.insertCell().innerText = descuento.costobruto;
            fila.insertCell().innerText = descuento.descuento;
            fila.insertCell().innerText = descuento.grantotal;


        }
    });
};
inicializar();