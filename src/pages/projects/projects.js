export default () =>{
    const container = document.createElement('div')//Criando uma div para adicionar todo o template
    
    //Head
    document.title = "Portfólio | Projetos";

    const template = `
    <link rel="stylesheet" href="../../assets/css/projects.css" type="text/css">
        <div class="container">

    <h1 class="heading">Meus projetos</h1>

    <div class="box-container">

        <div class="box">
            <img src="../../assets/images/projects/appBurger.png" alt="imagem da aplicação appBurger">
            <h3>AppBurger</h3>
            <p>A aplicação web de solicitação de pedidos de fast food, desenvolvida com Vue 3, oferece uma interface intuitiva para facilitar o processo de pedidos.</p>
            <a href="https://app-burger-bice.vercel.app/" target="_blank" class="btn">Vizualizar</a>
        </div>

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

    </div>

</div>
    `

    container.innerHTML = template

    return container
}
