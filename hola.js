const agrandar= document.querySelectorAll(".producto");

agrandar.addEventListener("click", cambiar);

function cambiar(){
    agrandar.classList.add("active")
}