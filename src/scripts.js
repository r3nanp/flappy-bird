const sprites = new Image();
sprites.src = './images/sprites.png';

const hitAudio = new Audio();
hitAudio.src = './effects/hitsound.mp3';

const screen = document.getElementById('screen');
const context = screen.getContext('2d');

// Game styles
const background = {
  spriteX: 390,
  spriteY: 0,
  width: 275,
  height: 204,
  canvasX: 0,
  canvasY: screen.height - 204,
  draw() {
    context.fillStyle = '#70c5ce';
    context.fillRect(0,0, screen.width, screen.height)

    context.drawImage(
      sprites,
      background.spriteX, background.spriteY, // Coordenada x e y
      background.width, background.height,    // Corte no sprite
      background.canvasX, background.canvasY,
      background.width, background.height,
    );

    context.drawImage(
      sprites,
      background.spriteX, background.spriteY,
      background.width, background.height,
      (background.canvasX + background.width), background.canvasY,
      background.width, background.height,
    );
  }
}

const floor = {
  spriteX: 0,
  spriteY: 610,
  width: 224,
  height: 112,
  canvasX: 0,
  canvasY: screen.height - 112,
  draw() {
    context.drawImage(
      sprites,
      floor.spriteX, floor.spriteY,
      floor.width, floor.height,
      floor.canvasX, floor.canvasY,
      floor.width, floor.height,
    );

    context.drawImage(
      sprites,
      floor.spriteX, floor.spriteY,
      floor.width, floor.height,
      (floor.canvasX + floor.width), floor.canvasY,
      floor.width, floor.height,
    );
  },
}

function makeCollision(flappyBird, floor) {
  const flappyBirdY = flappyBird.canvasY + flappyBird.height;

  const floorY = floor.canvasY; 

  if (flappyBirdY >= floorY) {
    return true;
  }

  return false;
}

function makeFlappyBird() { 
  const flappyBird = {
    spriteX: 0,
    spriteY: 0,
    width: 33,
    height: 24,
    canvasX: 10,
    canvasY: 50,
    jumping: 4.6,

    jump() {
      flappyBird.speed = -flappyBird.jumping;
    },

    gravity: 0.75,
    speed: 0,

    update() {
      if (makeCollision(flappyBird, floor)) {
        console.log('Collision')
        hitAudio.play();

        setTimeout(() => {
          changeDisplay(display.main)
        }, 1000)
        return;
      }

      flappyBird.speed = flappyBird.speed + flappyBird.gravity;

      flappyBird.canvasY += flappyBird.speed;
    },

    draw() {
      context.drawImage(
        sprites,
        flappyBird.spriteX, flappyBird.spriteY,
        flappyBird.width, flappyBird.height,
        flappyBird.canvasX, flappyBird.canvasY,
        flappyBird.width, flappyBird.height,
      );
    },
  }

  return flappyBird;
}

// Initial menu
const getReady = {
  spriteX: 134,
  spriteY: 0,
  width: 174,
  height: 152,
  canvasX: (screen.width / 2) - 174 / 2,
  canvasY: 50,
  draw() {
    context.drawImage(
      sprites,
      getReady.spriteX, getReady.spriteY,
      getReady.width, getReady.height,
      getReady.canvasX, getReady.canvasY,
      getReady.width, getReady.height,
    );
  }
}

// Screens
const global = {};

let displayActive = {};

function changeDisplay(newDisplay) {
  displayActive = newDisplay;

  if (displayActive.started) {
    displayActive.started();
  }
}

const display = {
  main: {
    started() {
      global.flappyBird = makeFlappyBird();
    },

    draw() {
      background.draw();
      floor.draw();

      global.flappyBird.draw();
      getReady.draw();
    },

    click() {
      changeDisplay(display.game);
    },

    update() {

    },
  },

  game: {
    draw() {
      background.draw();
      floor.draw();

      global.flappyBird.draw();
    },

    click() {
      global.flappyBird.jump();
    },
  
    update() {
      global.flappyBird.update();
    },
  },
};

function reloadDraw() {
  displayActive.draw();
  displayActive.update();

  requestAnimationFrame(reloadDraw);
}

window.addEventListener('click', () => {
  if (displayActive.click) {
    displayActive.click()
  }

})

changeDisplay(display.main);

reloadDraw();