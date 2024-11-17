// script.js

// Funkce pro otevření a zavření mobilního menu
const menuIcon = document.getElementById('menu-icon');
const mobileMenu = document.getElementById('mobile-menu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a'); // Odkazy v mobilním menu

// Otevření a zavření menu při kliknutí na ikonu
menuIcon.addEventListener('click', () => {
    if (mobileMenu.style.left === '0px') {
        mobileMenu.style.left = '-100%'; // Zavřít menu
    } else {
        mobileMenu.style.left = '0'; // Otevřít menu
    }
});

// Funkce pro plynulý přechod na sekci
mobileNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Zabráníme standardnímu chování odkazu (přesměrování)

        const targetId = link.getAttribute('href').slice(1); // Získáme ID sekce z odkazu
        const targetSection = document.getElementById(targetId); // Najdeme cílovou sekci

        // Plynulý přechod na cílovou sekci
        window.scrollTo({
            top: targetSection.offsetTop - 50, // Upravíme pro posunutí stránky (pro lištu menu)
            behavior: 'smooth' // Plynulý přechod
        });

        // Zavření mobilního menu po kliknutí na odkaz
        mobileMenu.style.left = '-100%';
    });
});
