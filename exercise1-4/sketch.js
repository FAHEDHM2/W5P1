const CIRCLE_DIAM = 30;
let shapes = [];

function setup(){
    createCanvas(600,400)
    noStroke();
}
function draw(){
    background(255)
for ( let i = 0; i < shapes.length; i++){
const s = shapes[i];
fill(s.col);
circle(s.x, s.y, s.d);
}
}
function mousePressed(){
    addShape(mouseX,mouseY)
}
function keyPressed(){
    if( key === 'z'||key === 'Z'){
        undoLast();
    }
}
function addShape(x, y) {
  const shape = {
    x,
    y,
    d: CIRCLE_DIAM,
    col: color(random(60, 220), random(60, 220), random(60, 255))
  };
  
  shapes.push(shape);
}

function undoLast() {
  if (shapes.length > 0) {
    
    shapes.pop();
  }
}