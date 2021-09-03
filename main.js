function preload(){
  currTintColor = color('#e695b0');
  
}
function setup(){
    canvas=createCanvas(690,600);
    canvas.position(300,150)
    video=createCapture(VIDEO);
    video.hide();
    img=loadImage('Untitled design.gif');

    
}


function draw(){
  

 
image(video,130,174,472,330)
image(img,103,154,130,120)
tint(currTintColor);
noStroke()
fill(14, 232, 101)
rect(75,135,560,30)
fill(14, 232, 101)
rect(75,520,575,30,5)
fill(14, 232, 101)
rect(75,135,25,415,5)
fill(14, 232, 101)
rect(625,135,25,409,5)

fill(245, 240, 240)
ellipse(195, 150, 25, 25);
fill(173, 66, 16)
ellipse(285, 150, 25, 25);
fill(245, 240, 240)
ellipse(375, 150, 25, 25);
fill(173, 66, 16)
ellipse(465, 150, 25, 25);
fill(245, 240, 240)
ellipse(555, 150, 25, 25);
fill(173, 66, 16)
ellipse(635, 150, 25, 25);
fill(245, 240, 240)
ellipse(637, 230, 20, 20);
fill(173, 66, 16)
ellipse(637, 310, 20, 20);
fill(245, 240, 240)
ellipse(637, 400, 20, 20);

translate(103, 154);
  noStroke();
  for (let i = 0; i < 10; i ++) {
      fill(245, 232, 137)
    ellipse(0, 30, 20, 90);
    rotate(PI/5);
    
  }
  fill(245, 240, 240)
ellipse(-15, 90, 20, 20);
  fill(51, 51, 158)
ellipse(-2, 3, 25, 25);
fill(173, 66, 16)
ellipse(-15, 170, 20, 20);
fill(245, 240, 240)
ellipse(-15, 250, 20, 20);
fill(173, 66, 16)
ellipse(-15, 340, 20, 20);
fill(245, 240, 240)
ellipse(25, 380, 20, 20);
fill(173, 66, 16)
ellipse(100, 380, 20, 20);
fill(245, 240, 240)
ellipse(185, 380, 20, 20);
fill(173, 66, 16)
ellipse(265, 380, 20, 20);
fill(245, 240, 240)
ellipse(345, 380, 20, 20);
fill(173, 66, 16)
ellipse(435, 380, 20, 20);
  translate(510, 354);

  noStroke();
  for (let i = 0; i < 10; i ++) {
      fill(245, 232, 137)
    ellipse(0, 30, 20, 90);
    rotate(PI/5);
  }

fill(51, 51, 158)
ellipse(-2, 3, 25, 25);
  
}
function take_snapshot(){
  save('Yourpic.png');
 
  image();
}


