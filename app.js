// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
const amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim(); // Elimina espacios al inicio y al final

    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    amigos.push(nombre); // Agrega el nombre al array
    actualizarListaAmigos(); // Actualiza la lista visible
    input.value = ''; // Limpia el campo de texto
    input.focus(); // Coloca el cursor en el campo de texto
}

// Función para actualizar la lista visible de amigos
function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpia el contenido actual

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;

        // Botón para eliminar un amigo de la lista
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = ' ❌ ';
        botonEliminar.className = 'button-delete';
        botonEliminar.onclick = () => eliminarAmigo(index);

        li.appendChild(botonEliminar);
        lista.appendChild(li);
    });
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    amigos.splice(index, 1); // Elimina el elemento en la posición index
    actualizarListaAmigos();
}

// Función para realizar el sorteo del amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('La lista está vacía. Por favor, agrega nombres antes de realizar el sorteo.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];

    mostrarResultado(amigoSeleccionado);
}

// Función para mostrar el resultado del sorteo
function mostrarResultado(amigo) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpia resultados anteriores

    const li = document.createElement('li');
    li.textContent = `🎉 El amigo secreto es: ${amigo} 🎉`;
    resultado.appendChild(li);
}