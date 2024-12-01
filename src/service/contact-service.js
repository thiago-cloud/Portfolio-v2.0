// onRouterFinished-Contacts responsável pela finalização do evento anterior dando início ao novo evento
document.addEventListener("onRouterFinished-Contacts", () => {
    const form = document.querySelector('form');
    const fullName = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');

    // Função responsável pelo envio do email.
    function sendEmail() {
        const bodyMessage = `
            Nome Completo: ${fullName.value}<br> 
            Email: ${email.value}<br> 
            Número de telefone: ${phone.value}<br> 
            Mensagem: ${message.value}
        `;
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "thiago.al154@gmail.com",
            Password: "CF2B57914DA3C45751E55983BC91152C64F1",
            To: 'thiago.al154@gmail.com',
            From: "thiago.al154@gmail.com",
            Subject: subject.value,
            Body: bodyMessage
        }).then(message => {
            Swal.fire({
                title: "Sucesso!",
                text: message === "OK" ? "Mensagem enviada com sucesso!" : "Erro ao enviar a mensagem.",
                icon: message === "OK" ? "success" : "error"
            });
        });
    }

    // Validação dos inputs
    function checkInputs() {
        const items = document.querySelectorAll(".item");

        items.forEach(item => {
            if (item.value.trim() === "") {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            } else {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }

            if (email.value.trim() !== "") {
                checkEmail();
            }

            item.addEventListener("keyup", () => {
                if (item.value.trim() !== "") {
                    item.classList.remove("error");
                    item.parentElement.classList.remove("error");
                } else {
                    item.classList.add("error");
                    item.parentElement.classList.add("error");
                }
            });
        });
    }

    // Validação do email
    function checkEmail() {
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/;
        const errorTxtEmail = document.querySelector(".error-txt.email");

        if (!email.value.match(emailRegex)) {
            email.classList.add("error");
            email.parentElement.classList.add("error");
            errorTxtEmail.innerText = email.value.trim() !== "" 
                ? "Insira um endereço de e-mail válido." 
                : "Endereços de e-mail não podem ficar em branco.";
        } else {
            email.classList.remove("error");
            email.parentElement.classList.remove("error");
            errorTxtEmail.innerText = "";
        }
    }

    // Máscara para telefone
    function maskPhone() {
        phone.addEventListener("input", () => {
            const cleanValue = phone.value.replace(/\D/g, "").substring(0, 11);
            let formattedValue = "";

            if (cleanValue.length > 0) {
                formattedValue += `(${cleanValue.slice(0, 2)}) `;
            }
            if (cleanValue.length > 2) {
                formattedValue += `${cleanValue.slice(2, 7)} `;
            }
            if (cleanValue.length > 7) {
                formattedValue += `-${cleanValue.slice(7)}`;
            }

            phone.value = formattedValue.trim();
        });
    }

    // Chamando a função de envio e validação
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        checkInputs();

        if (!fullName.classList.contains("error") && 
            !email.classList.contains("error") && 
            !phone.classList.contains("error") && 
            !subject.classList.contains("error") && 
            !message.classList.contains("error")) {
            sendEmail();
            form.reset();
            console.log("Email enviado!");
        }
    });

    maskPhone(); // Inicia a máscara de telefone
});
