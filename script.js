 // Ao clicar no botão Voltar ao Topo, rola a página para o topo
document.querySelector('.back-to-top-button').addEventListener('click', function(e) {
    e.preventDefault(); // Previne o comportamento padrão do link
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Rola suavemente para o topo
    });
});