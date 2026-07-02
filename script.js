const galleryItems = document.querySelectorAll('.gallery-item');

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close-btn');

galleryItems.forEach(item => {

    item.addEventListener('click', () => {

        lightbox.style.display = 'flex';

        lightboxImg.src = item.src;

        lightboxImg.alt = item.alt;

    });

});

closeBtn.addEventListener('click', () => {

    lightbox.style.display = 'none';

});

lightbox.addEventListener('click', (e) => {

    if (e.target === lightbox) {

        lightbox.style.display = 'none';

    }

});

document.addEventListener('keydown', (e) => {

    if (e.key === 'Escape') {

        lightbox.style.display = 'none';

    }

});

/* =========================
   STAGGER SCROLL REVEAL
========================= */

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const delay =
                entry.target.dataset.delay || 0;

            setTimeout(()=>{

                entry.target.classList.add("active");

            },delay);

        }

    });

},{
    threshold:0.15
});

reveals.forEach(item=>{

    observer.observe(item);

});

/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

/* =========================
   ANIMATED COUNTER
========================= */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const counter = entry.target;

            const target = +counter.dataset.target;

            let current = 0;

            const increment = Math.ceil(target / 50);

            const updateCounter = ()=>{

                current += increment;

                if(current >= target){

                    counter.innerText = target + "+";

                }else{

                    counter.innerText = current;

                    requestAnimationFrame(updateCounter);

                }

            }

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

},{
    threshold:.6
});

counters.forEach(counter=>{

    counterObserver.observe(counter);

});

/* =========================
   LOADING SCREEN
========================= */

window.addEventListener("load",()=>{

    const loader=document.getElementById("loader");

    setTimeout(()=>{

        loader.classList.add("hidden");

    },1600);

});