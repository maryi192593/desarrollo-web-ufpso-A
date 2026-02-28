const fomulario = document.getElementById("formulario");
const inputTarea= document.getElementById("tarea");
const lista = document.getElementById("lista");
const contador = document.getElementById("contador");
let totalTareas= 0;
//evento sumut

formulario.addEventlistener("sumit", function (event){
    event.preventDefaul();
    const texto = inputTarea.Value.trim();
    if(texto === "") {
        alert("por favor escribe una tarea");
        return;
    }
     agregarTarea (texto);
     inputTarea.value= "";
        
    })
    function agregarTarea(texto){
        const li = document.getElementById("li");
        li.textContent = texto;

        const botonEliminar = document.getElementById("buton");
        botonEliminar.textContent = "eliminar";
        botonEliminar.classList.add("eliminar");

        botonEliminar.addEventListener("click",
            function(){
                lista.removeChild(li);
                totalTareas--;
                actualizarContador();
            });

            li.appendChild(botonEliminar);
            lista.appendChild(li);
            totalTareas++;
            actualizarContador();

    }
    function actualizarContador(){
        contador.textContent= totalTareas;
    }