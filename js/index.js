//Sirve para evitar el error cannot read property addEventListener
window.onload = function() {
    //Variables 
    //arreglo con los nombres de los video juegos
    const videojuegos = [{
        nombre: 'Red Dead Redemption'
    }, {
        nombre: 'StarCraft'
    }, {
        nombre: 'Metal Gear Solid'
    }, {
        nombre: 'Resident Evil'
    }, {
        nombre: 'The Legend Of Zelda'
    }, {
        nombre: 'Battlefield'
    }, {
        nombre: 'Far Cry'
    }, {
        nombre: 'Call of Duty'
    }, {
        nombre: 'Half-Life'
    }, {
        nombre: 'Subnautica'
    }, {
        nombre: 'Forza Horizon'
    }, {
        nombre: 'Halo'
    }, {
        nombre: 'Gears Of War'
    }, {
        nombre: 'Assassins Creed'
    }, {
        nombre: 'Marvels Spider-Man'
    }, ];
    //deteccion de la caja de texto y el boton
    const formulario = document.querySelector('#formulario');
    const boton = document.querySelector('#boton');
    //variable para mostrar un resultado despues de la busqueda
    const resultado = document.querySelector('#resultados');
    //funcion permite obtener el valor de la caja de texto y compararla con el arreglo  
    const filtrar = () => {
        // se inicializa la variable de resultado como vacio
        resultado.innerHTML = '';
        //se almacena el valor de la caja de texto
        const texto = formulario.value.toLowerCase();
        //ciclo for que permite recorrer el arreglo y alamcenar los valores en videojuegos
        for (let videojuego of videojuegos) {
            //se convierte a minuscula el nombre del video juego y se guarda  
            let nombre = videojuego.nombre.toLowerCase();
            //comparacion para saber si el elemento que se busca esta en el arreglo
            if (nombre.indexOf(texto) !== -1) {
                //se imprimen el pantalla los elementos coincidientes
                resultado.innerHTML += `
				<li>${videojuego.nombre}</li>
			`
            }
        }
        // condicion para saber si entro a la primera condicion
        if (resultado.innerHTML == '') {
            //si no hay coindcidencias se imprime el mensaje en pantalla
            resultado.innerHTML += `
				<li>El video juego no esta en la lista...</li>
			`
        }
    }
    //Se lee el evento click del boton buscar
    boton.addEventListener('click', filtrar);
    // se lee el evento de escritura en la caja de texto
    formulario.addEventListener('keyup', filtrar);
    //se incia la funcion de filtrar para que se pueda visualizar el arreglo en pantalla
    filtrar();
}