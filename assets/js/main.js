"use strict"

function openMenu() {
    humbNav.classList.toggle("nav__list-box--active");
    humbBtn.classList.toggle("nav__humb-close");

    function checkClass () {
        if (!event.target.closest('nav')) {
            humbNav.classList.toggle("nav__list-box--active");
            humbBtn.classList.toggle("nav__humb-close");

            document.removeEventListener('click', checkClass);
        }
    }
    
    document.addEventListener('click', checkClass);
}

humbBtn.addEventListener("click", openMenu);

