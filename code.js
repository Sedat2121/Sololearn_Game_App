
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var x = 300;
var y = 350;
context.arc(x, y, 50, 0, 2 * Math.PI);
context.fillStyle = "red";
context.fill();

window.onload = function() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var x = 0;
    var y = 100;
    
    function draw() {
        // The clearRect() function clears the specified area of the canvas. 
        // that cleared the entire canvas.
        context.clearRect(0, 0, 600, 400);

        context.beginPath();
        context.arc(300, 200, size, 0, 2*Math.PI);
        context.fillStyle="red";
        context.fill();

        size += step;
        if (size >= 150 || size <= 50) {
            step *= -1;
        }
    }
    setInterval(draw, 100);
}
