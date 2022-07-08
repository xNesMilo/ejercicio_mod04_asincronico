//Elementos HTML
const input = document.querySelector('.input');
const agregar = document.querySelector('.boton-agregar');
const container = document.querySelector('#container');
const lock = document.querySelectorAll('.boton-editar')

//Creando clase Item 
class Item {
    constructor(nuevaTarea) {
        this.crearDiv(nuevaTarea);
    }
    crearDiv(tarea) {
        //Agregando DIV
        const divnuevo = document.createElement('div')
        //Atributo del Div
        divnuevo.classList.add('item')
        //Atributos del input
        const createInput = document.createElement('input');
        createInput.setAttribute('type', 'text');
        createInput.setAttribute('disabled', 'true');
        createInput.classList.add('item-input');
        createInput.value = tarea;
        divnuevo.appendChild(createInput);
        container.appendChild(divnuevo);
        //Boton editar
        const botonEditar = document.createElement('boton-editar');
        botonEditar.classList.add('boton-editar');
        botonEditar.innerHTML = '<i class="fa-solid fa-lock"></i>';
        divnuevo.appendChild(botonEditar);
        container.appendChild(divnuevo);
        botonEditar.addEventListener('click', function () {
        })
        //Boton remover
        const botonRemover = document.createElement('boton-remover');
        botonRemover.classList.add('boton-remover');
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
//Funcionalidad boton agregar y chequear Input. Se agrega trim.
agregar.addEventListener('click', chequearInput)

//Funcion para agregar el texto presionando ENTER
input.addEventListener ('keyup', function (event) {
    if (event.keyCode == 13) {
        chequearInput()
    }
})
//Chequear INPUT
function chequearInput() {
    if (input.value.trim() === ('')) {
    } else {
        const x = new Item(input.value)
        input.value = ''
    }
}

