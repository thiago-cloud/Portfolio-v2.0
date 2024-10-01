//Importando o template home
import home from './src/pages/home/home.js'
import projects from './src/pages/projects/projects.js'
import about from './src/pages/about/about.js'
import contacts from './src/pages/contacts/contacts.js'

const main = document.querySelector("#root")

//O objeto HashChangeEvent manipula eventos que ocorrem quando a âncora de uma URL é alterada.
const init = () =>{
    window.addEventListener("hashchange", () => {
        main.innerHTML = ""// Para não acrescentar as tags toda vez que selecionar uma rota
        switch(window.location.hash){
            case "":
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
                main.appendChild(projects())
                break;
            default:
                //O ideal e colocar uma pagina de notFound
                main.appendChild(home());
        }
    })
}

//O load e um evento que diz a respeito do carregamento da janela ou seja depois que toda a janela carregar faça uma ação
window.addEventListener("load", () => {
    main.appendChild(home())//toda vez que a página carregar print o template home na tag main #root
    init()//Chamando a função init após o carregamento da página index
    const onRouterFinishedEvent = new Event("onRouterFinished");
    document.dispatchEvent(onRouterFinishedEvent);
})