//local Storage
localStorage.setItem("nombre", " Mayra")

localStorage.setItem("persona", JSON.stringify({
    nombre : "Rocio",
    apellido : "krauth",
    años: 25
}))
console.log(JSON.parse(localStorage.getItem("persona")))


// JSON.stringify -> convierte un objeto/array en un string 
// JSON.parse -> convierte un objeto/array convertido atraves de stringify en un objeto de javaScrip


//eliminar un item de local store
localStorage.removeItem("nombre")