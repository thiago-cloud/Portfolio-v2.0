export default () =>{
    const container = document.createElement('div')//Criando uma div para adicionar todo o template

    //Head
    document.title = " NotFound404 | Portfólio ";

    const template = `
        <link rel="stylesheet" href="../../assets/css/404.css" type="text/css">
        <div class="container">
            <h1>404</h1>
            <p>Oops! A página que você está procurando não foi encontrada.</p>
            <a href="#home" class="btn">Voltar para a Página Inicial</a>
        </div>
    `

    container.innerHTML = template

    return container
}