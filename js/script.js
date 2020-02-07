let tela = document.getElementById("visor");

//o evento de click esta no div que esta o numero/simbolo
const adicionaValor = valor => tela.innerText+=valor;
const limpaTela = () => tela.innerText="";
const somaVisor = () => tela.innerText = eval(tela.innerText);