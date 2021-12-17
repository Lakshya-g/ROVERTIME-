canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
nasa_mars_images_array = [
  "mars.jpg",
  "mars 1.jpg",
  "mars 2.jpg",
  "mars 3.jpg",
  "mars 4.jpg",
  "mars 5.jpg",
  "mars 6.jpg",
  "mars 7.jpg",
];
random_number = Math.floor(Math.random() * 8);
console.log(random_number);
rover_width = 100;
rover_height = 90;
background_image = nasa_mars_images_array[random_number];
console.log("background_image=" + background_image);
rover_image = "rover.png";
rover_x = 10;
rover_y = 10;
function add() {
  background_imgTag = new Image();
  background_imgTag.onload = uploadBackground;
  background_imgTag.src = background_image;
  rover_imgTag = new Image();
  rover_imgTag.onload = uploadrover;
  rover_imgTag.src = rover_image;
}
function uploadBackground() {
  ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadrover() {
  ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
  keypressed = e.keyCode;
  if (keypressed == "38") {
    up();
    console.log("up");
  }
  if (keypressed == "40") {
    down();
    console.log("down");
  }
  if (keypressed == "37") {
    left();
    console.log("left");
  }
  if (keypressed == "39") {
    right();
    console.log("right");
  }
}

function up() {
  if (rover_y >= 0) {
    rover_y = rover_y - 10;
    console.log(
      "When Up Arrow Key  Is Pressed, X = " + rover_x + " | Y =  " + rover_y
    );
    uploadBackground();
    uploadrover();
  }
}
function down() {
  if (rover_y <= 500) {
    rover_y = rover_y + 10;
    console.log(
      "Whem Down Arrow Key  Is Pressed, X = " + rover_x + " | Y =  " + rover_y
    );
    uploadBackground();
    uploadrover();
  }
}
function right() {
  if (rover_x <= 700) {
    rover_x = rover_x + 10;
    console.log(
      "When Right Arrow Key  Is Pressed, X = " + rover_x + " | Y =  " + rover_y
    );
    uploadBackground();
    uploadrover();
  }
}
function left() {
  if (rover_x >= 0) {
    rover_x = rover_x - 10;
    console.log(
      "When Left Arrow Key  Is Pressed, X = " + rover_x + " | Y =  " + rover_y
    );
    uploadBackground();
    uploadrover();
  }
}
