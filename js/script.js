/* =========================================
   GLOBAL: MOBILE MENU
   ========================================= */
function toggleMenu() {
    const nav = document.querySelector('.nav-menu');
    if (nav.style.display === 'flex') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.position = 'absolute';
        nav.style.top = '70px';
        nav.style.left = '0';
        nav.style.width = '100%';
        nav.style.background = '#580808';
        nav.style.padding = '20px';
        nav.style.zIndex = '999';
    }
}

/* =========================================
   HOMEPAGE: HERO SLIDER
   ========================================= */
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const slideInterval = 5000;

function goToSlide(index) {
    if (slides.length === 0) return; // Guard clause if not on homepage
    
    slides[currentSlide].classList.remove('active');
    if(dots.length > 0) dots[currentSlide].classList.remove('active-dot');
    
    currentSlide = (index + slides.length) % slides.length;
    
    slides[currentSlide].classList.add('active');
    if(dots.length > 0) dots[currentSlide].classList.add('active-dot');
}

function nextSlide() {
    goToSlide(currentSlide + 1);
}

// Initialize Slider if elements exist
if (slides.length > 0) {
    setInterval(nextSlide, slideInterval);
}

/* =========================================
   PRODUCT PAGE: IMAGE & SIZE SELECTION
   ========================================= */
let selectedSize = 'Small (0-2 No.)';

function changeImage(thumb, src) {
    const mainImg = document.getElementById('mainImg');
    if (mainImg) {
        mainImg.src = src;
        document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
    }
}

function selectSize(btn, size) {
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    selectedSize = size;
}

/* =========================================
   CART & ORDER LOGIC
   ========================================= */
function addToCart() {
    const countBadge = document.querySelector('.cart-count');
    if (countBadge) {
        let count = parseInt(countBadge.innerText);
        countBadge.innerText = count + 1;
        alert("Item added to cart! (Demo)");
    }
}

function orderWhatsApp() {
    const phone = "918000933720"; // Replace with your actual number
    const msg = `Namaste ANLOCKS Team,%0a%0aI want to buy: Janmashtami Special Complete Set%0aSize: ${selectedSize}%0aPrice: ₹1,499%0a%0aPlease confirm my address for COD.`;
    window.open(`https://wa.me/${phone}?text=${msg}`, '_blank');
}
