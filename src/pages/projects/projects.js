export default () =>{
    const container = document.createElement('div')//Criando uma div para adicionar todo o template
    
    //Head
    document.title = "Projetos | Portfólio  ";

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
        <!--Cards-->
        <div class="card-container">
            <!-- Cards dinâmicos serão inseridos aqui -->
        </div>   
    </div>
    `

    container.innerHTML = template

    return container
}
