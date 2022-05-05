const cuerpoTabla = document.querySelector("#tbl-ventas");
const botonBuscar = document.querySelector('#btn-Buscar');
const inputInicio = document.querySelector('#txt-fecha-inicio');
const inputFin = document.querySelector('#txt-fecha-salida');

// 
let lista = [];

const inicializar = async() => {

    lista = await obtenerDatos('listar-autores');
    imprimirDatos();
};

function imprimirDatos() {
    cuerpoTabla.innerHTML = '';
    inicio = inputInicio.value;
    fin = inputFin.value;

    for (let i = 0; i < lista.length; i++) {
        if (inicio && fin) {
            let fechaventa = new Date(lista[i][1]);
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


botonBuscar.addEventListener('click', inicializar);