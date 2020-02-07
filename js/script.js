let tela = document.getElementById("visor"); //Local onde exibe os dados

//o evento de click esta no div que esta o numero/simbolo
const adicionaValor = valor => tela.innerText += valor; // Adiciona o valor na tela
const limpaTela = () => tela.innerText = ""; // Limpa tela
const somaVisor = () => tela.innerText = eval(tela.innerText); //Executa a operação matemática