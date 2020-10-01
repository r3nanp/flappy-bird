export default function (main) {
  main.makePipes = function () {
    let canvasY = 50
    let canvasX = 10
    let height = 24

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
      distance: 85,
      draw() {
        pipes.pipesList.forEach(list => {
          const pipeRandomY = list.y
          const spacePipes = 90

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
          (list.pipeSky = {
            x: pipeSkyX,
            y: pipes.height + pipeSkyY,
          }),
            (list.pipeFloor = {
              x: pipeFloorX,
              y: pipeFloorY,
            })
        })
      },

      flappyBirdCollision(list) {
        const flappyHead = canvasY
        const flappyFeet = canvasY + height

        if (canvasX >= list.x) {
          if (flappyHead <= list.pipeSky.y) {
            return true
          }

          if (flappyFeet >= list.pipeFloor.y) {
            return true
          }
        }

        return false
      },

      pipesList: [],
      update() {
        const passedFrames = main.frames % 100 === 0

        if (passedFrames) {
          pipes.pipesList.push({
            x: main.canvas.width,
            y: -175 * (Math.random() + 1),
          })
        }

        pipes.pipesList.forEach(list => {
          list.x = list.x - 2

          if (this.flappyBirdCollision(list)) {
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
