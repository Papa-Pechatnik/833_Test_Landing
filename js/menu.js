// burger.active

let burger = document.querySelector(".burger");
console.log(burger.getAttribute("data-user"));

let btn = document.querySelector(".nav_mob");
btn.addEventListener( "click", function () {
    const Attribute = burger.getAttribute("data-user");
        if (Attribute === "close")
            { 
                burger.removeAttribute("data-user");
                burger.setAttribute("data-user", "open");
            } else {
                burger.removeAttribute("data-user");
                burger.setAttribute("data-user", "close");
                    }
    
});

// slider
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    autoplay: {
        delay: 3000,
      }
  });
