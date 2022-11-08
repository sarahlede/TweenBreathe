let percent = 0;
let smallestSize = 100;
let speed = .56;
let siz;

function setup() {
  createCanvas(1450, 822);
  rectMode(CENTER);
}

function draw() {
  background('light blue');

  siz = map2(percent, 0, 100, smallestSize*5, 100*5, SINUSOIDAL, BOTH);
    // noStroke();
    let from = color(218, 165, 32);
    let to = color(72, 61, 139);
    let gradient = lerpColor(from, to, sin(frameCount * 0.005));
    fill(gradient);
    ellipse(width/2, height/2, siz, siz);
 noFill()
  stroke(100, 100, 240);
  // rect(230, 390, 440, 150);

  textSize(24);
  text('Welcome to the 20% breathe excercise', 40, 320);

  textSize(16);
  text('1. Inhale a deep breath, this will put your circle at 100%', 40, 370);
  text('2. Slowly begin to exhale in 20% increments', 40, 420);

  textSize(10);
  text('(Ex: your first exhale will leave your circle at 80% and last will be 0%)', 40, 435);

  textSize(16);
  text('3. After every 20% exhale, inhale back to 100%', 40, 480);
  text('4. Repeat until calmer...', 40, 520);

  percent += speed;
  if (percent >= 100) { // got to the largest size
    smallestSize -= 20; // subtract from the smallest size 
  }
  if (smallestSize < 0 ) { // the smallest size has gotten as small as it should get
    smallestSize = 100; // start over
  }

  if (percent < 0 || percent > 100) speed *= -1;

}
