import flappyBirdCollision from './makeFlappyPipeCollision.js'

/**
 * Function to, randomly, create pipes.
 * @param {object} main - Main object
 */

export default function (main) {
  main.makePipes = () => {
    const pipes = {
      width: 52,
      height: 400,
      floor: {
        spriteX: 0,
        spriteY: 169,
      },
      sky: {
        spriteX: 52,
        spriteY: 169,
      },
      distance: 87,
      pipeList: [],

      draw() {
        pipes.pipeList.forEach(pipe => {
          const pipeRandomY = pipe.y
          const spacePipes = 92

          const pipeSkyX = pipe.x
          const pipeSkyY = pipeRandomY

          pipe.pipeSky = {
            x: pipeSkyX,
            y: pipes.height + pipeSkyY,
          }

          // Upper pipe
          main.context.drawImage(
            main.sprites,
            pipes.sky.spriteX,
            pipes.sky.spriteY,
            pipes.width,
            pipes.height,
            pipeSkyX,
            pipeSkyY,
            pipes.width,
            pipes.height
          )

          // Floor pipe
          const pipeFloorX = pipe.x
          const pipeFloorY = pipes.height + spacePipes + pipeRandomY

          pipe.pipeFloor = {
            x: pipeFloorX,
            y: pipeFloorY,
          }

          main.context.drawImage(
            main.sprites,
            pipes.floor.spriteX,
            pipes.floor.spriteY,
            pipes.width,
            pipes.height,
            pipeFloorX,
            pipeFloorY,
            pipes.width,
            pipes.height
          )
        })
      },

      update() {
        const passedFrames = main.frames % 100 === 0

        if (passedFrames) {
          pipes.pipeList.push({
            x: main.canvas.width, // Start to draw in the right side of the screen
            y: -150 * (Math.random() + 1), // Random pipe axis Y position
          })
        }

        pipes.pipeList.forEach(pipe => {
          /* Every time, that updated the pipes, it will move 2px to the left */
          pipe.x -= 2

          if (flappyBirdCollision(pipe)) {
            main.hitAudio.play()
            main.changeScreen(main.display.over)
          }

          // Remove pipes that are out of the screen
          if (pipe.x + pipes.width <= 0) {
            pipes.pipeList.shift()
          }
        })
      },
    }
    return pipes
  }
}
