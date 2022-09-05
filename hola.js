const agrandar= document.querySelector(".container-carrusel");

agrandar.addEventListener("click", cambiar);

function cambiar(){
    agrandar.classList.add("active")
}