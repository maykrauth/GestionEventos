const form = document.getElementById("formulario")

console.log(form)

//evitar el comportamiento por defecto 

form.addEventListener("submit", evento => {
    console.log(evento)
    evento.preventDefault()
})