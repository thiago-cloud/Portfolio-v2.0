/*Mecanismo de Busca*/
function OnInitProject() {
    const data = [
        {
            title: "FastSnack",
            description: "A aplicação web de solicitação de pedidos de fast food, desenvolvida com Vue 3, oferece uma interface intuitiva para facilitar o processo de pedidos.",
            img: "../../assets/images/projects/appBurger.png",
            link: "https://app-burger-bice.vercel.app/"
        },
        {
            title: "Cadastro de Produtos",
            description: "Uma aplicação web CRUD desenvolvida em Angular 18 permite realizar o cadastro, leitura, atualização e exclusão de produtos.",
            img: "../../assets/images/projects/cadastroProdutos.png",
            link: "https://cadastro-de-produtos-rouge.vercel.app/"
        },
        {
            title: "Form",
            description: "Formulário com Validações! Este projeto demonstra a criação de um formulário de registro em HTML com validações realizadas em JavaScript puro.",
            img: "../../assets/images/projects/form.png",
            link: "https://forms-js-wine.vercel.app/"
        },
        {
            title: "Kanban_log",
            description: "Aplicação que permite registrar anotações e tópicos que estão sendo aprendidos. Utilizando Django, o software inclui autenticação e registro de dados.",
            img: "../../assets/images/projects/kanban_log.png",
            link: "https://kanbanlog-project.vercel.app/"
        }
    ];


    const cardContainer = document.querySelector('.card-container');
    const searchInput = document.querySelector('#searchInput');

    //Percorre todos os cards para serem mostrados com Foreach
    const displayData = (filteredData) => {
        cardContainer.innerHTML = "";
        filteredData.forEach(item => {
            cardContainer.innerHTML += `
                <div class="card">
                    <img src="${item.img}" alt="Imagem do projeto ${item.title}">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <a href="${item.link}" target="_blank" class="btn">Visualizar</a>
                </div>
            `;
        });
    };

    //Exibir todos os projetos ao atualizar a página
    displayData(data)

    //Ao escrever acione o evento keyup de teclado, veja se o item.title está incluido no input(searchInput) 
    searchInput.addEventListener("keyup", (e) => {
        const searchTerm = e.target.value.toLocaleLowerCase();
        const filteredData = data.filter(item => 
            item.title.toLocaleLowerCase().includes(searchTerm) || 
            item.description.toLocaleLowerCase().includes(searchTerm)
        );
        displayData(filteredData);//Mostra os card filtrados ao digitar no input
    });

    
    // Carrega todos os projetos ao iniciar
    //window.addEventListener("load", () => displayData(data));
}

//Ao finalizar evento acione permita acionar a função OnInitProject
document.addEventListener("onRouterFinished-Projects", () => {
    
    OnInitProject();
    
});
