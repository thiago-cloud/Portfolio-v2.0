document.addEventListener("onRouterFinished-About", () => {
    document.querySelector('#toggle-details').addEventListener('click', function() {
    const details = document.getElementById('details');
    
    if (details.style.display === 'block') {
        details.style.display = 'none';
        this.textContent = 'Experiências';
    } else {
        details.style.display = 'block';
        this.textContent = 'Esconder';
        details.classList.add('visivel')
    }
    });
})