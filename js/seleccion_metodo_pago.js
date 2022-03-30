const obtenerMetodos = document.getElementById('cont-listar-metodos');
const btnAtras = document.getElementById('btn-atras');
const btnContinuar = document.getElementById('btn-continuar');

const mostrarMetodos = () => {
    let contador = 0;

    listaMetodos.forEach(metodo => {
        let nombreMetodo = definirNombreMetodo(metodo.numeroTarjeta);
        let radioLabel = document.createElement('label');
        let radioInput = document.createElement('input');

        radioInput.type = 'radio';
        radioInput.name = 'seleccion-metodo';
        radioInput.id = 'radio-' + nombreMetodo;
        radioInput.value = toString(contador + 1);
        radioInput.classList.add('radio-metodo');
        metodo.favorito ? radioInput.checked = true : radioInput.checked = false;

        radioLabel.appendChild(radioInput);
        radioLabel.appendChild(document.createTextNode(nombreMetodo));

        obtenerMetodos.appendChild(radioLabel);

    });

};

const definirNombreMetodo = (numeroTarjeta) => {
    let nombreMetodo;

    if (numeroTarjeta.substr(0, 1) == '4') {
        nombreMetodo = 'VISA-' + numeroTarjeta.slice(-4);
    } else {
        nombreMetodo = 'MasterCard-' + numeroTarjeta.slice(-4);
    }

    return nombreMetodo;
};

mostrarMetodos();

btnAtras.addEventListener('click', () => {
    // PLACEHOLDER
    // window.location.href = 'registro_metodo_pago.html'
    Swal.fire({
        'icon': 'info',
        'title': 'Regresando a la página anterior',
        'text': 'Ha presionado el botón Atrás.'
    });
});

btnContinuar.addEventListener('click', () => {
    // PLACEHOLDER
    // window.location.href = 'seleccion_metodo_pago.html'
    Swal.fire({
        'icon': 'success',
        'title': 'Continuar con la compra',
        'text': 'Ha presionado el botón Continuar.'
    });
});