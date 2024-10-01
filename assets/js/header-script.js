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

    //btn mobile
    const menuMobile = document.getElementById('menu-mobile')
    const clickFora = document.getElementById('menu-mobile')

    const btnMenu = document.getElementById('btn-menu')

    btnMenu.addEventListener('click', function(){
        menuMobile.classList.toggle('abrir')
    })

    const titulo = document.querySelector('.digitando');
}

 //Animação do botão mobile
function animar(){
    const btn = document.getElementById('btn-menu')
    btn.classList.toggle('ativar')
}


