'use strict';
const boton_foto_usuario = document.querySelector('#btn-foto');
const imagen = document.querySelector('#btn-foto');
let widget_cloudinary = cloudinary.createUploadWidget({
    cloudName: 'elbazar2022',
    uploadPreset: 'elbazarUser'
}, (err, result) => {
    if (!err && result && result.event === 'success') {
        console.log('Imagen subida con éxito', result.info);
        imagen.src = result.info.secure_url;
    }
});

boton_foto_usuario.addEventListener('click', () => {
    widget_cloudinary.open();
}, false);