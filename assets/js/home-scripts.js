function ativarLetra(e){
    const arrTexto = e.innerHTML.split('');//Faz a função de separação
    e.innerHTML ='';
    arrTexto.forEach((letra,i)=>{
        setTimeout(()=>{
            e.innerHTML += letra;
        },75 * i);
    })
}

//Acionando o evento que iniciara a função ativarLetra após a finalização do evento onRouterFinished
document.addEventListener("onRouterFinished-Home", () => {
    //Digitação
    const titulo = document.querySelector('.digitando');
    ativarLetra(titulo);
    
  });

