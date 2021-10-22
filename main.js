function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(450, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    rect(30, 30, 580, 420);

    circle(40, 30, 60);
    circle(40, 60, 30);
    circle(40, 90, 60);
    circle(40, 120, 30);
    circle(40, 150, 60);
    circle(40, 180, 30);
    circle(40, 210, 60);
    circle(40, 240, 30);
    circle(40, 270, 60);
    circle(40, 300, 30);
    circle(40, 330, 60);
    circle(40, 360, 30);
    circle(40, 390, 60);
    circle(40, 420, 30);
    circle(40, 450, 60);

    circle(600, 30, 60);
    circle(600, 60, 30);
    circle(600, 90, 60);
    circle(600, 120, 30);
    circle(600, 150, 60);
    circle(600, 180, 30);
    circle(600, 210, 60);
    circle(600, 240, 30);
    circle(600, 270, 60);
    circle(600, 300, 30);
    circle(600, 330, 60);
    circle(600, 360, 30);
    circle(600, 390, 60);
    circle(600, 420, 30);
    circle(600, 450, 60);
    image(video, 80, 50, 480, 380);
}