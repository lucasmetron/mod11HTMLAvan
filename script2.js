let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");

ctx.beginPath();

ctx.lineWidth = 4;
ctx.strokeStyle = "red";
ctx.moveTo(10,10);
ctx.lineTo(400,300);
ctx.lineTo(10,300)
ctx.fillStyle = "blue"
ctx.fill();
ctx.closePath();
ctx.stroke();

