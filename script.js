//Elementos HTML
let input = document.querySelector('.input');
let agregar = document.querySelector('.boton-agregar');
let container = document.querySelector('.container');
let lock = document.querySelectorAll('.botonEditar')

//Creando clase Item 
class Item {
    constructor(nuevaTarea) {
        this.crearDiv(nuevaTarea);
    }
    crearDiv(tarea) {
        //Agregando DIV
        const divnuevo = document.createElement('div')
        //Atributo del Div
        divnuevo.classList.add('new-div')
        //Atributos del input
        const createInput = document.createElement('input');
        createInput.setAttribute('type', 'text');
        createInput.setAttribute('disabled', 'true');
        createInput.classList.add('item-input');
        createInput.value = tarea;
        divnuevo.appendChild(createInput);
        container.appendChild(divnuevo);
        //Boton editar
        const botonEditar = document.createElement('botonEditar');
        botonEditar.classList.add('botonEditar');
        botonEditar.innerHTML = '<i class="fa-solid fa-lock"></i>';
        divnuevo.appendChild(botonEditar);
        container.appendChild(divnuevo);
        botonEditar.addEventListener('click', function () {
        })
        //Boton remover
        const botonRemover = document.createElement('botonRemover');
        botonRemover.classList.add('botonRemover');
        botonRemover.innerHTML = '<i class="fa-solid fa-trash"></i>';
        divnuevo.appendChild(botonRemover);
        container.appendChild(divnuevo);
        botonRemover.addEventListener('click', function () {
            this.parentNode.remove()
        })
        //Editar y agregar icono candado abierto.
        botonEditar.addEventListener('click', function () {
            if (createInput.disabled) {
                createInput.disabled = false
                botonEditar.innerHTML = "<i class='fa-solid fa-lock-open'></i>"
            }
            else {
                createInput.disabled = true
                botonEditar.innerHTML = '<i class="fa-solid fa-lock"></i>'
            }
        })
    }
}
//Funcionalidad boton agregar y chequear Input
agregar.addEventListener('click', chequearInput) 
    function chequearInput() {
    if (input.value === ('')) {
    } else {
        let x = new Item(input.value)
        input.value = ''
    }
}
