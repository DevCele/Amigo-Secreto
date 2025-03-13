let amigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();
    
    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }
    
    amigos.push(nombre);
    actualizarListaAmigos();
    inputAmigo.value = '';
}

function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    
    for (let i = 0; i < amigos.length; i++) {
        const nuevoAmigo = document.createElement('li');
        nuevoAmigo.textContent = amigos[i];
        lista.appendChild(nuevoAmigo);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos para sortear.');
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Tu amigo secreto es: ${amigoSorteado}</li>`;
}

// Agregar esta función para manejar el evento de presionar teclas
document.addEventListener('DOMContentLoaded', function() {
    const inputAmigo = document.getElementById('amigo');
    
    // Agregar evento de tecla para el input
    inputAmigo.addEventListener('keypress', function(event) {
        // Verificar si la tecla presionada es Enter (código 13)
        if (event.key === 'Enter') {
            // Prevenir el comportamiento predeterminado del formulario
            event.preventDefault();
            // Llamar a la función para agregar amigo
            agregarAmigo();
        }
    });
});