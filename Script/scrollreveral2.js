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








let seccion2 = document.querySelector(".seccion2")// terget class or id
 // hear is  scroll logic
window.addEventListener('scroll', () => {
    window.scrollY >560 ? seccion2.classList.add("fixed") : seccion2.classList.remove("fixed")
})





const seccion =document.querySelector(".seccion-post-coment");
const pi= document.querySelector(".pie");
const btn= document.querySelector(".bton");
const borde= document.querySelector(".seccion-post-comments")
const se= document.querySelector(".seccion2")

const textarea= document.querySelector(".input");
textarea.addEventListener("click",()=>{
    seccion.classList.add("dd");
    pi.classList.add("pp")
    textarea.style.height="240px";
    btn.classList.remove("bton");
    btn.classList.add("btn")
    borde.classList.add("bb")
    se.classList.add("p")
    console.log("hila")
})