const button = document.querySelector("#btn")
const enviar = document.querySelector("#btn-2")


button.addEventListener("click", () =>{
    alert(" se ha hecho click")
})

enviar.addEventListener("click", () => {
    //and true se ejecutara console
    confirm("Estas de Acuerdo?") && console.log("Genial!!")
    //la mejor manera
    //confirm("Estas de acuerdo?")
    //     ? console.log("OK")
    //     : console.log ("NO!!!")
    //otra forma
    //const respuesta = confirm("seguro?")
    //if(respuesra){
    //  console.log("Estas de acuerdo!")
    //} else{
    //   consoel.log("No estas de acuerdo")
    //}
}) 


const buttoninf = document.querySelector("#info")
buttoninf.addEventListener(click, () =>{
    const name = prompt("¿Cual es tu nombre?")
    if (name) {
        console.log("Tu nombre es " + name)
    } else {
        console.log("No has introducido Nada")
    }
    
})

const list = [{
    nombre: "Mayra",
    edad:25
}, {
    nombre: "Luis",
    edad:50
}, {
    nombre: "Pedro",
    edad:30
}]
console.table(list)