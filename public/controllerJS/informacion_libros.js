'use strict';

const registrarDatos = async(pdatos, pendPoint) => {
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
        listaDatos = response.data.lista;
    });

    return listaDatos;

};