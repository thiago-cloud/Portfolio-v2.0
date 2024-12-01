export default () =>{
    const container = document.createElement('div')//Criando uma div para adicionar todo o template
    
    //Head
<<<<<<< HEAD
    document.title = "Projetos | Portfólio  ";
=======
    document.title = "Portfólio | Projetos";
>>>>>>> 803124ffcb020eef67876eeb42cddc2e5da68ba9

    const template = `
    <link rel="stylesheet" href="../../assets/css/projects.css" type="text/css">
    <div class="container">
        <h1 class="heading">Meus projetos</h1>
        <!--Mecanismo de busca-->
        <div class="search">
            <label for="searchInput">
                <i class="fa-solid fa-magnifying-glass"></i>
            </label>
            <input type="text" id="searchInput" placeholder="Buscar projetos, framework, linguagens e muito mais...">
        </div>
<<<<<<< HEAD
        <!--Cards-->
        <div class="card-container">
            <!-- Cards dinâmicos serão inseridos aqui -->
        </div>   
=======

        <div class="box">
            <img src="../../assets/images/projects/cadastroProdutos.png" alt="Imagem do projeto cadastro de produtos">
            <h3>Cadastro de Produtos</h3>
            <p>Uma aplicação web CRUD desenvolvida em Angular 18 permite realizar o cadastro, leitura, atualização e exclusão de produtos.</p>
            <a href="https://cadastro-de-produtos-rouge.vercel.app/" target="_blank" class="btn">Vizualizar</a>
        </div>

        <div class="box">
            <img src="../../assets/images/projects/form.png" alt="Imagem do projeto formulário">
            <h3>Form</h3>
            <p>Formulário com Validações! Este projeto demonstra a criação de um formulário de registro em HTML com validações realizadas em JavaScript puro.</p>
            <a href="https://form-eight-pied.vercel.app/" target="_blank" class="btn">Vizualizar</a>
        </div>

        <div class="box">
            <img src="../../assets/images/projects/kanban_log.png" alt="Imagem do projeto kanban_log">
            <h3>Kanban_log</h3>
            <p>
                Aplicação que permite registrar anotações e tópico que estar sendo aprendido. Utilizando django, o software inclui autenticação, registro de dados.
            </p>
            <a href="https://kanbanlog-project.vercel.app/" target="_blank" class="btn" >Vizualizar</a>
        </div>

>>>>>>> 803124ffcb020eef67876eeb42cddc2e5da68ba9
    </div>
    `

    container.innerHTML = template

    return container
}
