// Botão "Fale com Especialista"
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', () => {
        window.open('https://wa.me/5511992593911', '_blank');
    });
});

// Pega o botão "Voltar ao Topo" pelo ID
const backToTopButton = document.getElementById('backToTop');

// Função para mostrar ou esconder o botão dependendo da rolagem
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
};

// Função para rolar suavemente ao topo
backToTopButton.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Comportamento suave para subir ao topo
    });
});
