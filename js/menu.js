let btn = document.querySelector(".mob_items");
btn.addEventListener( "click", function () {
    const Attribute = btn.getAttribute("data-user");
        if (Attribute === "close")
            { 
                btn.removeAttribute("data-user");
                btn.setAttribute("data-user", "open");
            } else {
                     btn.removeAttribute("data-user");
                     btn.setAttribute("data-user", "close");
                    }
    
});