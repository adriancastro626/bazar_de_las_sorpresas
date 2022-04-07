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
    // window.location.href = localStorage.getItem('metodoEnvio');
    // console.log(localStorage.getItem('metodoEnvio'));
    window.location.href = 'metodo_envio_domicilio.html';
});

btnContinuar.addEventListener('click', () => {
    Swal.fire({
        'icon': 'success',
        'title': 'Compra exitosa !!!',
        'text': 'Se ha efectuado la compra con éxito.'
    }).then(() => {
        window.open('factura.html', '_blank');
        window.location.href = 'pagina_principal.html';
    });
});