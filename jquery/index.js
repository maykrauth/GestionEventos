/*JQuery 
$(selector).acción()
$("li").hide(ocultar)

para utilizar la libreria correctamente debemos agregar una funcion 
*/
$(document).ready(() =>{
    $(".hide-btn").click(()=>{
        $("h1").hide()
    })
    $(".show-btn").click(() =>{
        $("h1").fadeIn()
    })

    $("li").click(() =>{
        $("h1").css({ color: "blue"})
    })
    $(".new-element").click(() =>{
        $("ul").append("<li>New Element</li>")
    })
    $("li").mouseenter((elem) => {
        elem.target.style.color = "red"
    })

    $("li").mouseleave(elem =>{
        elem.target.style.color = "black"
    })
})

//forma simplificada $(() =>{  function })
//mas sutil hide show hide = fadeOut(), show =fadeIn()
//docle click dbl
//prepend new.element aparezca arriba