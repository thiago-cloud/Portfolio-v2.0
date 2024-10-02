# Portfólio

Status: Desenvolvedor ⚠️

Meu portfólio foi desenvolvido inteiramente em HTML, CSS puro e JavaScript, sem o uso de frameworks de front-end, o que garante sua leveza e eficiência. Visando demonstrar outros projetos, ele se destaca pela criação de um framework próprio, desenvolvido do zero, otimizando o desempenho e a personalização. A interface é moderna e minimalista, proporcionando uma experiência de navegação fluida e responsiva, além de evidenciar meu conhecimento em desenvolvimento web e habilidades em criar soluções completas, enxutas e funcionais.

## Tecnologias Utilizadas

- **HTML:** Estruturação das páginas do site.
- **CSS:** Estilização e layout responsivo para uma apresentação atraente.
- **JavaScript:** Interatividade e funcionalidades dinâmicas.
- **CDN:** Bootstrap, Fontawesome, Sweetalert2 e Smtpjs.

## Funcionalidades Atuais

- **Design Atraente:** Layout visualmente agradável com um design moderno e responsivo.
- **Responsividade:** O site é adaptável a diferentes tamanhos de tela, proporcionando uma ótima experiência em dispositivos móveis e desktops.
- **Backend:** Este projeto utiliza um backend de terceiros, como o SMTP.js, que é responsável pelo envio de e-mails na página de contato. Além disso, ele integra o serviço do Elastic Email, que fornece tokens de segurança para garantir a proteção e autenticidade no envio das mensagens, assegurando que o processo de comunicação por e-mail seja confiável e seguro.

## Estrutura do Projeto

- **Sobre:** Informações detalhadas sobre minha trajetória profissional. Esse template fica no arquivo about.js.
- **Contato:** Formulário de contato para facilitar a comunicação e o envio de mensagens via email. Esse template fica no arquivo contact.js.
- **Projetos:** Exibição dos projetos realizados, com links para visualização. Esse template fica no arquivo projects.js.
- **Home** Resumo de minhas habilidades mostrando minha hardskills de preferência, além disso, e nessa página que contém o download do meu currículo. Esse template fica no arquivo home.js.
- **routes.js** Este arquivo é responsável pelo gerenciamento das rotas, permitindo a navegação entre as diferentes páginas sem recarregar o navegador, o que torna a implementação de uma SPA (Single Page Application) possível no projeto.
- **src** Este diretório contém o código-fonte do projeto, incluindo o service, que gerencia a lógica da página de contato, como envio de e-mails e validação de formulário. Também inclui o diretório components, responsável pelos componentes reutilizáveis como o header e footer, e o diretório page, que exporta os templates das páginas (home, projects, about e contact) via JavaScript para o index.
- **assets** Este diretório é responsável por armazenar todos os recursos relacionados à aparência do front-end, incluindo os diretórios css para estilos, js para scripts, images para imagens, fonts para fontes e arquivoCV para o documento de currículo. Ele centraliza todos os elementos visuais e funcionais da interface do usuário.
- **index.html** Este é o arquivo HTML principal da SPA (Single Page Application), onde todas as páginas do projeto são exibidas através do serviço de rotas. Ele também é responsável pela inclusão de todas as CDNs necessárias para o funcionamento do projeto, garantindo que os recursos externos, como bibliotecas e estilos, sejam carregados corretamente.
- **favicon** Este diretório é responsável por armazenar o ícone (favicon) que aparece na aba do navegador quando o site é acessado, ajudando na identificação visual do projeto pelos usuários.

## Execução do Projeto

- **1.** No terminal de sua preferência digite `git clone https://github.com/thiago-cloud/Portfolio-v2.0.git` em desktop ou pasta de sua preferência.
- **2.** Vá à raiz do projeto e clique no arquivo index.html para acessar o projeto, ou se preferir abra o projeto pelo VS Code e execute através da extensão de servidor local chamada live server.
