function onInitFunction() {
    //Tema claro Escuro
    const chk = document.getElementById('chk')

    chk.addEventListener('click',() => {
        document.body.classList.toggle('dark')
    })

    //Tema claro Escuro Mobile
    const chkMobile = document.getElementById('chk-mobile')

    chkMobile.addEventListener('click',() => {
        document.body.classList.toggle('dark')
    })

    //Menu moblie e btn mobile
    // Elementos do DOM
    const menuMobile = document.getElementById('menu-mobile');
    const btnMenu = document.getElementById('btn-menu');

    // Função para abrir/fechar o menu e alternar animação
    function toggleMenu() {
        menuMobile.classList.toggle('abrir');
        btnMenu.classList.toggle('ativar');
    }

    // Função para fechar o menu e remover animação
    function closeMenu() {
        menuMobile.classList.remove('abrir');
        btnMenu.classList.remove('ativar');
    }

    // Evento para abrir/fechar o menu ao clicar no botão
    btnMenu.addEventListener('click', toggleMenu);

    // Evento para fechar o menu ao clicar fora
    document.addEventListener('click', (event) => {
        if (!menuMobile.contains(event.target) && !btnMenu.contains(event.target)) {
            closeMenu();
        }
    });

    // Evento para fechar o menu ao clicar em um item do menu
    menuMobile.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') { // Verifica se clicou em um link
            closeMenu();
        }
    });
}


