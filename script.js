// Mudar cor do fundo aleatoriamente
document.getElementById('colorButton').addEventListener('click', function() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FFFF33', '#FF33A8'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

// Enviar formulário e exibir mensagem
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const formMessages = document.getElementById('form-messages');
    formMessages.textContent = 'Mensagem enviada! Obrigado por entrar em contato.';
    formMessages.style.color = 'green';
    
    setTimeout(() => {
        formMessages.textContent = '';
    }, 5000);
});

// Animações de Scroll
ScrollReveal().reveal('.fade-in', { delay: 200 });
ScrollReveal().reveal('.slide-up', { delay: 400 });
ScrollReveal().reveal('.zoom-in', { delay: 600 });
