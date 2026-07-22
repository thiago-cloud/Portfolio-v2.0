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
                           Como estagiário fui responsável pela manutenção do site da Michelin e MV Saúde na empresa de consultoria Effetive Sistemas, 
                           utilizei tecnologias como Python, Java com Spring, Angular, JavaScript, CSS, HTML, GIT e Banco de Dados utilizando MySQL, 
                           Realizando sempre ajustes para que o site esteja sempre atualizado funcional e atraente para os usuários. Minhas responsabilidades
                           incluiram realizar CRUD, validação de formulários, atualizações de conteúdo, corrigeção de bugs, otimização do desempenho do site, 
                           desenvolvimento de APIs REST, e implementação de novos recursos de acordo com a solicitação do cliente. 
                           Trabalhando em colaboração com a equipe de desenvolvimento, empregando métodologia ágil scrum com auxílio de algumas ferramentas como 
                           trello e bitrix24 para organização das tarefas da sprint.
                        </p>
                    </li>
                    <hr>
                    <li>
                        <h3>Suporte TI | Neobpo</h3>
                        <p>
                           Atuei no suporte de TI seguindo as boas práticas e melhores práticas do ITIL.
                            Auxiliando no monitoramento com Zabbix para as máquinas na rede.
                            Executei configuração e manutenção de proxy e VPN, garantindo
                            Conectividade segura e políticas de acesso. Auxiliei na administração
                            De servidores, realizando também load balance em alguns cenários, utilizei sistemas Windows Server Linux, auxiliei no gerenciamento de permissões
                            de usuários com Active Directory (AD/DS), além de dar suporte à
                            virtualização com Hyper-V. Utilizei o Zendesk para registro e
                            acompanhamento de chamados, o que facilitava o atendimento a
                            incidentes de hardware e software, realizei instalações de cabos 
                            e configurações DHCP, DNS, IP  na rede, em equipamentos de switch, roteadores e access point. 
                            Também auxiliei nas políticas de segurança com firewall para otimização da infraestrutura.

                        </p>
                    </li>
                    <hr>
                    <li>
                        <h3>Analista de Backoffice N2 | Neobpo</h3>
                        <p>
                            Processei e analisei dados de outages da Central de Operações
                            (COP), coletados de diversas regiões do Brasil através de múltiplos
                            canais (e-mails, chats e vídeo chamadas). Utilizei Excel avançado
                            (PROCX, fórmulas condicionais e Power Query) para transformar
                            dados brutos em relatórios estruturados. Classifiquei ordens de
                            serviço no Qualinet, identificando manutenções externas para
                            cancelar visitas técnicas desnecessárias, reduzindo custos de deslocamentos e
                            aumentando a eficiência operacional. Dominando o fluxo de dados,
                            da coleta à geração de insights, com habilidades em Excel, Qualinet e
                            análise de dados.
                        </p>
                    </li>
                    <hr>
                    <li>
                        <h3>Atendimento Multifuncional N1 | Neobpo</h3>
                        <p>
                            No setor multifuncional N1, atuei no atendimento ao cliente ativo e receptivo para a claro. 
                            Nessa função realizava procedimentos de agendamento e reagendamento de visita técnica, mudança de endereço, 
                            procedimentos técnicos básicos quando necessário, solucionava dúvidas de clientes e vendas quando necessário 
                            operando nos sistemas Netsms, Netsales, Avaya e New Datacenter. Acredito que o principal aprendizado nesse setor 
                            que posso levar para a vida toda foi a comunicação mais assertiva, a empatia, e a agilidade, oferecendo mais conforto 
                            ao cliente em um atendimento humanizado e eficiente.
                        </p>
                    </li>
                </ul>
        </div> 
    `

    container.innerHTML = template

    return container
}
