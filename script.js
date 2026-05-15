const serviceButtons = document.querySelectorAll('.wybierz-usluge');
const serviceSelect = document.getElementById('service');

serviceButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selectedService = button.getAttribute('data-service');
    if (serviceSelect) {
      serviceSelect.value = selectedService;
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    }
  });
});

(() => {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', event => {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      alert('formularz wygląda poprawnie — teraz możesz podpiąć wysyłkę maila albo backend.');
    }

    form.classList.add('was-validated');
  });
})();