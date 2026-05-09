// Carrossel
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function mudarSlide(direcao) {
    slides[slideIndex].classList.remove('active');
    slideIndex += direcao;
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    slides[slideIndex].classList.add('active');
}
setInterval(() => mudarSlide(1), 5000);

// Contador
function atualizarContador() {
    const inicio = new Date(2012, 0, 25); // AJUSTE AQUI: (Ano, Mês-1, Dia)
    const agora = new Date();
    const diff = agora - inicio;
    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById('tempo-juntos').innerHTML = 
        `Faz <strong>${dias.toLocaleString('pt-BR')}</strong> dias que tenho a sorte de te ter!`;
}
setInterval(atualizarContador, 1000);
atualizarContador();

// Efeito Corações
document.addEventListener('click', (e) => {
    const coracao = document.createElement('div');
    coracao.innerHTML = '❤️';
    coracao.className = 'coracao-clique';
    coracao.style.left = e.clientX + 'px';
    coracao.style.top = e.clientY + 'px';
    document.body.appendChild(coracao);
    setTimeout(() => coracao.remove(), 1500);
});