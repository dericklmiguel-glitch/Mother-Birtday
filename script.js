document.addEventListener("DOMContentLoaded", () => {
    // 1. Efeito de corações flutuantes na seção de Introdução (Hero)
    const introSection = document.querySelector(".intro");
    
    if (introSection) {
        // Cria corações em intervalos regulares
        setInterval(() => {
            const coracao = document.createElement("span");
            coracao.innerHTML = "♥";
            coracao.classList.add("coracao-flutuante");
            
            // Posição horizontal aleatória
            const posicaoX = Math.random() * 100;
            // Tamanho aleatório para dar profundidade
            const tamanho = Math.random() * 20 + 10; 
            // Duração da animação aleatória (entre 3 e 6 segundos)
            const duracao = Math.random() * 3 + 3;
            // Opacidade aleatória
            const opacidade = Math.random() * 0.5 + 0.3;

            coracao.style.left = `${posicaoX}%`;
            coracao.style.fontSize = `${tamanho}px`;
            coracao.style.animationDuration = `${duracao}s`;
            coracao.style.opacity = opacidade;

            introSection.appendChild(coracao);

            // Remove o coração da tela depois que a animação terminar
            setTimeout(() => {
                coracao.remove();
            }, duracao * 1000);
        }, 450); // Cria um novo coração a cada 450 milissegundos
    }

    // 2. Efeito de Revelação Suave (Fade-In) ao rolar a página
    const elementosParaRevelar = document.querySelectorAll(
        ".versiculo-container, .descricao, .card-item"
    );

    const checarScroll = () => {
        const gatilhoDoScroll = (window.innerHeight / 5) * 4;

        elementosParaRevelar.forEach((elemento) => {
            const topoDoElemento = elemento.getBoundingClientRect().top;

            if (topoDoElemento < gatilhoDoScroll) {
                elemento.classList.add("revelado");
            }
        });
    };

    // Executa uma vez ao carregar para mostrar o que já está na tela e escuta o scroll do mouse
    checarScroll();
    window.addEventListener("scroll", checarScroll);
});