import makeFloorCollision from './makeFloorCollision.js'

export default function (main) {
  main.makeFlappyBird = () => {
    const flappyBird = {
      spriteX: 0,
      spriteY: 0,
      width: 33,
      height: 24,
      canvasX: 10,
      canvasY: 50,
      jumping: 4.6,

      jump() {
        flappyBird.speed = -flappyBird.jumping
      },

      gravity: 0.25,
      speed: 0,

      update() {
        if (makeFloorCollision(flappyBird, main.floor)) {
          main.hitAudio.play()
          main.changeScreen(main.display.over)
        }

        flappyBird.speed += flappyBird.gravity

        flappyBird.canvasY += flappyBird.speed
      },

      movements: [
        { spriteX: 0, spriteY: 0 },
        { spriteX: 0, spriteY: 26 },
        { spriteX: 0, spriteY: 52 },
        { spriteX: 0, spriteY: 26 },
      ],

      actualFrame: 0,

      updateFrames() {
        const framesInterval = 10
        const passOnInterval = main.frames % framesInterval === 0

        if (passOnInterval) {
          const baseIncrease = 1
          const increase = baseIncrease + flappyBird.actualFrame
          const baseLoop = flappyBird.movements.length

          flappyBird.actualFrame = increase % baseLoop
        }
      },

      draw() {
        flappyBird.updateFrames()
        const { spriteX, spriteY } = flappyBird.movements[
          flappyBird.actualFrame
        ]

        main.context.drawImage(
          main.sprites,
          spriteX,
          spriteY,
          flappyBird.width,
          flappyBird.height,
          flappyBird.canvasX,
          flappyBird.canvasY,
          flappyBird.width,
          flappyBird.height
        )
      },
    }

    return flappyBird
  }
}
