document.addEventListener("eventoDoContact", () => {
    
    const form = document.querySelector('form')
    const fullName = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    
    //Função responsável pelo envio do email.
    function sendEmail(){
        const bodyMessage = `Nome Completo: ${fullName.value}<br> Email: ${email.value}<br> Número de telefone: ${phone.value}<br> Message: ${message.value}`;
        Email.send({
            Host : "smtp.elasticemail.com", 
            Username : "thiago.al154@gmail.com",
            Password : "CF2B57914DA3C45751E55983BC91152C64F1",
            To : 'thiago.al154@gmail.com',
            From : "thiago.al154@gmail.com",
            Subject : subject.value,
            Body : bodyMessage
        }).then(
          message => {
                if(message == "OK"){
                    Swal.fire({
                    title: "Sucesso!",
                    text: "Mensagem enviada com sucesso!",
                    icon: "success"
                    });
                }
          }
        );
    }
    
    //Validação dos inputs
    function checkInputs(){
        const items = document.querySelectorAll(".item");
    
        for(const item of items){
            if(item.value == ""){
                item.classList.add("error");
                item.parentElement.classList.add("error")
            }
    
            if(items[1].value != ""){
                checkEmail()
            }
    
            items[1].addEventListener("keyup", () =>{
                checkEmail()
            })
    
            item.addEventListener("keyup", ()=> {
                if(item.value != ""){
                    item.classList.remove("error");
                    item.parentElement.classList.remove("error");
                }
                else{
                    item.classList.add("error");
                    item.parentElement.classList.add("error")
                }
            })
        }
    }
    
    function checkEmail(){
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)*$/;
    
        const errorTxtEmail = document.querySelector(".error-txt.email")
    
        if(!email.value.match(emailRegex)){
            email.classList.add("error")
            email.parentElement.classList.add("error")
    
            if(email.value != ""){
                errorTxtEmail.innerText = "Insira um endereço de e-mail válido."
            }else{
                errorTxtEmail.innerText = "Endereços de e-mail não podem ficar em branco."
            }
    
        }else{
            email.classList.remove("error")
            email.parentElement.classList.remove("error")
        }
    }
    
    //Chamando a função de envio
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        checkInputs()
    
        if (!fullName.classList.contains("error") && !email.classList.contains("error") 
            && !phone.classList.contains("error") && !subject.classList.contains("error") 
            && !subject.classList.contains("error")){
                sendEmail();
                form.reset();
                console.log("Email enviado!")
                return false;
            }
        })
    })
    