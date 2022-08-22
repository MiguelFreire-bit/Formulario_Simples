var nome = document.querySelectorAll(".input-padrao");
const enviar = document.querySelectorAll(".enviar");

const enviar1 = enviar[0];
var valores = ["","",""];

enviar1.onclick = function(){

  for (let contador = 0; contador < nome.length; contador++) {

    valores[contador] = nome[contador].value;   
  }
  console.log(valores)
  alert(`Olá ${valores[0]}, você tem ${valores[1]} anos e já está aprendendo ${valores[2]}!`);
}




  



