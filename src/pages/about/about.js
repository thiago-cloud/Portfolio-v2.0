export default () =>{
    const container = document.createElement('div')//Criando uma div para adicionar todo o template

    //Head
    document.title = "Sobre | Portfólio";

    const template = `
        <link rel="stylesheet" href="../../assets/css/about.css" type="text/css">
        
        <div class="about-section">
            <div class="profile-container">
                <img src="../../assets/images/Perfil.jpeg" alt="Profile Picture" class="profile-picture">
                <h1 class="name">Thiago Alves</h1>
                <p class="bio">Desenvolvedor Web | Engenheiro de Software | Programador</p>
                <!--<div class="social-links">
                    <a href="https://github.com/" target="_blank">GitHub</a>
                    <a href="https://linkedin.com/" target="_blank">LinkedIn</a>
                    <a href="https://twitter.com/" target="_blank">Twitter</a>
                </div>-->
            </div>
            <!--<div class="container-button-1">
                <button class="toggle-details"><a href="../../assets/arquivoCV/Curriculo_TI_Thiago_Alves.pdf" download>Download CV</a></button>
            </div>
            <div class="container-button-2">
                <button class="toggle-details" id="toggle-details">Experiências</button>
            </div>
            <div class="details-section" id="details">-->

            <div class="container-button-1">
                <a href="../../assets/arquivoCV/Curriculo_TI_Thiago_Alves.pdf" class="toggle-details"  download> 
                    Download CV 
                </a>
            </div>
            <div class="container-button-2">
                <a class="toggle-details btn-exp" id="toggle-details" >Experiências</a>
            </div>
            <div class="details-section" id="details">
                <ul>
                    <li>
                        <h3>Desenvolvedor Web | Effetive Sistemas</h3>
                        <p>
                            Como estagiário fui responsável pela manutenção do site da Michelin e MV Saúde, 
                            utilizei tecnologias como Java, Spring Boot, Angular, JavaScript, CSS e HTML para garantir que 
                            o site esteja sempre atualizado, funcional e atraente para os usuários. Minhas responsabilidades incluíram realizar 
                            atualizações de conteúdo, corrigir bugs, otimizar o desempenho do site, desenvolvimento de APIs, 
                            e implementação de novos recursos conforme as diretrizes da empresa. 
                            Trabalhando em colaboração com a equipe de desenvolvimento, 
                            empregando método ágil scrum com auxílio de algumas ferramentas como 
                            Trello e bitrix24 para organização das tarefas da Sprint.
                        </p>
                    </li>
                    <hr>
                    <li>
                        <h3>Suporte de TI | Neobpo</h3>
                        <p>
                            Realizei abertura de chamados para resolução de problemas de software e hardware, 
                            oferecendo manutenção, atualizações e backups. Contribuí no gerenciamento de redes, 
                            dispositivos de impressão, políticas de firewall e virtualização de máquinas com Hyper-V. Configurei IP, DHCP e DNS, 
                            além de auxiliar na instalação de servidores Windows Server e Linux. 
                            Também atuei auxiliando na administração de domínios, incluindo gestão de usuários, grupos e computadores 
                            por meio do Active Directory (AD/DS), sempre com foco em garantir uma boa infraestrutura.
                        </p>
                    </li>
                    <hr>
                    <li>
                        <h3>Analista de Backoffice N2 | Neobpo</h3>
                        <p>
                            Minha experiência envolveu receber informações cruciais do
                            setor técnico COP de várias regiões do Brasil, via
                            e-mails, chat, e vídeo chamadas ou outros canais. Analisei e verifiquei a
                            veracidade desses dados no Excel, filtrando e registrando de
                            forma precisa no sistema Qualinet. Essas informações se
                            traduziram em ordens de serviço para o suporte técnico
                            remoto, garantindo a precisão dos registros para o ambiente
                            de produção. Trabalhei com o produto Claro durante esse
                            período.
                        </p>
                    </li>
                    <hr>
                    <li>
                        <h3>Atendimento Multifuncional N1 | Neobpo</h3>
                        <p>
                            Atuei no atendimento ao cliente, oferecendo suporte humanizado para proporcionar 
                            um atendimento mais acolhedor e eficiente. Minhas funções incluíam agendamentos, 
                            alterações cadastrais e fornecimento de informações via ligações e chat, 
                            utilizando o sistema netsms, new datecenter, net sales, avaya e solar.
                        </p>
                    </li>
                </ul>
        </div> 
    `

    container.innerHTML = template

    return container
}