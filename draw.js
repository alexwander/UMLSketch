// This function stores the details for a single circle.
function Circle(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.isSelected = false;
}

// This function stores the details for a single circle.
function Sqar(x, y, color) {
    this.x = x;
    this.y = y;

    this.color = color;
    this.isSelected = false;
}





// This array hold all the circles on the canvas.
var circles = [];

var canvas;
var context;

window.onload = function() {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

    canvas.onmousedown = canvasClick;
    canvas.onmouseup = stopDragging;
    canvas.onmouseout = stopDragging;
    canvas.onmousemove = dragCircle;
};

function addRandomCircle() {
    // Give the circle a random size and position.
    var radius = 50;
    var x = randomFromTo(0, canvas.width);
    var y = randomFromTo(0, canvas.height);

    // Give the circle a random color.
    var colors = ["green", "blue", "red", "yellow", "magenta", "orange", "brown", "purple", "pink"];
    var color = colors[randomFromTo(0, 8)];

    // Create the new circle.
    var circle = new Circle(x, y, radius, color);

    // Store it in the array.
    circles.push(circle);

    // Redraw the canvas.
    drawCircles();
}

function addRandomSqare() {

    var x = randomFromTo(0, canvas.width);
    var y = randomFromTo(0, canvas.height);

    // Give the circle a random color.
    var colors = ["green", "blue", "red", "yellow", "magenta", "orange", "brown", "purple", "pink"];
    var color = colors[randomFromTo(0, 8)];

    var rect = new Sqar(x, y, color);

    circles.push(rect);
// Redraw the canvas.
    drawRect();
}





function clearCanvas() {
    // Remove all the circles.
    circles = [];

    // Update the display.
    drawCircles();
}


function drawRect() {
    var bw = 40;
    var bh = 80;
    var p = 1;
    var cw = bw + (p*2) + 1;
    var ch = bh + (p*2) + 1;

    for (var x = 0; x <= bw; x += 40) {
        context.moveTo(0.5 + x + p, p);
        context.lineTo(0.5 + x + p, bh + p);
    }


    for (var x = 0; x <= bh; x += 40) {
        context.moveTo(p, 0.5 + x + p);
        context.lineTo(bw + p, 0.5 + x + p);
    }


}

function drawCircles() {

    // Clear the canvas.
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Go through all the circles.
    for(var i=0; i<circles.length; i++) {
        var circle = circles[i];


        // Draw the circle.
        context.globalAlpha = 0.85;
        context.beginPath();
        context.arc(circle.x, circle.y, circle.radius, 0, Math.PI*2);
        //context.fillStyle = circle.color;
        context.strokeStyle = "black";

        if (circle.isSelected) {
            context.lineWidth = 2;
        }
        else {
            context.lineWidth = 1;
        }
        context.fill();
        context.stroke();
    }
}


var previousSelectedCircle;

function canvasClick(e) {
    // Get the canvas click coordinates.
    var clickX = e.pageX - canvas.offsetLeft;
    var clickY = e.pageY - canvas.offsetTop;

    // Look for the clicked circle.
    for(var i=circles.length-1; i>=0; i--) {
        var circle = circles[i];

        var distanceFromCenter = Math.sqrt(Math.pow(circle.x - clickX, 2) + Math.pow(circle.y - clickY, 2))
        if (distanceFromCenter <= circle.radius) {
            if (previousSelectedCircle != null) previousSelectedCircle.isSelected = false;
            previousSelectedCircle = circle;

            circle.isSelected = true;

            // Allow this circle to be moved (by dragCircle function).
            isDragging = true;

            drawCircles();
            return;
        }
    }
}

var isDragging = false;

function stopDragging() {
    isDragging = false;
}

function dragCircle(e) {
    // Is a circle being dragged?
    if (isDragging == true) {
        // Make sure there really is a circle object (just in case).
        if (previousSelectedCircle != null) {
            // Find the new position of the mouse.
            var x = e.pageX - canvas.offsetLeft;
            var y = e.pageY - canvas.offsetTop;

            // Move the circle to that position.
            previousSelectedCircle.x = x;
            previousSelectedCircle.y = y;

            // Update the canvas.
            drawCircles();
        }
    }
}


function randomFromTo(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
}



///////////////////////////////////////////////


//var canvas;
//var context;
//
//window.onload = function() {
//    // Get the canvas and the drawing context.
//    canvas = document.getElementById("drawingCanvas");
//    context = canvas.getContext("2d");
//
//    // Attach the events that you need for drawing.
//    canvas.onmousedown = startDrawing;
//    canvas.onmouseup = stopDrawing;
//    canvas.onmouseout = stopDrawing;
//    canvas.onmousemove = draw;
//};
//
//var isDrawing = false;
//
//function startDrawing(e) {
//    // Start drawing.
//    isDrawing = true;
//
//    // Create a new path (with the current stroke color and stroke thickness).
//    context.beginPath();
//
//    // Put the pen down where the mouse is positioned.
//    context.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
//}
//
//function stopDrawing() {
//    isDrawing = false;
//}
//
//function draw(e) {
//    if (isDrawing == true) {
//        // Find the new position of the mouse.
//        var x = e.pageX - canvas.offsetLeft;
//        var y = e.pageY - canvas.offsetTop;
//
//        // Draw a line to the new position.
//        context.lineTo(x, y);
//        context.stroke();
//    }
//}
//
//// Keep track of the previous clicked <img> element for color.
//var previousColorElement;
//
//function changeColor(color, imgElement) {
//    // Change the current drawing color.
//    context.strokeStyle = color;
//
//    // Give the newly clicked <img> element a new style.
//    imgElement.className = "Selected";
//
//    // Return the previously clicked <img> element to its normal state.
//    if (previousColorElement != null) previousColorElement.className = "";
//    previousColorElement = imgElement;
//}
//
//// Keep track of the previous clicked <img> element for thickness.
//var previousThicknessElement;
//
//function changeThickness(thickness, imgElement) {
//    // Change the current drawing thickness.
//    context.lineWidth = thickness;
//
//    // Give the newly clicked <img> element a new style.
//    imgElement.className = "Selected";
//
//    // Return the previously clicked <img> element to its normal state.
//    if (previousThicknessElement != null) previousThicknessElement.className = "";
//    previousThicknessElement = imgElement;
//}
//
//
//function clearCanvas() {
//    context.clearRect(0, 0, canvas.width, canvas.height);
//}
//
//function saveCanvas() {
//    // Find the <img> element.
//    var imageCopy = document.getElementById("savedImageCopy");
//
//    // Show the canvas data in the image.
//    imageCopy.src = canvas.toDataURL();
//
//    // Unhide the <div> that holds the <img>, so the picture is now visible.
//    var imageContainer = document.getElementById("savedCopyContainer");
//    imageContainer.style.display = "block";
//}
//
//
//////////////////////////////////////Circle element
//
//
//
//// This function stores the details for a single circle.
//function Circle(x, y, radius, color) {
//    this.x = x;
//    this.y = y;
//    this.radius = radius;
//    this.color = color;
//    this.isSelected = false;
//}
//
//
//
//
//
//
//
//
