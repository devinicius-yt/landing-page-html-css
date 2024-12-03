document.getElementById('cta-button').addEventListener('click', () => {
    alert('Thank you for showing interest!');
});

document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
});