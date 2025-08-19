//smoth scrolling
document.querySelectorAll('a[href^="#"]').forEach
(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({behavior: 'smooth'
        });
    });
});

//navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    window.scrollY > 50 ?
        navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.98)' : navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
});

//emailjs
(function() {
    emailjs.init("-PTLLIljpXlmE6pCA"); 
})();

const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
        formMessage.textContent = "Por favor, preencha todos os campos!";
        formMessage.style.color = "red";
        return;
    }

    // Envia pelo EmailJS
    emailjs.send("service_4kfwakw", "contact_form", {
        name: name,
        email: email,
        message: message,
        time: new Date().toLocaleString()
    })
    .then(() => {
        formMessage.textContent = "Mensagem enviada com sucesso!";
        formMessage.style.color = "green";
        form.reset();
    })
    .catch((error) => {
        console.error("Erro ao enviar mensagem:", error);
        formMessage.textContent = "Ocorreu um erro. Tente novamente.";
        formMessage.style.color = "red";
    });
});
