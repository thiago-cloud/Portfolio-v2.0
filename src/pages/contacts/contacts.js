export default () =>{
    const container = document.createElement('div')//Criando uma div para adicionar todo o template

    //Head
    document.title = "  Portfólio | Contatos";

    const template = `
        <link rel="stylesheet" href="../../assets/css/contacts.css" type="text/css">
        <div class="container-contact">
            <section class="contact">
                <form action="#">
                    <h2>Entre em contato!</h2>
                    <div class="input-box">
                        <div class="input-field field">
                            <input type="text" placeholder="Nome Completo" id="name" class="item" autocomplete="off">
                            <div class="error-txt">Nome completo não pode ficar em branco</div>
                        </div>
                        <div class="input-box">
                            <div class="input-field field">
                                <input type="text" placeholder="Email" id="email" class="item" autocomplete="off">
                                <div class="error-txt email">Email não pode ficar em branco</div>
                            </div>
                        </div>
                        <div class="input-box">
                            <div class="input-field field">
                                <input type="text" placeholder="Telefone" id="phone" class="item" autocomplete="off">
                                <div class="error-txt">Numero de telefone não pode ficar em branco</div>
                            </div>
                            <div class="input-box">
                                <div class="input-field field">
                                    <input type="text" placeholder="Assunto" id="subject" class="item" autocomplete="off">
                                    <div class="error-txt">Assunto não pode ficar em branco</div>
                                </div>
                            </div>
                        </div>
                        <div class="textarea-field field">
                            <textarea name="" id="message" cols="30" rows="10" placeholder="Mande sua mensagem agora!" class="item" autocomplete="off"></textarea>
                            <div class="error-txt">Mensagem não pode ficar em branco</div>
                        </div>
                        <button type="submit">Enviar Mensagem</button>
                    </div>
                </form>
            </section>
        </div>
    `

    container.innerHTML = template

    return container
}