'use strict';

// PROMOCIONES
const registrarPromocion = async(pdatos, pendPoint) => {
    let url = 'http://localhost:3000/api';
    url += pendPoint;

    await axios({
        method: 'post',
        url: url,
        data: pdatos
    });
};

const obtenerListaPromociones = async(pendPoint) => {
    let url = 'http://localhost:3000/api';
    url += pendPoint;

    let listaPromociones = [];

    await axios({
        method: 'get',
        url: url
    }).then(response => {
        listaPromociones = response.data.promociones;
    });

    return listaPromociones;

};

const eliminarPromocion = async(pendPoint, _id) => {
    let url = 'http://localhost:3000/api';
    url += pendPoint;

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
            'title': response.data.msj
        }).then( () => {
            window.location.reload();
        });
    }).catch(error => {
        Swal.fire({
            'icon': error
        });;
    });
};


// LIBROFAN
const registrarFan = async(pdatos, pendPoint) => {
    let url = 'http://localhost:3000/api';
    url += pendPoint;

    await axios({
        method: 'post',
        url: url,
        data: pdatos
    });
};

const obtenerDescuento = async(pendPoint) => {
    let url = 'http://localhost:3000/api';
    url += pendPoint;

    let listaLibrofan = [];

    await axios({
        method: 'get',
        url: url
    }).then(response => {
        listaLibrofan = response.data.descuentolibrofan;
    });

    return listaLibrofan;

};

const obtenerMinimo = async(pendPoint) => {
    let url = 'http://localhost:3000/api';
    url += pendPoint;

    let listaMinimo = [];

    await axios({
        method: 'get',
        url: url
    }).then(response => {
        listaMinimo = response.data.minimocompra;
    });

    return listaMinimo;

};

//IMPUESTO
const registrarImpuesto = async(pdatos, pendPoint) => {
    let url = 'http://localhost:3000/api';
    url += pendPoint;

    await axios({
        method: 'post',
        url: url,
        data: pdatos
    });
};

const obtenerImpuesto = async(pendPoint) => {
    let url = 'http://localhost:3000/api';
    url += pendPoint;

    let listaImpuesto = [];

    await axios({
        method: 'get',
        url: url
    }).then(response => {
        listaImpuesto = response.data.impuesto;
    });

    return listaImpuesto;

};


//CORREO FACTURA
const registrarfactura = async(pdatos, pendPoint) => {
    let url = 'http://localhost:3000/api';
    url += pendPoint;

    await axios({
        method: 'post',
        url: url,
        data: pdatos
    });
};

const obtenerCorreoFactura = async(pendPoint) => {
    let url = 'http://localhost:3000/api';
    url += pendPoint;

    let listaCorreoFactura = [];

    await axios({
        method: 'get',
        url: url
    }).then(response => {
        listaCorreoFactura = response.data.correoadmin;
    });

    return listaCorreoFactura;

};


//GENERO LIBRO
const registrarGenero = async(pdatos, pendPoint) => {
    let url = 'http://localhost:3000/api';
    url += pendPoint;

    await axios({
        method: 'post',
        url: url,
        data: pdatos
    });
};

const obtenerListaGeneros = async(pendPoint) => {
    let url = 'http://localhost:3000/api';
    url += pendPoint;

    let listaGeneros = [];

    await axios({
        method: 'get',
        url: url
    }).then(response => {
        listaGeneros = response.data.generos;
    });

    return listaGeneros;

};

const eliminarGenero = async(pendPoint, _id) => {
    let url = 'http://localhost:3000/api';
    url += pendPoint;

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
            'title': response.data.msj
        }).then( () => {
            window.location.reload();
        });
    }).catch(error => {
        Swal.fire({
            'icon': error
        });;
    });
};


//LIBROS
const registrarLibro = async(pdatos, pendPoint) => {
    let url = 'http://localhost:3000/api';
    url += pendPoint;

    await axios({
        method: 'post',
        url: url,
        data: pdatos
    });
};


const obtenerListaLibros = async(pendPoint) => {
    let url = 'http://localhost:3000/api';
    url += pendPoint;

    let listaDatos = [];

    await axios({
        method: 'get',
        url: url
    }).then(response => {
        listaDatos = response.data.libros;
    });

    return listaDatos;

};

const eliminarLibro = async(pendPoint, _id) => {
    let url = 'http://localhost:3000/api';
    url += pendPoint;

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
            'title': response.data.msj
        }).then( () => {
            window.location.reload();
        });
    }).catch(error => {
        Swal.fire({
            'icon': error
        });;
    });
};


// AUTORES

const obtenerListaAutores = async(pendPoint) => {
    let url = 'http://localhost:3000/api';
    url += pendPoint;

    let listaAutores = [];

    await axios({
        method: 'get',
        url: url
    }).then(response => {
        listaAutores = response.data.lista;
    });

    return listaAutores;

};