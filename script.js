const form = document.getElementById('contact-form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Successfully submitted the form!');
    form.reset();
});
