function dropdownFunction(){
    var a = document.getElementById("myDropdown");
    if(a.style.display === "block"){
        a.style.display = "none";
    }else{
        a.style.display = "block";
    }
}

// menu-icon
function menu_open(x) {
    var a = document.getElementById("menu-list");
    if(a.style.display === "block"){
     a.style.display = "none";
    }else{
     a.style.display = "block";
    }
    //  x.classList.toggle("change");
   }


//   Initialize Swiper 
  
      var swiper = new Swiper(".mySwiper", {
        loop: true,
    autoplay:{
        dealay: 2000,
    },
      });


      function link_hide(x) {
        if (x.matches) { // If media query matches
            document.getElementById("menu-list").style.display = "none";
       document.getElementById("header-section").style.opacity = "1";
       x.classList.toggle("change");
        } else {
         
        }
      }
      
      var x = window.matchMedia("(max-width: 990px)")
      myFunction(x) // Call listener function at run time
      x.addListener(myFunction)
    
   