/**
 * Created by alexandr on 23.02.2016.
 */


window.onload = function() {

    var canvas = document.getElementById("drawingCanvas");
    var context = canvas.getContext("2d");
    context.moveTo(250, 50);
    context.lineTo(50, 250);
    context.lineTo(450, 250);
    context.closePath();
// Paint the inside.
    context.fillStyle = "blue";
    context.fill();
// Draw the outline.
    context.lineWidth = 10;
    context.strokeStyle = "red";
    context.stroke();


}




var canvas;
var context;
window.onload = function() {
// Get the canvas and the drawing context.
    canvas = document.getElementById("drawingCanvas");
    context = canvas.getContext("2d");
    // Attach the events that you need for drawing.
    canvas.onmousedown = startDrawing;
    canvas.onmouseup = stopDrawing;
    canvas.onmouseout = stopDrawing;
    canvas.onmousemove = draw;

};

// Keep track of the previous clicked <img> element for color.
var previousColorElement;
function changeColor(color, imgElement) {
// Change the current drawing color.
    context.strokeStyle = color;
// Give the newly clicked <img> element a new style.
    imgElement.className = "Selected";
// Return the previously clicked <img> element to its normal state.
    if (previousColorElement != null) previousColorElement.className = "";
    previousColorElement= imgElement;
}



var isDrawing = false;
function startDrawing(e) {
// Start drawing.
    isDrawing = true;
// Create a new path (with the current stroke color and stroke thickness).
    context.beginPath();
// Put the pen down where the mouse is positioned.
    context.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
}


function draw(e) {
    if (isDrawing == true) {
// Find the new position of the mouse.
        var x = e.pageX - canvas.offsetLeft;
        var y = e.pageY - canvas.offsetTop;
// Draw a line to the new position.
        context.lineTo(x, y);
        context.stroke();
    }
}

function stopDrawing() {
    isDrawing = false;
}


function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}


function saveCanvas() {
// Find the <img> element.
    var imageCopy = document.getElementById("savedImageCopy");
// Show the canvas data in the image.
    imageCopy.src = canvas.toDataURL();
// Unhide the <div> that holds the <img>, so the picture is now visible.
    var imageContainer = document.getElementById("savedCopyContainer");
    imageContainer.style.display = "block";
}



var circles = [];





// Create a new circle object, and store it in a variable named myCircle.
var myCircle = new Circle();
// Change the radius.
myCircle.radius = 20;

function Circle(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.isSelected = false;
}


function addRandomCircle() {
// Give the circle a random size and position.
    var radius = randomFromTo(10, 60);
    var x = randomFromTo(0, canvas.width);
    var y = randomFromTo(0, canvas.height);
// Give the circle a random color.
    var colors = ["green", "blue", "red", "yellow", "magenta",
        "orange", "brown", "purple", "pink"];
    var color = colors[randomFromTo(0, 8)];
// Create the new circle.
    var circle = new Circle(x, y, radius, color);
// Store it in the array.
    circles.push(circle);
    // Redraw the canvas.
    drawCircles();
}
