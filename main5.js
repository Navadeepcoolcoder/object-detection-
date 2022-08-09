img = "";
status = "";



function preload()
{
    img = loadImage('trees.jpg');
}



function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    
}

function modelLoaded() 
{
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
}





function draw()
{
    image(img, 0, 0, 640, 420);
    
}

function gotResult(error, results)
{
    if (error)
    {
        console.log(error);
    }
    console.log(results);
}