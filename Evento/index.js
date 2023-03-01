const hText = document.getElementById("h-text")

console.log(hText)

//vincular el texto 
hText.addEventListener("cambioTexto", evento =>{
    console.log(evento.detail)
    hText.innerText = evento.detail.texto
    hText.style.color= evento.detail.color
})

function cambiarTexto(nuevoTexto, color){
    const evento = new CustomEvent("cambioTexto", {
        detail:{
            texto: nuevoTexto,
            color
        }
    })
    hText.dispatchEvent(evento)
}