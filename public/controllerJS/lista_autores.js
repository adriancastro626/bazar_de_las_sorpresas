const cuerpoTabla = document.querySelector("#tbl-autores tbody");

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
        var nacimiento = moment(autor.nacimientoAutor).format("MM/DD/YYYY"); // CREO LA FILA
        var defuncion = moment(autor.defuncionAutor).format("MM/DD/YYYY"); // CREO LA FILA



        fila.insertCell().innerText = autor.nombre;
        fila.insertCell().innerText = autor.apellido;
        fila.insertCell().innerText = autor.nacionalidad;
        fila.insertCell().innerText = nacimiento;
        fila.insertCell().innerText = defuncion;
        fila.insertCell().innerText = autor.biografia;
        fila.insertCell().innerText = autor.foto;


        fila.insertCell().appendChild(botonBiografia);
        fila.insertCell().appendChild(botonEditar);
        fila.insertCell().appendChild(botonEliminar);
        botonBiografia.addEventListener("click", () => {
            let NombreAutor = '';

            let fechanacimiento = '';

            let fechadefuncion = '';

            let nacionalidad = '';

            let biografia = '';

            let adjunto = '';

            let apellido = '';

            let indice = botonBiografia.parentNode.parentNode.rowIndex;

            NombreAutor = document.getElementById('tbl-autores').rows[indice].cells[0].innerHTML
            apellido = document.getElementById('tbl-autores').rows[indice].cells[1].innerHTML

            fechanacimiento = document.getElementById('tbl-autores').rows[indice].cells[3].innerHTML

            fechadefuncion = document.getElementById('tbl-autores').rows[indice].cells[4].innerHTML

            nacionalidad = document.getElementById('tbl-autores').rows[indice].cells[2].innerHTML

            biografia = document.getElementById('tbl-autores').rows[indice].cells[5].innerHTML

            adjunto = document.getElementById('tbl-autores').rows[indice].cells[6].innerHTML



            obtenerDatosTabla(NombreAutor, fechanacimiento, fechadefuncion, nacionalidad, biografia, apellido, adjunto);

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

    numFilas = cuerpoTabla.rows.length
    for (let i = 0; i < numFilas; i++) {

        celdaBiografia = cuerpoTabla.rows[i].cells[5];
        celdaBiografia.style.display = 'none';

        celdaFoto = cuerpoTabla.rows[i].cells[6];
        celdaFoto.style.display = 'none';

    }
};



function obtenerDatosTabla(nombre, fechanacimiento, fechadefuncion, nacionalidad, biografia, apellido, adjunto) {

    location.href = "perfil_autor.html?nombre=" + encodeURI(nombre) + '&fechanacimiento=' + encodeURI(fechanacimiento) + '&fechadefuncion=' + encodeURI(fechadefuncion) + '&nacionalidad=' + encodeURI(nacionalidad) + '&biografia=' + encodeURI(biografia) + '&apellido=' + encodeURI(apellido) + '&adjunto=' + encodeURI(adjunto);

};


inicializar();