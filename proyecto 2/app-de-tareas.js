
       const formulario = document.getElementById("formulario");
const inputTarea = document.getElementById("tarea");
const lista = document.getElementById("lista");
const contador = document.getElementById("contador");
let totalTareas = 0;


formulario.addEventListener("submit", function (event) {
    event.preventDefault(); 
    
    const texto = inputTarea.value.trim();
    if (texto === "") {
        alert("Por favor escribe una tarea");
        return;
    }
    
    agregarTarea(texto);
    inputTarea.value = ""; 
});

function agregarTarea(texto) {
    
    const li = document.createElement("li"); 
    li.textContent = texto + " ";

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.classList.add("eliminar");

    botonEliminar.addEventListener("click", function () {
        lista.removeChild(li);
        totalTareas--;
        actualizarContador();
    });

    li.appendChild(botonEliminar);
    lista.appendChild(li);
    
    totalTareas++;
    actualizarContador();
}

function actualizarContador() {
    contador.textContent = totalTareas;
}
