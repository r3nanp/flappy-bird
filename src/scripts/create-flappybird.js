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

      // Flappy bird physics
      jumping: 4.6,
      gravity: 0.25,
      speed: 0,

      jump() {
        // Jump! It will decrease speed when jumping.
        flappyBird.speed = -flappyBird.jumping
      },

      update() {
        if (makeFloorCollision(flappyBird)) {
          main.hitAudio.play()
          main.changeScreen(main.display.over)
        }

        flappyBird.speed += flappyBird.gravity // It will increase speed by gravity

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
        const { spriteX, spriteY } =
          flappyBird.movements[flappyBird.actualFrame]

        flappyBird.updateFrames()

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
