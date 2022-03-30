const obtenerMetodos = document.getElementById('cont-listar-metodos');

const mostrarMetodos = () => {
    let contador = 0;

    listaMetodos.forEach(metodo => {
        let nombreMetodo = definirNombreMetodo(metodo.numeroTarjeta);
        let radioLabel = document.createElement('label');
        let radioInput = document.createElement('input');
        let radioIcono = document.createElement('i');

        radioInput.type = 'radio';
        radioInput.id = 'radio-' + nombreMetodo;
        radioInput.value = toString(contador + 1);
        radioInput.classList.add('radio-metodo');

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