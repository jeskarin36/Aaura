/*
window.sr = ScrollReveal();

sr.reveal('.contenedor-head',{
    duration: 2000,
    origin:"bottom",
    distance: "-100px"
})


sr.reveal('.big-img',{
    duration: 2000,
    origin:"bottom",
    distance: "-100px"
})


sr.reveal('.contenedor-busqueda',{
    duration: 2000,
    origin:"bottom",
    distance: "-100px"
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

*/

    


let array=["url('./Img/photo-1565958011703-44f9829ba187.jpeg')","url('./Img/photo-1562967914-608f82629710.jpeg')","url('./Img/photo-1561758033-d89a9ad46330 (1).jpeg')","url('./Img/photo-1562036409-9dcc48472e29.jpeg')","url('./Img/photo-1473093295043-cdd812d0e601.jpeg')"];

let texto=["Perfect for breakfast","8 Easy Instant Pot Recipes","Flat Irons Skillet Potatoes","Pickled Summer Vegetables", "The Best Spaghetti Meat Sauce"]

  
 
 let bigimg=document.querySelector(".big-img");
 let titulo=document.querySelector("#titulo");
 /*
 bigimg.style.backgroundImage=array[0];
 */
 let i=0;



 seccionatras=document.querySelector(".seccion-menu-bloque-2-atras");
 seccionsiguiente=document.querySelector(".seccion-menu-bloque-2-siguiente");

 seccionatras.addEventListener("click",(e)=>{
    e.preventDefault();
    if(i>0 && i<=5){
        i--;
    }
    else{
        i=4;
    }
    bigimg.style.backgroundImage=array[i];
    titulo.innerHTML=texto[i];
    
 })

 
 seccionsiguiente.addEventListener("click",(e)=>{
    e.preventDefault();
    if(i<4){
        i++;
    }else{
        i=0;
    }
    bigimg.style.backgroundImage=array[i];
    titulo.innerHTML=texto[i];
  
 })





let seccion2 = document.querySelector(".seccion2")// terget class or id
 // hear is  scroll logic
window.addEventListener('scroll', () => {
    
   if( window.scrollY >1990 ){
    seccion2.classList.add("fixed") 
   }else{
    seccion2.classList.remove("fixed")
   }
   if( window.scrollY >2890 ){
    seccion2.classList.remove("fixed") 
   }

})
