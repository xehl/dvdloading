/* add an image of the dvd logo */
var dvdLogo = document.createElement("img");
dvdLogo.src =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/DVD_logo.svg/512px-DVD_logo.svg.png";
document.body.appendChild(dvdLogo);
dvdLogo.style.width = "20%";
dvdLogo.style.height = "20%";

/* center the div */
dvdLogo.style.position = "absolute";
dvdLogo.style.left = "40%";
dvdLogo.style.top = "40%";
/* make the div slide diagonally, bouncing off the sides of the window */
var x = 0;
var y = 0;
var xDirection = 1;
var yDirection = 1;
var xSpeed = 1;
var ySpeed = 1;
var xMax = window.innerWidth - dvdLogo.width;
var yMax = window.innerHeight - dvdLogo.height;
console.log(yMax);
console.log(dvdLogo.width);
console.log(window.innerHeight);
function move() {
  x += xDirection * xSpeed;
  y += yDirection * ySpeed;
  if (x > xMax) {
    x = xMax;
    xDirection = -1;
    changeBackgroundColor();
  } else if (x < 0) {
    x = 0;
    xDirection = 1;
    changeBackgroundColor();
  }
  if (y > yMax) {
    y = yMax;
    yDirection = -1;
    changeBackgroundColor();
  } else if (y < 0) {
    y = 0;
    yDirection = 1;
    changeBackgroundColor();
  }
  dvdLogo.style.left = x + "px";
  dvdLogo.style.top = y + "px";
}
setInterval(move, 5);

/* change the background color of the window to a random color each time the dvdLogo div hits xMax or yMax */
function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + "," + g + "," + b + ")";
}
function changeBackgroundColor() {
  document.body.style.backgroundColor = randomColor();
}
