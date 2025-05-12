const botao = document.querySelector("#botton");
const mensagem = document.querySelector("#mensagemBotao");

botao.addEventListener("click", exibirMensagem);

function exibirMensagem() {
    mensagem.innerHTML = "Hello World! Clichê mas é meu minha primeira pagina!!"
}
