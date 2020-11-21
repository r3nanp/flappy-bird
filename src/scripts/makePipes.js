import flappyBirdCollision from './makeFlappyPipeCollision.js'

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
        pipes.pipeList.forEach(list => {
          const pipeRandomY = list.y
          const spacePipes = 92

          const pipeSkyX = list.x
          const pipeSkyY = pipeRandomY

          list.pipeSky = {
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
          const pipeFloorX = list.x
          const pipeFloorY = pipes.height + spacePipes + pipeRandomY

          list.pipeFloor = {
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
            x: main.canvas.width,
            y: -150 * (Math.random() + 1),
          })
        }

        pipes.pipeList.forEach(list => {
          list.x = list.x - 2

          if (flappyBirdCollision(list)) {
            setTimeout(() => {
              main.hitAudio.play()
            }, 1)
            main.changeDisplay(main.display.over)
          }

          if (list.x + pipes.width <= 0) {
            pipes.pipeList.shift()
          }
        })
      },
    }
    return pipes
  }
}
