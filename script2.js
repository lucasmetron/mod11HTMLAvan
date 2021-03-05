let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");

let x = 250;
let y = 250;
let raio = 200;
let inicio = 0;
let fim = 2 * Math.PI;



ctx.beginPath();
ctx.strokeStyle = "red";
ctx.arc(x,y,raio,inicio,fim);
ctx.stroke();

