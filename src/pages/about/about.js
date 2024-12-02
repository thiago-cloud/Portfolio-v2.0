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
            <div class="container-button">
                <button class="toggle-details">Detalhes</button>
            </div>
            <div class="details-section" id="details">
                <h2 id="sobre">Experiências</h2>
                <ul>
                    <hr>
                    <li>
                        <h3>Web Developer | Effetive Sistemas</h3>
                        <p>
                            Como estagiário, fui responsável pela manutenção dos sites
                            da Michelin e Sascar, utilizando tecnologias como PHP,
                            WordPress, JavaScript, CSS e HTML. Realizei atualizações de
                            conteúdo, correção de bugs, otimização de desempenho e
                            implementação de novos recursos, seguindo as diretrizes da
                            empresa. Colaborei com a equipe de desenvolvimento,
                            utilizando o método ágil Scrum e ferramentas como Trello e
                            Bitrix24 para organizar as tarefas da sprint.
                        </p>
                    </li>
                    <hr>
                    <li>
                        <h3>Suporte de TI | Neobpo</h3>
                        <p>
                            Realizei abertura de chamados para resolver problemas de
                            software e hardware, fazendo manutenção, atualizações e
                            backups. Gerenciei redes e dispositivos de impressão, defini
                            políticas de firewall, virtualizei máquinas usando Hyper-V,
                            configurei IP, DHCP e DNS, instalei servidores Windows
                            server e Linux, e gerenciei domínios incluindo usuários
                            grupos e computadores via Active Directory(AD/DS).
                        </p>
                    </li>
                    <hr>
                    <li>
                        <h3>Analista de Backoffice | Neobpo</h3>
                        <p>
                            Minha experiência envolveu receber informações cruciais do
                            setor técnico COP de várias regiões do Brasil, via
                            telefonemas, e-mails ou outros canais. Analisei e verifiquei a
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
                            No papel principal de atendimento ao cliente, desenvolvi
                            empatia para proporcionar um atendimento mais humanizado
                            e confortável. Minhas funções incluíam agendamentos,
                            alterações cadastrais e fornecimento de informações via
                            ligações e chat, utilizando o sistema netsms.
                        </p>
                    </li>
                    <hr>
                </ul>
        </div> 
    `

    container.innerHTML = template

    return container
}