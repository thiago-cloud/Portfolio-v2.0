export default () =>{
    const container = document.createElement('div')//Criando uma div para adicionar todo o template

    //Head
    document.title = "Sobre | Portfólio";

    const template = `
        <link rel="stylesheet" href="../../assets/css/about.css" type="text/css">
        
        <div class="about-section">
            <div class="profile-container">
                <img src="../../assets/images/Perfil.jpeg" alt="Profile Picture" class="profile-picture">
                <h1 class="name">
                    Thiago Alves
                </h1>
                <p class="bio">Engenheiro de Software | Fullstack | Devops</p>
            </div>
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
                        <h3>Suporte TI | Neobpo</h3>
                        <p>
                            Atuei no suporte TI seguindo as boas práticas da metodologia ITIL,
                            realizando monitoramento com Zabbix para maquinas e redes.
                            Executei configuração e manutenção de proxy e VPN, garantindo
                            conectividade segura e políticas de acesso. Auxiliei na administração
                            de servidores Windows Server e Linux, gerenciamento de permissões
                            de usuáriso com Active Directory (AD/DS), além de dar suporte à
                            virtualização com Hyper-V. Utilizei o Zendesk para registro e
                            acompanhamento de chamados, o que facilitava o atendimento a
                            incidentes de hardware e software, e participei da configuração de
                            DHCP, DNS e firewall para otimizar a infraestrutura.

                        </p>
                    </li>
                    <hr>
                    <li>
                        <h3>Analista de Backoffice N2 | Neobpo</h3>
                        <p>
                            Processei e analisei dados de outages da Central de Operações
                            (COP), coletados de diversas regiões do Brasil através de múltiplos
                            canais (e-mails, chats e vídeo chamadas). Utilizei Excel avançado
                            (XLOOKUP, fórmulas condicionais e Power Query) para transformar
                            dados brutos em relatórios estruturados. Classifiquei ordens de
                            serviço no Qualinet, identificando manutenções externas para
                            cancelar visitas técnicas desnecessárias, reduzindo deslocamentos e
                            aumentando a eficiência operacional. Dominando o fluxo de dados,
                            da coleta à geração de insights, com habilidades em Excel, Qualinet e
                            análise de dados.
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