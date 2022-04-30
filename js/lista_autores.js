const cuerpoTabla = document.querySelector("#tbl-autores tbody");
// 
let lista = [];

document.getElementById("btn-agregar-autor").addEventListener('click', () => {
    window.location.href = "registro_autor.html";

});

const inicializar = async() => {

    lista = await obtenerDatos('listar-autores');
    mostrarDatos();
};

const mostrarDatos = () => {
    cuerpoTabla.innerHTML = '';
    lista.forEach(autor => {
        // creo los botones
        let botonBiografia = document.createElement("button");
        botonBiografia.textContent = "Perfil"


        let botonEditar = document.createElement("button");
        let spanEditar = document.createElement("span");
        let iconoEditar = document.createElement("i");

        let botonEliminar = document.createElement("button");
        let spanEliminar = document.createElement("span");
        let iconoEliminar = document.createElement("i");

        // le doy estilos

        botonBiografia.classList.add('biografia');
        iconoEliminar.classList.add('fa-solid');
        iconoEliminar.classList.add('fa-trash-can');
        iconoEliminar.classList.add('fa-1l');
        botonEliminar.classList.add('icono-eliminar');
        botonEliminar.name = "boton-eliminar";

        iconoEditar.classList.add('fa-solid');
        iconoEditar.classList.add('fa-pen-to-square');
        iconoEditar.classList.add('fa-1l');
        iconoEditar.classList.add('icono-editar');
        botonEditar.name = "boton-editar";

        botonBiografia.name = "boton-biografia";

        //establece jerarquia
        spanEliminar.appendChild(iconoEliminar);
        botonEliminar.appendChild(spanEliminar);

        spanEditar.appendChild(iconoEditar);
        botonEditar.appendChild(spanEditar);


        let fila = cuerpoTabla.insertRow(); // CREO LA FILA

        fila.insertCell().innerText = autor.nombre;
        fila.insertCell().innerText = autor.apellido;
        fila.insertCell().innerText = autor.nacionalidad;
        fila.insertCell().innerText = autor.nacimientoAutor;
        fila.insertCell().innerText = autor.defuncionAutor;
        fila.insertCell().innerText = autor.bibliografia;


        fila.insertCell().appendChild(botonBiografia);
        fila.insertCell().appendChild(botonEditar);
        fila.insertCell().appendChild(botonEliminar);
        botonBiografia.addEventListener("click", () => {
            window.location.href = "perfil_autor.html";
        })

        botonEditar.addEventListener("click", () => {
            window.location.href = "registro_autor.html";
        })

        botonEliminar.addEventListener("click", () => {
            Swal.fire({
                'icon': 'error',
                'title': 'Método eliminado!',
                'text': 'Se ha eliminado el método de pago.'
            });
        })

    });


};






inicializar();