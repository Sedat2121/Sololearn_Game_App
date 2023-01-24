
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
        context.beginPath();
        context.rect(x, y, 100, 100);
        context.fillStyle="red";
        context.fill();

        x += 10;
        if (x >= 600) {
            x = -100;
        }
    }
    setInterval(draw, 50);
}













// window.onload = function () {
//     let btn = document.getElementById("jump");
//     let count = 0;

//     btn.onclick = function () {
//         count += 1;
//     }
// }



