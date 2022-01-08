window.sr = ScrollReveal();

sr.reveal('.contenedor-head',{
    duration: 2000,
    origin:"bottom",
    distance: "-100px"
})

sr.reveal('.contenedor-busqueda',{
    duration: 2000,
    origin:"bottom",
    distance: "50px"
})
sr.reveal('.publicidad',{
    duration: 2000,
    origin:"bottom",
    distance: "50px"
})

sr.reveal('.seccion',{
    duration: 2000,
    origin:"bottom",
    distance: "50px"
})

sr.reveal('.seccion2',{
    duration: 2000,
    origin:"bottom",
    distance: "50px"
})



sr.reveal('.ani1',{
    duration: 2000,
    origin:"bottom",
    distance: "50px"
})

sr.reveal('.ani2',{
    duration: 2000,
    origin:"bottom",
    distance: "50px"
})



let seccion2 = document.querySelector(".seccion2")// terget class or id
 // hear is  scroll logic
window.addEventListener('scroll', () => {
    window.scrollY >450 ? seccion2.classList.add("fixed") : seccion2.classList.remove("fixed")
})



