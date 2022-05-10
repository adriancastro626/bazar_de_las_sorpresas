const registrarDatos = async(endpoint, data, redireccion) => {
    let url = `http://localhost:3000/api/${endpoint}`;

    await axios({
        'url': url,
        'method': 'post',
        'responseType': 'json',
        'data': data
    }).then(response => {
        Swal.fire({
            'icon': 'success',
            'title': 'Operación completada',
            'text': response.data.msj
        }).then(() => {
            window.location.href = redireccion;
        });
    }).catch(error => {
        Swal.fire({
            'icon': 'error',
            'title': 'Ha ocurrido un error',
            'text': error
        })
    });

};

const obtenerDatos = async(endpoint) => {
    let url = `http://localhost:3000/api/${endpoint}`;
    let listaDatos = [];
    await axios({
            'url': url,
            'method': 'get',
            'responseType': 'json'
        })
        .then(response => {
            listaDatos = response.data.lista;
        }).catch(error => {
            Swal.fire({
                icon: 'error',
                text: error
            });
        });

    return listaDatos;
};

const eliminarDatos = async(endpoint, _id) => {
    let url = `http://localhost:3000/api/${endpoint}`;
    await axios({
        'url': url,
        'method': 'delete',
        'responseType': 'json',
        'data': {
            '_id': _id
        }
    }).then(response => {
        Swal.fire({
            'icon': 'success',
            'title': 'Operación completada',
            'text': response.data.msj
        }).then(() => {
            window.location.reload();
        });
    }).catch(error => {
        Swal.fire({
            icon: 'error',
            text: error
        });
    });
};

const obtenerElemento = async(endpoint) => {
    let url = `http://localhost:3000/api/${endpoint}`;
    let elemento;
    await axios({
            'url': url,
            'method': 'get',
            'responseType': 'json'
        })
        .then(response => {
            elemento = response.data.libro;
        }).catch(error => {
            Swal.fire({
                icon: 'error',
                text: error
            });
        });

    return elemento;
};

const validar_credenciales = (pcorreo, pcontrasenna) => {
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:3000/api/inicio-sesion',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
            correousuario: pcorreo,
            contrasenna: pcontrasenna
        }
    });
    peticion.done((response) => {
        if (response.success == true) {
            Swal.fire({
                'icon': 'success',
                'title': 'Saludos',
                'text': 'El Bazar de las Sorpresas'
            }).then(() => {
                window.location.href = 'pagina_principal.html';

            });
        } else {
            Swal.fire({
                'icon': 'warning',
                'title': 'Ingrese usuario y/o contraseña valido',
                'text': ''
            });
        }
        respuesta = response;
        sessionStorage.setItem('conectado', response.success);
    });
    peticion.fail((response) => {
        respuesta = response;
    });

    return respuesta;

};