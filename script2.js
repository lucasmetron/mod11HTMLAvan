let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");

let circle = {

     x : 250,
     y : 250,
     raio : 50,
     inicio : 4.7,
     fim : 0 
}

function drawCircle(c){

    ctx.beginPath();
    ctx.rect (0,0,500,500);
    ctx.fillStyle = "beige";
    ctx.fill();

    ctx.beginPath();
    ctx.lineWidth = 6
    ctx.strokeStyle = "purple";
    ctx.arc(c.x,c.y,c.raio,c.inicio,c.fim);
    ctx.stroke();
}

drawCircle(circle);

setInterval(function(){

    if(circle.fim < 2 * Math.PI){
        
        circle.fim += 0.1;
    } else{
        
        circle.fim = 0;
        

    }

    drawCircle(circle);

}, 50)




