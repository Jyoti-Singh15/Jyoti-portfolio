// ===== Toggle navigation menu for mobile devices =====
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('nav__menu--visible');
});


// ===== Popup (Contact Us) =====
const contactBtn = document.getElementById("contact-btn");
const popup = document.getElementById("popup");
const closePopupBtn = document.getElementById("close-popup");

// Show popup
contactBtn.addEventListener("click", () => {
    popup.style.display = "block";
    document.body.style.overflow = "hidden";
});

// Close popup
closePopupBtn.addEventListener("click", () => {
    popup.style.display = "none";
    document.body.style.overflow = "auto";
});

// Close popup on outside click
window.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
        document.body.style.overflow = "auto";
    }
});

// Close popup with Escape key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && popup.style.display === "block") {
        popup.style.display = "none";
        document.body.style.overflow = "auto";
    }
});


// ===== Smooth scrolling with offset for sticky nav =====
const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.startsWith("#")) {
            e.preventDefault();

            const target = document.querySelector(href);
            const headerOffset = 80; // Adjust this if header height changes
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Close nav on mobile if open
            if (navMenu.classList.contains('nav__menu--visible')) {
                navMenu.classList.remove('nav__menu--visible');
            }
        }
    });
});


// ===== Highlight active link on scroll (Scrollspy) =====
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
});


// ===== Reveal on scroll =====
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            el.classList.add('show');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);


// ===== Scroll to Top Button =====
const scrollTopBtn = document.createElement('button');
scrollTopBtn.textContent = '↑';
scrollTopBtn.classList.add('scroll-top');
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollTopBtn.classList.add('scroll-top--visible');
    } else {
        scrollTopBtn.classList.remove('scroll-top--visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
