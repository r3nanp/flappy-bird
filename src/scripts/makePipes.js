torimport flappyBirdCollision from './makeFlappyPipeCollision.js'

export default function (main) {
  main.makePipes = function () {
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
      draw() {
        pipes.pipesList.forEach(list => {
          const pipeRandomY = list.y
          const spacePipes = 92

          const pipeSkyX = list.x
          const pipeSkyY = pipeRandomY

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
          const pipeFloorX = list.x
          const pipeFloorY = pipes.height + spacePipes + pipeRandomY

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

          list.pipeSky = {
            x: pipeSkyX,
            y: pipes.height + pipeSkyY,
          },

          list.pipeFloor = {
            x: pipeFloorX,
            y: pipeFloorY,
          }
        })
      },

      pipesList: [],
      update() {
        const passedFrames = main.frames % 100 === 0

        if (passedFrames) {
          pipes.pipesList.push({
            x: main.canvas.width,
            y: -150 * (Math.random() + 1),
          })
        }

        pipes.pipesList.forEach(list => {
          list.x -= 2

          if (flappyBirdCollision(list)) {
            setTimeout(() => {
              main.hitAudio.play()
            }, 1)
            main.changeDisplay(main.display.over)
          }

          if (list.x + pipes.width <= 0) {
            pipes.pipesList.shift()
          }
        })
      },
    }
    return pipes
  }
}
