
function setup() {
  // begin coding here...
  createCanvas(700, 600);
  strokeWeight(2)
}

function draw() {
  // begin coding here...
  background(204);
  for (var i = 0; i < width; i += 12)
    line(width/2, height/2, i, 0)

  
  for (let i =0; i < width; i += 12)
  line(width/2, height/2, i, 600)
}


