"use strict"

// Menu burger
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



// Animation when scrolling pages
const callback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add("anim-active");
            }, 100);
        } else if (entry.target.classList.contains("anim-repeat")) {
            entry.target.classList.remove("anim-active");
        }
    })
};

const options = {
    threshold: 0.5
};

const observer = new IntersectionObserver(callback, options);

const targets = document.querySelectorAll(".anim-item");
targets.forEach((target) => {
    console.log(target);
    observer.observe(target);
})