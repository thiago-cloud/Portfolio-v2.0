class Footer extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <footer>
                <div class="titulo-footer">
                    <h1><span>Web</span>Developer</h1>
                    <p>"Se cheguei até aqui foi porque me apoiei no ombro dos gigantes."</p>
                    <p>Isaac Newton.</p>
                </div>
                <div class="sobre-info">
                    <ul>
                        <li title="Github"><a href="https://github.com/thiago-cloud"><i style="color:#f05539;" class="fa-brands fa-github"></i></a></li>
                        <li title="Whatsapp"><a href="https://web.whatsapp.com/send?phone=5581987531748" target="_blank"><i style="color: #25D366" class="fa-brands fa-whatsapp"></i></a></li>
                        <li title="Email"><a href="mailto:thiago.al154@gmail.com"><i style="color:#DB4437" class="fa-regular fa-envelope"></i></a></li>
                        <li title="Linkedin"><a href="https://linkedin.com/in/thiago-alves-74927a241"><i style="color:#0E76A8;" class="fa-brands fa-linkedin"></i></a></li>
                    </ul>
                </div>
                <p class="reservados">Todos os direitos reservados - AscendCode © - 2024</p>
            </footer>
        `
    }
}
customElements.define('default-footer', Footer)
