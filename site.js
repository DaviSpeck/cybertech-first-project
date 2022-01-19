var conteudo_carrinho = "";
var produtos = [];
var precos = [];

function abrirMenuSideNav() {
  document.getElementById("menuSidenav").style.width = "250px";
  document.getElementById("sec_produtos").style.marginLeft = "250px";
}

function fecharMenuSideNav() {
  document.getElementById("menuSidenav").style.width = "0px";
  document.getElementById("sec_produtos").style.marginLeft = "0px";
}

function adicionar_produto(produto, preco) {
  produtos.push(produto);
  precos.push(preco);

  document.getElementById("qtdItensCarrinho").innerHTML = quantidade_produtos();
}

function quantidade_produtos() {
  return produtos.length;
}

function abrir_carrinho() {
  preencher_carrinho();
  document.getElementById("modal-carrinho-overlay").style.visibility = 'visible';
  document.getElementById("modal-carrinho-container").style.visibility = 'visible';

}

function fechar_carrinho() {
  document.getElementById("modal-carrinho-overlay").style.visibility = 'hidden';
  document.getElementById("modal-carrinho-container").style.visibility = 'hidden';
}

function preencher_carrinho() {
  conteudo_carrinho = "";
  produtos.forEach(adicionar_item);
  conteudo_carrinho += "<br>" + quantidade_produtos() + " itens no carrinho" + " R$ " + totalizar();
  document.getElementById("conteudo-carrinho").innerHTML = conteudo_carrinho;
}

function adicionar_item(item, index) {
  conteudo_carrinho += (index + 1) + "- " + item + " : R$ " + precos[index] + "<br>";
}

function totalizar() {
  var valor_total = 0;
  var cont = 0;
  while (cont < precos.length) {
    valor_total += precos[cont];
    cont += 1;
  }
  return valor_total;
}

function cadastrar_agendamento() {
  alert("Agendamento realizado com sucesso.");
}
function filtrar(nome_produto){
  var array_produtos = document.getElementsByClassName("card_produtos");
  for (i=0; i<array_produtos.length;i++){
    if (!array_produtos[i].innerHTML.includes(nome_produto)){
      array_produtos[i].style.display='none';
    
    }
    else{
      array_produtos[i].style.display='block';
    }
  };
}
