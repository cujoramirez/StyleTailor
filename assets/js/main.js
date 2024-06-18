/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                        : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== SWIPER PRODUCTS ===============*/ 
const swiperProducts = new Swiper('.products__swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
    
  })

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 8,
                sectionId = current.getAttribute('id'),
                sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
    //reset: true,
})

sr.reveal('.home__data, .products__data3, .footer__container, .img-responsive')
sr.reveal('.home__circle, .home__img', {delay: 600, scale: .5})
sr.reveal('.home__food-1, .home__food-2, .home__food-3', {delay: 1000, interval: 100} )
sr.reveal('.home__food-4', {delay: 1200})
sr.reveal(' .home__food-5, .home__food-6', {delay:1400, interval: 100})
sr.reveal('.recipes__img, .contact__img, .about__img, .products__data1', {origin: 'left'})
sr.reveal('.recipes__list, .contact__data, .about__data, .products__data2', {origin: 'right'})
sr.reveal('.banner__item, .products2__card', {interval: 100})


/*=============== CONTACT US VALIDATION ===============*/
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    function validateEmail(email) {
        const validDomains = ['gmail', 'yahoo', 'outlook', 'hotmail'];
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!re.test(email)) {
            return false;
        }
        const domain = email.split('@')[1].split('.')[0];
        return validDomains.includes(domain) && email.endsWith('.com');
    }

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!firstName || !lastName || !email || !phone || !message) {
        alert('All fields are required.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address from "gmail", "yahoo", etc., ending with ".com".');
        return;
    }

    if (!validatePhone(phone)) {
        alert('Please enter a valid phone number.');
        return;
    }

    showPopup('Message sent!');
});



document.getElementById('phone').addEventListener('input', function(event) {
    this.value = this.value.replace(/\D/g, '');
});


function validatePhone(phone) {
    const re = /^\d{10}$/;
    return re.test(phone);
}

function showPopup(message) {
    const popup = document.createElement('div');
    popup.innerText = message;
    popup.className = 'popup';
    document.body.appendChild(popup);

    setTimeout(() => {
        popup.remove();
    }, 2000);
}

/*=============SCROLL===============*/
document.addEventListener("DOMContentLoaded", function() {
    const hash = window.location.hash;
    if (hash) {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        // Scroll instantly without animation
        targetElement.scrollIntoView({ behavior: "auto", block: "start" });
      }
    }
  });

  const image = new Image();
  image.src = "image.jpg";
  
  document.body.appendChild(image);



  document.getElementById('upload-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file && file.type === 'image/png') {
      const reader = new FileReader();
      reader.onload = function(e) {
        const imagePreview = document.getElementById('image-preview');
        imagePreview.src = e.target.result;
        imagePreview.style.display = 'block';
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please upload a valid PNG file.');
    }
  });


  const loginStatus = localStorage.getItem('loggedIn');
    const loginStatusDiv = document.getElementById('login-status');

    if (loginStatus === 'true') {
      loginStatusDiv.textContent = 'You are logged in.';
      loginStatusDiv.style.color = 'green';
    } else {
      loginStatusDiv.textContent = 'You are not logged in.';
      loginStatusDiv.style.color = 'red';
    }

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way
      
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const formMessage = document.getElementById('formMessage');
      
        if (validateEmail(email) && validatePassword(password)) {
          // Simulate a login process
          formMessage.textContent = 'Logging in...';
          formMessage.style.color = 'green';
          formMessage.style.display = 'block';
      
          // Store login status in localStorage
          localStorage.setItem('loggedIn', 'true');
      
          // Redirect to another page after a short delay
          setTimeout(() => {
            window.location.href = 'dashboard.html'; // Replace with your target page
          }, 2000);
        } else {
          formMessage.textContent = 'Invalid email or password. Please try again.';
          formMessage.style.display = 'block';
        }
      });
      
      function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
      }
      
      function validatePassword(password) {
        return password.length >= 6; // Simple password validation (minimum 6 characters)
      }

      document.addEventListener('DOMContentLoaded', function() {
        const loginButton = document.getElementById('loginButton');
        const loginStatus = localStorage.getItem('loggedIn');
      
        if (loginStatus === 'true') {
          loginButton.textContent = 'LOGGED IN';
          loginButton.href = 'loginPage.html'; // Optionally, redirect to dashboard or another page
        } else {
          loginButton.textContent = 'Log in / Sign up';
          loginButton.href = 'loginPage.html';
        }
      });

// Example: Load JSON data from a file
fetch('polotno.json')
.then(response => response.json())
.then(data => {
  // Initialize Polotno with the loaded JSON data
  const polotno = new window.Polotno({
    container: document.getElementById('polotno-container'), // Container element in your HTML
    toolbarContainer: document.getElementById('polotno-toolbar'), // Optional: Toolbar container
  });
  
  // Load the design from JSON data
  polotno.loadFromJSON(data);
})
.catch(error => console.error('Error loading JSON:', error));

      
      




