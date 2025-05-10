
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
                    <ul>
                        <li>
                            <p>
                                <strong>
                                    • Sou engenheiro de software com experiência em desenvolvimento web fullstack e aplicações multiplataforma.
                                </strong>
                            </p>
                        </li><br>
                        <li>
                            <p>
                                <strong>
                                    • Atuo também com infraestrutura de TI, especialmente em suporte técnico, o que amplia minha visão de sistemas de ponta a ponta.
                                </strong>    
                            </p>
                        </li><br>
                        <li>
                            <p>
                                <strong>
                                    • Tenho foco na resolução de problemas, automação de processos comerciais e criação de soluções para diferentes contextos.
                                </strong
                            </p>
                        </li><br>
                        <li>
                            <p>
                                <strong>
                                    • Sou curioso e movido pelo aprendizado contínuo, sempre buscando ser a minha melhor versão.
                                </strong>
                            </p>
                        </li><br>
                        <li>
                            <p>
                                <strong>
                                    • Costumo compartilhar meus projetos e estudos no GitHub.
                                </strong>
                            </p>
                        </li>  
                </div>
                <div class="image" alt="Ilustrativa imagem de uma pessoa" title="Ilustrativa imagem de uma pessoa"></div>
            </section>
            <main>
                <article aria-label="seção sobre mim" class="sobre">
                    <div class="sobre_titulo">
                        <h1>Resumo</h1>
                        <p>Perfil Profissional</p>
                    </div>
                    <div class="image2" alt="Ilustrativa imagem de um notebook" title="Ilustrativa imagem de um notebook"></div>
                    <div class="sobre_texto">
                        <h1>Hard Skills - Thiago</h1><br>
                        <hr>
                        <h3>FrontEnd</h3>
                        <ul>
                            <li><img src="../../assets/images/hardskills/html5.svg.png" alt="Linguagem de marcação html5" title="Html5" class="html5"></li>
                            <li><img src="../../assets/images/hardskills/css3.svg.png" alt="Linguagem de stylização css3" title="Css3" class="css3"></li>
                            <li><img src="../../assets/images/hardskills/javascript.svg" alt="Linguagem de programação javascript" title="JavaScript" class="js"></li>
                            <li><img src="../../assets/images/hardskills/Typescript.svg.png" alt="Linguagem de programação typescript" title="TypeScript" class="typescript"></li>
                            <li><img src="../../assets/images/hardskills/Angular.svg.png" alt="Framework de frontEnd angular" title="Angular" class="angular"></li>
                            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original-wordmark.svg" /></li>
                            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg" title="Bootstrap" class="bootstrap"/></li>
                        </ul>
                        <hr>
                        <h3>BackEnd</h3>
                        <ul>
                            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" alt="Linguagem de programação Java" title="java" class="java"/></li>
                            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-plain-wordmark.svg" /></li>
                            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" /></li>
                            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg" title="Spring" alt="Framework java spring"/>
                            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain-wordmark.svg" /></li>
                            <li><img src="../../assets/images/hardskills/mysql.svg" alt="Linguagem declarativa Mysql" title="Mysql" class="mysql"></li>
                        </ul>
                        <hr>
                        <h3>Infra</h3>
                        <ul>
                            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg" /></li>
                            <li><img src="../../assets/images/hardskills/git.png" alt="Imagem do git" title="Git" class="git"></li>
                            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/powershell/powershell-original.svg" /></li>
                            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-plain.svg" /></li>
                            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original-wordmark.svg" /></li>
                            <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redhat/redhat-original.svg" /></li>
                        </ul>
                    </div>
                </article>
            </main>
    `
    container.innerHTML = template

    return container
}
