let MX = []
let MY = []
function setup(){
createCanvas(400,400)
}
function draw(){
    background(255)
MX.push(mouseX)
MY.push(mouseY)
if(MX.length > 5){
    MX.shift()
    MY.shift()
}
drawTail()
}
    function drawTail() {
  noStroke();
  for (let i = 0; i < MX.length; i++) {
    const stepsFromNewest = (MX.length - 1) - i;
    const d = 20 - 2 * stepsFromNewest;
    const alpha = 255 - stepsFromNewest * 40;
    fill(120, 180, 255, alpha);
    circle(MX[i], MY[i], d);
  }
}
