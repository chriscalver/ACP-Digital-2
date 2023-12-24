const message = '#BlackLivesMatter';
const messageX = 20;
const messageY = 150;

function setup() {
  createCanvas(300, 300);
  textSize(32);
}

function draw() {
  background(32);

  if (isMouseInsideText(message, messageX, messageY)) {
    cursor(HAND);
    fill(0, 200, 255);
    stroke(0, 200, 255);
  } else {
    cursor(ARROW);
    fill(255);
    stroke(255);
  }

  text(message, messageX, messageY);
}

function mouseClicked() {
  if (isMouseInsideText(message, messageX, messageY)) {
    window.open('https://blacklivesmatter.com/', '_blank');
  }
}

function isMouseInsideText(message, messageX, messageY) {
  const messageWidth = textWidth(message);
  const messageTop = messageY - textAscent();
  const messageBottom = messageY + textDescent();

  return mouseX > messageX && mouseX < messageX + messageWidth &&
    mouseY > messageTop && mouseY < messageBottom;
}