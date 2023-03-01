/* arrastrar elementos y soltar de una pag web
 */
const parrafo = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")

parrafo.forEach(parrafo =>{
    parrafo.addEventListener("dragstart", event=> {
        console.log("Estoy arrastrando el parrafo: " + parrafo.innerHTML)
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
        const elem_fantasma = document.querySelectorAll("imagen-fantasma")
        event.dataTransfer.setDragImage(elem_fantasma, 0, 0)
    })

    parrafo.addEventListener("dragend", () => {
        //console.log("He terminado de arrastrar")
        parrafo.classList.remove("dragging")
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault()
        //console.log("Drag Over")
        event.dataTransfer.dropEffect = "link"//copy por defecto 
    })

    seccion.addEventListener("drop", event => {
        console.log("Drop")
        const id_parrafo = event.dataTransfer.getData("id")
        //console.log("parrado id : ", id_parrafo)
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })
})