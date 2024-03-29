/**
 * Codigo html, css, js realizado 100% por mi persona
 * El diseño fue inspirado por diversas plantillas
 * abel_silva27@hotmail.com
 **/
$(document).ready(function(){

    //====================START HEADER & NAV==========// 
    $(".menu").click(function(){
       abrir_menu();
    });
    var abrir_menu=function(){
        $(".header-right").slideToggle(200)
    };

    if(window.innerWidth<960){
        $(".header-right").hide();
    };

    $(window).on("resize",function(){
        if(window.innerWidth>=960){
            $(".header-right").show();
            $(".menu").hide();
        }else{
            $(".header-right").hide();
            $(".menu").show()
        };
    });
    //====================END HEADER & NAV==========// 

    //====================START SKILLS==========//
    var porcentaje=document.querySelectorAll(".skills-before");
    $(window).scroll(function () { 
      var vph=$(window).height() - 100;
      var cambio;
      if (scrollY>=$(".skills-conteiner-grid").offset().top - vph) {
        for (var i = 0; i < porcentaje.length; i++) {
            cambio = porcentaje[i].innerHTML;
            document.querySelectorAll(".skills-after")[i].style.width=cambio;
            document.querySelectorAll(".skills-before")[i].style.marginLeft=cambio;
            document.querySelectorAll(".skills-before")[i].style.transform="translateX(-50%)"
        };
      }
    });
    //====================END SKILLS==========//

    //====================START PORTFOLIO CLICK==========//
    document.querySelectorAll(".portfolio-category")[0].classList.add("category-click");


    $(".portfolio-category").click(function(){
       navFocus($(this));

       $(".portfolio-img-grid-category figure").hide();    
       for (var i = 0; i < $(".portfolio-img-grid-category figure").length; i++) {
           if (document.querySelectorAll(".portfolio-img-grid-category figure")[i].attributes.category.value==$(this).attr("category")) {  
            document.querySelectorAll(".portfolio-img-grid-category figure")[i].style.display="block";
           } 
       }
    });

    document.querySelectorAll(".portfolio-category")[0].addEventListener("click",function(){
        $(".portfolio-img-grid-category figure").show();
    });
    //====================END PORTFOLIO CLICK==========//
    //====================START PORTFOLIO COLOR==========//
    var navFocus=function(e){
        $(".portfolio-category").removeClass("category-click");
        e.addClass("category-click");
    };
   //====================END PORTFOLIO COLOR==========//
    //====================START PORTFOLIO CATEGORY==========//
    var categoria=function(){
        
    } 
    //====================END PORTFOLIO CATEGORY==========//

});
