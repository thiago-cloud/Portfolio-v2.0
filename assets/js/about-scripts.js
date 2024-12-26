document.addEventListener("onRouterFinished-About", () => {

    const toggleButton = document.getElementById('toggle-details');
    const details = document.getElementById('details');

    toggleButton.addEventListener('click', function () {
        
        if (details.classList.contains('visible')) {
            
            details.style.maxHeight = "0"; // Recolhe o conteúdo
            setTimeout(() => {
                details.classList.remove('visible'); // Oculta após a animação
                details.style.display = "none";
            }, 500); // Tempo correspondente à transição
            this.textContent = 'Experiências';
            this.style.padding = "12px 15.38%";

        } else {

            details.style.display = "block"; // Exibe o conteúdo
            setTimeout(() => {
                details.classList.add('visible'); // Expande após exibir
                details.style.maxHeight = "500vh";
            }, 10); // Delay mínimo para ativar a transição
            this.textContent = 'Esconder';
            this.style.padding = "12px 16.7%";

        }
    });

})