var hrAngle,minAngle,secAngle,hr,min,sec;


function setup() {
  createCanvas(displayWidth/2+683,displayHeight/2+100);
  angleMode(DEGREES);
  
}

function draw() {
  background(0,255,144);

  translate(600,300);

  hr = hour();
  min = minute();
  sec = second();

  secAngle = map(sec,0,60,0,360);
  minAngle = map(min,0,60,0,360);
  hrAngle = map(hr,0,12,0,360);

  push()
    rotate(-90);
    rotate(secAngle);
    stroke("yellow");
    strokeWeight(5);
    line(0,0,100,0);
  pop();

  push()
    rotate(-90);
    rotate(minAngle);
    stroke("red");
    strokeWeight(5);
    line(0,0,75,0);
  pop();

  push()
    rotate(-90);
    rotate(hrAngle);
    stroke("blue");
    strokeWeight(5);
    line(0,0,50,0);
  pop();

  push()
   //adding numbers to time
    fill("black");
    textSize(20);
    text("CLOCK",-10,-200)
    text("12",0,-100);
    text("1",60,-80);
    text("2",90,-40);
    text("3",100,0);
    text("4",90,40);
    text("5",60,80);
    text("6",0,100);
    text("11",-60,-80);
    text("10",-90,-40); 
    text("9",-100,0);
    text("7",-60,80);
    text("8",-90,40);
  pop();

  push()
    rotate(-90);
    strokeWeight(10)
    noFill();
    stroke("yellow");
    arc(0,0,300,300,0,secAngle);
    stroke("red")
    arc(0,0,280,280,0,minAngle)
    stroke("blue")
    arc(0,0,260,260,0,hrAngle)
  pop()

  drawSprites();
}
