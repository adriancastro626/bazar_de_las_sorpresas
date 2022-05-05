'use strict';

const registrarPromocion = async(pdatos, pendPoint) => {
    let url = 'http://localhost:3000/api';
    url += pendPoint;

    await axios({
        method: 'post',
        url: url,
        data: pdatos
    });
};

const registrarFan = async(pdatos, pendPoint) => {
    let url = 'http://localhost:3000/api';
    url += pendPoint;

    await axios({
        method: 'post',
        url: url,
        data: pdatos
    });
};

const registrarImpuesto = async(pdatos, pendPoint) => {
    let url = 'http://localhost:3000/api';
    url += pendPoint;

    await axios({
        method: 'post',
        url: url,
        data: pdatos
    });
};


const registrarfactura = async(pdatos, pendPoint) => {
    let url = 'http://localhost:3000/api';
    url += pendPoint;

    await axios({
        method: 'post',
        url: url,
        data: pdatos
    });
};

const registrarGenero = async(pdatos, pendPoint) => {
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