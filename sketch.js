let cor;
let posicaoHorizontal;
let posicaoVertical;


function setup() {
  createCanvas(800, 800);
  background("rgb(5,238,169)");
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  posicaoHorizontal = 300;
  posicaoVertical = 400;
  
  
}

function draw() {
  
  fill(cor);
  circle(posicaoHorizontal, posicaoVertical, 100);
  if(mouseX < posicaoHorizontal){posicaoHorizontal = posicaoHorizontal -1 }
  
  
}