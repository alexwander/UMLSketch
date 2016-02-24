/**
 * Created by alexandr on 23.02.2016.
 */



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


    var canvas = document.getElementById("drawingCanvas");
    var context = canvas.getContext("2d");
// Set the line width and color (for all the lines).
    context.lineWidth = 20;
    context.strokeStyle = "rgb(205,40,40)";
// Draw the first line, with the standard butt ending.
    context.moveTo(10,50);
    context.lineTo(400,50);
    context.lineCap = "butt";
    context.stroke();
// Draw the second line, with a round cap.
    context.beginPath();
    context.moveTo(10,120);
    context.lineTo(400,120);
    context.lineCap = "round";
    context.stroke();
// Draw the third line, with a square cap.
    context.beginPath();
    context.moveTo(10,190);
    context.lineTo(400,190);
    context.lineCap = "square";
    context.stroke();



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