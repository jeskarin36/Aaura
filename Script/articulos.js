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





  let array=["url('./img/photo-1562036409-9dcc48472e29.jpeg')","url('./img/photo-1562967914-608f82629710.jpeg')",
  "url('./img/photo-1565958011703-44f9829ba187.jpeg')","url('./img/photo-1561758033-d89a9ad46330 (1).jpeg')","url('./img/photo-1541832676-9b763b0239ab.jpeg')"];


 seccionmenu=document.querySelector(".big-img");
 
 i=0;



 seccionatras=document.querySelector(".seccion-menu-bloque-2-atras");
 seccionsiguiente=document.querySelector(".seccion-menu-bloque-2-siguiente");

 seccionatras.addEventListener("click",(e)=>{
    e.preventDefault();
    if(i>0 && i<=5){
        i--;
    }else{
        i=5;
    }
    seccionmenu.style.backgroundImage=array[i];
    
 })

 
 seccionsiguiente.addEventListener("click",(e)=>{
    e.preventDefault();
    if(i<5){
        i++;
    }else{
        i=0;
    }
    seccionmenu.style.backgroundImage=array[i];

  
 })



