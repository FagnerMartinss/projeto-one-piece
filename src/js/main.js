/*
o que precisamos fazer? - quando clicar no botão do personagem na lista, temos que marcar o botão com selecionado e mostra o personagem corespondente.

OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado.
passo 1 - pegar os boto~es  no js para poder vieificar queando o usuario clicar em cima de um deles
passo 2 - adicionar a classe "selecionado" no botão que o usuario clicou
passo 3 - verificar se já existe um botão selecionado,se sim, devemos remover a seleção dele

OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem
passo 1 - pegar os pesonagens no js para poder mostrar ou esconder ele
passo 2 - adicionar a classe "selecionado" no personargem que o usuario selecionou
passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele
 */

//OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado.
//passo 1 - pegar os boto~es  no js para poder vieificar queando o usuario clicar em cima de um deles
//passo 1 - pegar os pesonagens no js para poder mostrar ou esconder ele


const botoes = document.querySelectorAll('.botao');

const personagem = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        desselecionarBotao();
        desselecionarPersonagem();

        botao.classList.add("selecionado");
        personagem[indice].classList.add("selecionado");

    });
});


function desselecionarPersonagem() {
    const pesonagenSeleciondo = document.querySelector(".personagem.selecionado");
    pesonagenSeleciondo.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
