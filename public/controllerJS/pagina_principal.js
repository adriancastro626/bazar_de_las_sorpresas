let usuarioConectado = JSON.parse(localStorage.getItem('usuarioConectado'));

document.getElementById('campo-nombre').textContent = usuarioConectado.nombre;
document.getElementById('campo-correo').textContent = usuarioConectado.correo;

// btnRegistrar.addEventListener('click', () => {
//     localStorage.clear();
// });