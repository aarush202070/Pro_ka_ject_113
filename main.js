function preload(){

}

function setup()
{
    canvas = createCanvas(700, 450);
    canvas.position(320, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}


function draw() {
    
    image(video, 0, 0, 700, 550);
    circle(20, 20, 100, 27)
    circle(680, 20, 100)
    circle(20, 430, 100, 27)
    circle(680, 430, 100)
  
    tint(tint_color);
  
}

function take_snapshot(){
    save(prompt("Enter file name:", "ba ba black sheep.png")) 
    }


function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}