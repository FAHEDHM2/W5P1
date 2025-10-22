let diameter = [360,280,200,150];
let colourVals = [60,140,180,255];
function setup(){
    createCanvas(400,400)
}

function draw(){
background(255)
for(let i = 0 ; i < diameter.length; i++){
    fill(200,33,colourVals[i])
    circle(200,200,diameter[i])
}
}
function mouseClicked(){
    
    colourVals.unshift (colourVals.pop())
}