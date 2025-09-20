// Toggle mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Form validation example for contact page
const contactForm = document.querySelector('#contactForm');
if(contactForm){
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;
        if(name && email && message){
            alert('Message sent successfully!');
            contactForm.reset();
        } else {
            alert('Please fill all fields.');
        }
    });
}
