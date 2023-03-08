const canvas = document.getElementById('myCanvas');
canvas.width = 1000;
canvas.height = 500;

const ctx = canvas.getContext("2d");




// x and y axis for translating points

// x-axis
ctx.beginPath();
ctx.moveTo(canvas.width/2,0);
ctx.lineTo(canvas.width/2,canvas.height);
ctx.stroke();

// y-axis
ctx.beginPath();
ctx.moveTo(0,canvas.height/2);
ctx.lineTo(canvas.width,canvas.height/2);
ctx.stroke();


// hypothesis line from origin
// ctx.beginPath();
// ctx.moveTo(canvas.width/2,canvas.height/2);
// ctx.lineTo(canvas.width/2+50,canvas.height/2-50);
// ctx.stroke();

// now translating the origin and drawing a line
ctx.translate(canvas.width/2,canvas.height/2);

// ctx.beginPath();
// ctx.moveTo(0,0);
// ctx.lineTo(50,-50);
// ctx.stroke();

ctx.beginPath();
ctx.fillStyle ="red";
ctx.fillRect(-15,-25,30,50)

// rotating the rectangle
ctx.beginPath();
ctx.rotate(-0.5);
ctx.fillStyle ="pink";
ctx.fillRect(-15,-25,30,50)