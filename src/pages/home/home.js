
//Exportando esse template para outro lugar

export default () =>{
    const container = document.createElement('div')//Criando uma div para adicionar todo o template

    //Head
    document.title = "Home | Portfólio";

    const template = `
        <link rel="stylesheet" href="../../assets/css/home.css" type="text/css">
            <section araia-label="Seção curriculo download Thiago" class="section-div">
                <div>
                    <div>
                        <h2>Olá! Me Chamo Thiago<br>Bem-vindo ao meu portfólio</h2>
                    </div>
                    <h2 class="digitando">Web Developer FullStack</h2>
                    <p>
                        Sou desenvolvedor Web fullstack com experiência em engenharia de software e um 
                        conjunto diversificado de habilidades. Trabalhei na Neobpo no setor multifuncional N1, 
                        prestando atendimento eficiente e humanizado para a Claro. No suporte técnico (help desk), abri chamados, 
                        realizei manutenção de máquinas, configurei redes e utilizei Hyper-V para virtualização. Como analista de 
                        backoffice N2, tratava dados recebidos via e-mail, chat e videochamada, organizava-os no Excel e exportava 
                        para o sistema Qualinet, gerando ordens de serviço que permitiam à equipe técnica solucionar 
                        problemas remotamente, reduzindo custos com visitas desnecessárias.
                        Durante meu estágio em desenvolvimento de software na Effetive Sistemas, auxiliei no desenvolvimento de 
                        soluções para os clientes Michelin e MV Saúde. Contribuí no desenvolvimento de APIs REST e trabalhei no 
                        front-end utilizando Angular e boas práticas de programação. Além disso, aprofundei meus conhecimentos 
                        em metodologias ágeis, especialmente no Scrum.
                        Atualmente, sou criador da marca AcendCode, que reflete meu compromisso no desenvolvimento de software.
                    </p>
                        <a href="../../assets/arquivoCV/Curriculo_TI_Thiago_Alves.pdf" download>Download CV</a>
                </div>
                <!--<img src="img/dev.png" alt="Ilustrativa imagem de uma pessoa">-->
                <div class="image" alt="Ilustrativa imagem de uma pessoa" title="Ilustrativa imagem de uma pessoa"></div>
            </section>
            <main>
                <article aria-label="seção sobre mim" class="sobre">
                    <div class="sobre_titulo">
                        <h1>Resumo</h1>
                        <p>Perfil Profissional</p>
                    </div>
                    <!--<img src="img/dev.png" alt="Imagem de uma pessoa ilustrativa">-->
                    <div class="image2" alt="Ilustrativa imagem de um notebook" title="Ilustrativa imagem de um notebook"></div>
                    <div class="sobre_texto">
                        <h1>Hard Skills - Thiago</h1><br><br>
                        <ul>
                            <li><img src="../../assets/images/hardskills/html5.svg.png" alt="Linguagem de marcação html5" title="Html5" class="html5"></li>
                            <li><img src="../../assets/images/hardskills/css3.svg.png" alt="Linguagem de stylização css3" title="Css3" class="css3"></li>
                            <li><img src="../../assets/images/hardskills/javascript.svg" alt="Linguagem de programação javascript" title="JavaScript" class="js"></li>
                            <li><img src="../../assets/images/hardskills/Typescript.svg.png" alt="Linguagem de programação typescript" title="TypeScript" class="typescript"></li>
                        </ul>
                        <ul>
                            <li><img src="../../assets/images/hardskills/Angular.svg.png" alt="Framework de frontEnd angular" title="Angular" class="angular"></li>
                            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" alt="Linguagem de programação Java" title="java" class="java"/></li>
                            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg" title="Bootstrap" class="bootstrap"/></li>
                            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg" title="Spring" alt="Framework java spring"/>
                            <li><img src="../../assets/images/hardskills/mysql.svg" alt="Linguagem declarativa Mysql" title="Mysql" class="mysql"></li>
                            <li><img src="../../assets/images/hardskills/git.png" alt="Imagem do git" title="Git" class="git"></li>
                            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg" /></li>
                        </ul>
                    </div>
                    <!--Carrocel-->
                    <!--<div class="radio-image" aria-label="Seção apenas de ilustrações de botões">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>-->
                </article>
            </main>
    `
    container.innerHTML = template

    return container
}
