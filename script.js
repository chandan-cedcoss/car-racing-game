const car = document.getElementById("car");

let carPosition = { x: 375, y: 10 };

function moveLeft() {
  if (carPosition.x > 0) {
    carPosition.x -= 10;
    updateCarPosition();
  }
}

function moveRight() {
  if (carPosition.x < 750 - 50) {
    carPosition.x += 10;
    updateCarPosition();
  }
}

function moveUp() {
  if (carPosition.y < 400) {
    carPosition.y += 10;
    updateCarPosition();
  }
}

function moveDown() {
  if (carPosition.y > 0) {
    carPosition.y -= 10;
    updateCarPosition();
  }
}

function updateCarPosition() {
  car.style.left = carPosition.x + "px";
  car.style.bottom = carPosition.y + "px";
}
