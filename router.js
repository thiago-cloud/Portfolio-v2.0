
// Importando os templates
import home from './src/pages/home/home.js';
import projects from './src/pages/projects/projects.js';
import about from './src/pages/about/about.js';
import contacts from './src/pages/contacts/contacts.js';

const main = document.querySelector("#root");

// Função para renderizar a página com base na hash
const renderPage = () => {
    main.innerHTML = ""; // Limpa o conteúdo existente
    switch (window.location.hash) {
        case "":
            main.appendChild(home());
            break;
        case "#home":
            main.appendChild(home());
            break;
        case "#about":
            main.appendChild(about());
            const eventoDoAbout = new Event("eventoDoAbout");
            document.dispatchEvent(eventoDoAbout);
            break;
        case "#contacts":
            main.appendChild(contacts());
            const eventoDoContact = new Event("eventoDoContact");
            document.dispatchEvent(eventoDoContact);
            break;
        case "#projects":
            main.appendChild(projects());
            break;
        default:
            // Página 404 ou redirecionar para a home
            alert("Erro 404 Página não encontra!");
    }
};

// Inicializa os eventos de rota
const init = () => {
    window.addEventListener("hashchange", renderPage);
};

// Evento de carregamento da página
window.addEventListener("load", () => {
    renderPage(); // Renderiza a página inicial com base na hash
    init(); // Inicializa o evento hashchange, Toda vez que a página carregar, print o template atual atravès do hashchange na tag main #root
    const onRouterFinishedEvent = new Event("onRouterFinished");
    document.dispatchEvent(onRouterFinishedEvent);
});
