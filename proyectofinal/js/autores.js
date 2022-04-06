let listaAutores = [{
    'nombre': 'Gabriel ',
    'apellido': 'García Marquez',
    'nacionalidad': 1,
    'FechaNacimiento': '6 de marzo 1927',
    'FechaDefunción': 'García Marquez',
    'Biografia': 'aqui va la biografía',
}, {
    'nombre': 'JK ',
    'apellido': 'Rowling',
    'nacionalidad': 2,
    'FechaNacimiento': '6 de marzo 1960',
    'FechaDefunción': '',
    'Biografia': 'aqui va la biografía',
}, {
    'nombre': 'Edgar ',
    'apellido': 'Allan Poe',
    'nacionalidad': 2,
    'FechaNacimiento': '6 de febrero 1950',
    'FechaDefunción': '8 de marzo de 2011',
    'Biografia': 'aqui va la biografía',
}]; // json se sacan con alt 91, cada valor tiene una posición e iniciaen 0;


for (let i = 0; i < listaAutores.length; i++) {
    console.log(listaAutores[i]);
}