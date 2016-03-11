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