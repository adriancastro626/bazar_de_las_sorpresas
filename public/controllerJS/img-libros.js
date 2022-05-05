'use strict';
const botonPortada = document.querySelector('#btn-portada');
const imagenPortada = document.querySelector('#subir-portada');
const botonContraportada = document.querySelector('#btn-contraportada');
const imagenContraportada = document.querySelector('#subir-contraportada');


let portada_cloudinary = cloudinary.createUploadWidget ({
    cloudName : 'gatita03',
    uploadPreset : 'bazarSopresas'
}, (err, result) => {
    if (!err && result && result.event === 'success') {
        console.log('Imagen subida con éxito', result.info);
        imagenPortada.src  = result.info.secure_url;
    }
});

botonPortada.addEventListener('click', () => {
    portada_cloudinary.open();
}, false);

let contraportada_cloudinary = cloudinary.createUploadWidget ({
    cloudName : 'gatita03',
    uploadPreset : 'bazarSopresas'
}, (err, result) => {
    if (!err && result && result.event === 'success') {
        console.log('Imagen subida con éxito', result.info);
        imagenContraportada.src  = result.info.secure_url;
    }
});

botonContraportada.addEventListener('click', () => {
    contraportada_cloudinary.open();
}, false);