
var nome = "Lista de tarefas"
var resultado = 0;

var nomeNoHtml =  document.getElementById('nomeSite')
var resultadoNoHtml =  document.getElementById('resultado')

function colocarNomeNoHtml(nome){
  nomeNoHtml.innerHTML = nome;
}

function totalResultado(resultado){
  resultadoNoHtml.innerHTML = resultado;
}

function somarResultado(){
  resultado = resultado + 1;
  resultadoNoHtml.innerHTML = resultado;
}

colocarNomeNoHtml(nome);
totalResultado(resultado);
