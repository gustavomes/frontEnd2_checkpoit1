//querySelector's

let main = document.querySelector ('#princ');
let field1 = document.querySelector('#field1');
let field2 = document.querySelector('#field2');
let campo3 = document.getElementById("imgUrl");
let logo = document.querySelector('#logo');
let botao = document.getElementById("btn")
let DivImage = document.getElementById ("divImg");
let list = document.querySelector('ol');

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
  

  //Criação dos Elementos

  let div = document.createElement("div");
  let li = document.createElement('li');
  let img = document.createElement("img");


  //localização dos elementos
  main.appendChild(div) 
  list.appendChild(li);
  DivImage.appendChild(img);



li.innerText = `Nome: ${field1.value}, Poder: ${field2.value}`;
 img.setAttribute("src", campo3.value);



})



// dica para adicionar imagem





list.appendChild(img);