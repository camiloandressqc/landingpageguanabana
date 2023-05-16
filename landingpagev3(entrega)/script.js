// voy a agregar una funcion mas de interactividad para javascript,tambien tiene que ver con la libreria (link js)...
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    centeredSlides:true,
    loop:true,
    spaceBetween:30,
    grabCursor:true,
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-next'
    },
    breakpoints : {
        991: {
            slidesPerView: 2
        }
    }

});

//Funcion que captura datos desde un cuadro de texto de formulario 

function captura1(){
    var nombreenviado=document.getElementById("nomest").value;
    var emailenviado=document.getElementById("guardadoemail").value;
    // alert(nombreenviado);  PARA QUE SAQUE UN ALERT CON LOS DATOS.
    // mostrar en consola
    console.log(nombreenviado +" "+emailenviado);

    //en caso de que querramos que salte un error cuando se deje un espacio vacio creamos una condicional 
    if(nombreenviado==""){
        alert("el nombre es obligatorio");
    }
    if(emailenviado==""){
        alert("el email es obligatorio");
    }
    //instruccion focus para que el cursor,cuando estoy llenando datos se ubique
    document.getElementById("nomest").focus();

}





