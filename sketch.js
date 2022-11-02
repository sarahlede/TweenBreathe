let percent = 0;
let smallestSize = 100;
let speed = .7;
let siz;

function setup() {
  createCanvas(800 ,800);
  rectMode(CENTER);
}

function draw() {
  background(125);

  siz = map2(percent, 0, 100, smallestSize*5, 100*5, SINUSOIDAL, BOTH);
  ellipse(width/2, height/2, siz, siz);

  percent += speed;
  if (percent >= 100) { // got to the largest size
    smallestSize -= 20; // subtract from the smallest size 
  }
  if (smallestSize < 0 ) { // the smallest size has gotten as small as it should get
    smallestSize = 100; // start over
  }

  if (percent < 0 || percent > 100) speed *= -1;

}
