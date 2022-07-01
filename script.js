let input = document.querySelector('.input');
let agregar = document.querySelector('.boton-agregar');
let container = document.querySelector('.container');

//creando clase

class Item {
    constructor(crearDiv) {
        this.crearDiv
    }
}

// creando el input con sus atributos
function crearDiv(tarea) {
    //agregar div
    const divnuevo = document.createElement('div')
    //atributo del div
    divnuevo.classList.add('new-div')
    //atributo del input
    const createInput = document.createElement('input');
    createInput.setAttribute('type', 'text');
    createInput.setAttribute('disabled', 'true');
    createInput.classList.add('item-input');
    createInput.value = tarea;
    divnuevo.appendChild(createInput);
    container.appendChild(divnuevo);
}
//agregando div del input
agregar.addEventListener('click', function () {
    if (input.value === ('')) {
    } else {
        crearDiv(input.value)
        input.value = ''
    } 
})


//nuvevo elemento html
/*container.appendChild()*/