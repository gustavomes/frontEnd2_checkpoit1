//querySelector's

let main = document.querySelector ('#princ');
let field1 = document.querySelector('#field1');
let field2 = document.querySelector('#field2');
let campo3 = document.getElementById("imgUrl");
let logo = document.querySelector('#logo');
let botao = document.getElementById("btn")
let DivImage = document.getElementById ("divImg");
let list = document.querySelector('ol');  
let cond = document.querySelector('input[type=\'checkbox\']');

let par = document.querySelector('p');

// pegando todos os inputs que são type=radio
let rotas = document.querySelectorAll('input[type=\'radio\']');

//evento on mouse


logo.addEventListener('mouseover', () => {
  logo.style.filter = "grayscale(0%)"
  
});

logo.addEventListener('mouseout', () => {
    logo.style.filter = "grayscale(30%)"
  
});

//Evento Botão

botao.addEventListener('click', (event) => {

  // impede que o evento padrão aconteça (no caso do form, não envia para um backend)
  event.preventDefault(); 
  
  let rota;
  for (let i = 0; i < rotas.length; i++) {
    if (rotas[i].checked) {
      rota = rotas[i].value;
      break;
    }
  }

  let condTxt;
  cond.checked ? condTxt = 'pode mundar de rota' : condTxt = 'nunca muda de rota';

  // Mensagem: Matricula efetivada com sucesso!
  // Nome: ??? Sobrenome: ??? Periodo: ??? Condições: Aceitou/Não Aceitou
  par.innerText = `O campeão ${field1.value}, sempre usa 
  ${field2.value}, pela ${rota} lane, e  ${condTxt}.`
  
  
  //Criação dos Elementos

  let div = document.createElement("div");
  let li = document.createElement('li');
  let img = document.createElement("img");


  //localização dos elementos
  main.appendChild(div) 
  list.appendChild(par);
  DivImage.appendChild(img);

 img.setAttribute("src", campo3.value);



})


