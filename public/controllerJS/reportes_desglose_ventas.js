const cuerpoTabla = document.querySelector("#tbl-ventas tbody");
const botonBuscar = document.getElementById('#btn-Buscar');
const inputInicio = document.querySelector('#txt-fecha-inicio');
const inputFin = document.querySelector('#txt-fecha-salida');
// 
let lista = [];


const inicializar = async() => {

    lista = await obtenerDatos('listar-historial');
    mostrarDatos();
};

const mostrarDatos = () => {
    cuerpoTabla.innerHTML = '';
    lista.forEach(venta => {

        let fila = cuerpoTabla.insertRow();
        var fechacompra = moment(venta.fechacompra).format("MM/DD/YYYY"); // CREO LA FILA

        fila.insertCell().innerText = fechacompra;
        fila.insertCell().innerText = venta.isbnhistorial;
        fila.insertCell().innerText = venta.nombrelibro;
        fila.insertCell().innerText = venta.costo;

    });


};


inicializar();

function imprimirDatos() {
    cuerpoTabla.innerHTML = '';
    inicio = inputInicio.value;
    fin = inputFin.value;

    for (let i = 0; i < lista.length; i++) {
        if (inicio && fin) {
            let fechaventa = new Date(lista[i][0]);
            if (fechaventa >= new Date(inicio) && fechaventa <= new Date(fin)) {
                let fila = cuerpoTabla.insertRow();
                fila.insertCell().innerHTML = lista[i][0];
                fila.insertCell().innerHTML = lista[i][1];
                fila.insertCell().innerHTML = lista[i][2];
                fila.insertCell().innerHTML = lista[i][3];
                fila.insertCell().innerHTML = lista[i][4];
                fila.insertCell().innerHTML = lista[i][5];
            }

        } else {
            let fila = cuerpoTabla.insertRow();
            fila.insertCell().innerHTML = lista[i][0];
            fila.insertCell().innerHTML = lista[i][1];
            fila.insertCell().innerHTML = lista[i][2];
            fila.insertCell().innerHTML = lista[i][3];
            fila.insertCell().innerHTML = lista[i][4];
            fila.insertCell().innerHTML = lista[i][5];
        }

    }

};


botonBuscar.addEventListener('click', imprimirDatos);