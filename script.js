// Jogo: Adivinhe o Número
let randomNumber = Math.floor(Math.random() * 100) + 1;
let score = 0;

document.getElementById('check').addEventListener('click', function() {
    const guess = Number(document.getElementById('guess').value);
    const result = document.getElementById('result');

    if (guess === randomNumber) {
        result.textContent = 'Parabéns! Você acertou!';
        score++;
        randomNumber = Math.floor(Math.random() * 100) + 1;
    } else if (guess > randomNumber) {
        result.textContent = 'Tente um número menor!';
    } else {
        result.textContent = 'Tente um número maior!';
    }

    document.getElementById('score').textContent = 'Pontuação: ' + score;
});

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
    formMessages