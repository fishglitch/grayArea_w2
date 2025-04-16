let paintColor;
let blueButton, greenButton;
let paletteWidth = 100;

function setup() {
  let cnv = createCanvas(500,400);
  cnv.parent('specialDiv');

  blueButton = new PaintButton(30, 30, 40, color("#3F5DE6"));
  greenButton = new PaintButton(30, 100, 40, color("#2B7D28"));
  paintColor = color(255, 128);

  background(0);
}

function draw() {
  
  // handle mouse pressed
  if (mouseIsPressed == true) {
    if (mouseX > paletteWidth) {
      // paint if we're in the drawing area
      noStroke();
      fill(paintColor);
      ellipse(mouseX, mouseY, 20);
    } else if (blueButton.over()) {
      // clicked blue button, change to blue paint
      paintColor = blueButton.color;
    } else if (greenButton.over()) {
      // clicked green button, change to green paint
      paintColor = greenButton.color;
    }
  }

  drawPalette();
}

/* draw the sidebar and two paint buttons */
function drawPalette() {
  
  // this rectangle serves as the "background" for the
  // palette, so we can do hover affects in this area
  // even though we're not refreshing the background
  // in draw()
  fill(50);
  noStroke();
  rect(0, 0, paletteWidth, height);

  blueButton.render();
  greenButton.render();
}

/*
 * definition of a paint color button, used to 
 * select the paint color for drawing.
 */
class PaintButton {
  constructor(x, y, size, paintColor) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = paintColor;
  }

  // check if the mouse cursor is over the button
  over() {
    return mouseX > this.x && mouseX < this.x + this.size &&
      mouseY > this.y && mouseY < this.y + this.size;
  }

  // draws the button using its x, y, size, and color
  render() {
    if (this.over()) {
      stroke(255);
    } else {
      noStroke();
    }
    fill(this.color);
    rect(this.x, this.y, this.size);
  }
}
