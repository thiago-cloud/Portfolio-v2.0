
class Header extends HTMLElement{
    
    connectedCallback(){
        const headerComponent = ` 
            <header>
                <nav>
                    <a href="/#home" class="titulo-principal"><img src="../../../assets/images/logo/AscendCode-logo.png" alt=""></a>
                    <ul class="navegacao-primaria">
                        <li><a href="/#home">Home</a></li>
                        <li><a href="/#projects">Projetos</a></li>
                        <li><a href="/#about">Sobre</a></li>
                        <li><a href="/#contacts">Contato</a></li>
                    </ul>
                    <!--Tema claro Escuro-->
                    <div>
                        <input type="checkbox" class="checkbox" id="chk">
                        <label class="label" for="chk"><!--O for faz um link entre a label e o input no caso aki toda vez que aciono a label também aciono o input-->
                            <i class="fa-regular fa-moon"></i>
                            <i class="fa-regular fa-sun"></i>
                            <div class="ball"></div>
                        </label>
                    </div>
                </nav>
                <!--head Mobile-->
                <div class="head-mobile">
                    <a href="/#home" class="titulo-mobile" >
                        <img class="logoAscendCode" src="../../../assets/images/logo/AscendCode-logo.png" alt="logo AscendCode">
                    </a>
                    <button onclick="animar()" class="btn-menu" id="btn-menu">
                        <span class="linha"></span>
                        <span class="linha"></span>
                        <span class="linha"></span>
                    </button>
                    <div class="claroEscuro">
                        <input type="checkbox" class="checkbox-mobile" id="chk-mobile">
                        <label class="label" for="chk-mobile"><!--O for faz um link entre a label e o input no caso aki toda vez que aciono a label também aciono o input-->
                            <i class="fa-regular fa-moon"></i>
                            <i class="fa-regular fa-sun"></i>
                            <div class="ball"></div>
                        </label>
                    </div>
                </div>
                <div class="menu-mobile" id="menu-mobile">
                    <a href="/#home">Home</a>
                    <a href="/#projects">Projetos</a>
                    <a href="/#about">Sobre</a>
                    <a href="/#contacts">Contato</a>  
                </div>
            </header>
        `
        this.innerHTML = headerComponent
           
    }
    
}
customElements.define('default-header',Header)
