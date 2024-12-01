// Importando os templates
import home from './src/pages/home/home.js';
import projects from './src/pages/projects/projects.js';
import about from './src/pages/about/about.js';
import contacts from './src/pages/contacts/contacts.js';
import error404 from './src/pages/404/error404.js'; // Página 404

const main = document.querySelector("#root");

// Mapeamento de rotas e eventos personalizados
//Se for adicionar script a página e necessario inserir o script dentro de uma função onRouterFinished pode ser qualquer nome mais decidi colocar esse nome para padronizar, essa função serve para poder finalizar o evento anterio e carregar o outro evento
const routes = {
    "": { component: home, event: "onRouterFinished-Home" },
    "#home": { component: home, event: "onRouterFinished-Home" },
    "#about": { component: about, event: "onRouterFinished-About" },
    "#contacts": { component: contacts, event: "onRouterFinished-Contacts" },
    "#projects": { component: projects, event: "onRouterFinished-Projects" },
};

// Função para renderizar a página com base na hash
const renderPage = () => {
    main.innerHTML = ""; // Limpa o conteúdo anterior

    const route = routes[window.location.hash] || { component: error404, event: "onRouterFinished-404" };

    main.appendChild(route.component()); // Adiciona o componente da rota

    // Dispara o evento correspondente à rota
    if (route.event) {
        document.dispatchEvent(new Event(route.event));
    }
};

// Inicialização das rotas e eventos
const init = () => {
    window.addEventListener("hashchange", renderPage); // Reage a mudanças de rota
    renderPage(); // Renderiza a rota atual ao carregar a página
};

window.addEventListener("load", init); // Inicializa o app ao carregar a página
