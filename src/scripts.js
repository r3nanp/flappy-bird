let frames = 0;

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
    /* Background movimentado */
    const moveBackground = 1;
    const repeat = background.width / 2;
    const moving = background.canvasX - moveBackground

    background.canvasX = moving % repeat;

    context.fillStyle = '#70c5ce';
    context.fillRect(0,0, screen.width, screen.height)

    context.drawImage(
      sprites,
      background.spriteX, background.spriteY, // x and y
      background.width, background.height,    // cut on sprite
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

function makeFloor() {
  const floor = {
    spriteX: 0,
    spriteY: 610,
    width: 224,
    height: 112,
    canvasX: 0,
    canvasY: screen.height - 112,
    update() {
      const moveFloor = 1;
      const repeat = floor.width / 2;
      const moving = floor.canvasX - moveFloor

      floor.canvasX = moving % repeat;
    },

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

  return floor;
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
      if (makeCollision(flappyBird, global.floor)) {
        console.log('Collision')
        hitAudio.play();

        setTimeout(() => {
          changeDisplay(display.main)
        }, 300)
        return;
      }

      flappyBird.speed = flappyBird.speed + flappyBird.gravity;

      flappyBird.canvasY += flappyBird.speed;
    },

    movements: [
      { spriteX: 0, spriteY: 0, },
      { spriteX: 0, spriteY: 26, },
      { spriteX: 0, spriteY: 52, },
      { spriteX: 0, spriteY: 26, },
    ],

    actualFrame: 0,

    updateFrames() {
      const framesInterval = 10;
      const passOnInterval = frames % framesInterval === 0;

      if (passOnInterval) {   
        const baseIncrease = 1;
        const increase = baseIncrease + flappyBird.actualFrame;
        const baseLoop = flappyBird.movements.length;
        
        flappyBird.actualFrame = increase % baseLoop;
      }
    },

    draw() {
      flappyBird.updateFrames()
      const { spriteX, spriteY } = flappyBird.movements[flappyBird.actualFrame];

      context.drawImage(
        sprites,
        spriteX, spriteY,
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
      global.floor = makeFloor();
    },

    draw() {
      background.draw();
      global.floor.draw();

      global.flappyBird.draw();
      getReady.draw();
    },

    click() {
      changeDisplay(display.game);
    },

    update() {
      global.floor.update();
    },
  },

  game: {
    draw() {
      background.draw();
      global.floor.draw();

      global.flappyBird.draw();
    },

    click() {
      global.flappyBird.jump();
    },
  
    update() {
      global.flappyBird.update();
      global.floor.update();
    },
  },
};

function reloadDraw() {
  displayActive.draw();
  displayActive.update();

  frames += 1;

  requestAnimationFrame(reloadDraw);
}

window.addEventListener('click', () => {
  if (displayActive.click) {
    displayActive.click()
  }

})

changeDisplay(display.main);

reloadDraw();