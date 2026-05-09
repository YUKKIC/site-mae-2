// Controle do Carrossel
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function mudarSlide(direcao) {
    slides[slideIndex].classList.remove('active');
    slideIndex += direcao;
    
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    
    slides[slideIndex].classList.add('active');
}

// Troca automática a cada 5 segundos
setInterval(() => mudarSlide(1), 5000);

// Contador de Tempo
function atualizarContador() {
    // AJUSTE AQUI: Coloque sua data de nascimento (Ano, Mês-1, Dia)
    // Exemplo: 15 de Maio de 2005 -> new Date(2005, 4, 15)
    const inicio = new Date(2012, 1, 25); 
    const agora = new Date();
    const diff = agora - inicio;
    
    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    const elemento = document.getElementById('tempo-juntos');
    if (elemento) {
        elemento.innerHTML = `Faz <strong>${dias.toLocaleString('pt-BR')}</strong> dias que tenho a sorte de te ter!`;
    }
}

setInterval(atualizarContador, 1000);
atualizarContador();

// Efeito de Corações ao clicar
document.addEventListener('click', (e) => {
    const coracao = document.createElement('div');
    coracao.innerHTML = '❤️';
    coracao.className = 'coracao-clique';
    coracao.style.left = e.clientX + 'px';
    coracao.style.top = e.clientY + 'px';
    document.body.appendChild(coracao);
    
    setTimeout(() => {
        coracao.remove();
    }, 1500);
});