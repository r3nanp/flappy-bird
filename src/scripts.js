import main from './scripts/index.js'


// Game styles
// function makeFlappyBird() {
//   const flappyBird = {
//     spriteX: 0,
//     spriteY: 0,
//     width: 33,
//     height: 24,
//     canvasX: 10,
//     canvasY: 50,
//     jumping: 4.6,

//     jump() {
//       flappyBird.speed = -flappyBird.jumping
//     },

//     gravity: 0.25,
//     speed: 0,

//     update() {
//       if (makeCollision(flappyBird, global.floor)) {
//         setTimeout(() => {
//           main.hitAudio.play()
//         }, 1)
//         changeDisplay(main.display.over)
//       }

//       flappyBird.speed += flappyBird.gravity

//       flappyBird.canvasY += flappyBird.speed
//     },

//     movements: [
//       { spriteX: 0, spriteY: 0 },
//       { spriteX: 0, spriteY: 26 },
//       { spriteX: 0, spriteY: 52 },
//       { spriteX: 0, spriteY: 26 },
//     ],

//     actualFrame: 0,

//     updateFrames() {
//       const framesInterval = 10
//       const passOnInterval = frames % framesInterval === 0

//       if (passOnInterval) {
//         const baseIncrease = 1
//         const increase = baseIncrease + flappyBird.actualFrame
//         const baseLoop = flappyBird.movements.length

//         flappyBird.actualFrame = increase % baseLoop
//       }
//     },

//     draw() {
//       flappyBird.updateFrames()
//       const { spriteX, spriteY } = flappyBird.movements[flappyBird.actualFrame]

//       main.context.drawImage(
//         main.sprites,
//         spriteX,
//         spriteY,
//         flappyBird.width,
//         flappyBird.height,
//         flappyBird.canvasX,
//         flappyBird.canvasY,
//         flappyBird.width,
//         flappyBird.height
//       )
//     },
//   }

//   return flappyBird
// }

function makePipes() {
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
        ;(list.pipeSky = {
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
      const flappyHead = global.flappyBird.canvasY
      const flappyFeet = global.flappyBird.canvasY + global.flappyBird.height

      if (global.flappyBird.canvasX >= list.x) {
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
      const passedFrames = frames % 100 === 0

      if (passedFrames) {
        pipes.pipesList.push({
          x: main.canvas.width,
          y: -175 * (Math.random() + 1),
        })
      }

      pipes.pipesList.forEach(list => {
        list.x = list.x - 2

        if (pipes.flappyBirdCollision(list)) {
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

// Screens
// const global = {}

// let displayActive = {}

// function changeDisplay(newDisplay) {
//   displayActive = newDisplay

//   if (displayActive.started) {
//     displayActive.started()
//   }
//   if (displayActive.over) {
//     displayActive.over()
//   }
// }

// const display = {
//   key: {
//     started() {
//       global.flappyBird = main.makeFlappyBird()
//       global.floor = main.floor
//       global.pipes = makePipes()
//     },

//     draw() {
//       main.background.draw()
//       global.flappyBird.draw()

//       global.floor.draw()
//       main.getReady.draw()
//     },

//     click() {
//       main.changeDisplay(display.game)
//     },

//     update() {
//       global.floor.update()
//     },
//   },

//   game: {
//     draw() {
//       main.background.draw()
//       global.pipes.draw()
//       global.floor.draw()

//       global.flappyBird.draw()
//     },

//     click() {
//       global.flappyBird.jump()
//     },

//     update() {
//       global.flappyBird.update()
//       global.floor.update()
//       global.pipes.update()
//     },
//   },

//   over: {
//     draw() {
//       main.background.draw()

//       global.floor.draw()
//       main.gameOver.draw()
//     },
//     click() {
//       main.changeDisplay(display.key)
//       alert(`You've earned ${points} points`)
//       localStorage.setItem('bestPoints', points)
//     },
//     update() {
//       main.gameOver.draw()
//     },
//   },
// }

window.addEventListener('click', () => {
  if (main.displayActive.click || main.displayActive.over) {
    main.displayActive.click()
  }
})

main.changeDisplay(main.display.key)

main.renderScreen()

// function renderScreen() {
//   main.displayActive.draw()
//   main.displayActive.update()

//   frames += 1
//   points += 1
//   requestAnimationFrame(renderScreen)
// }
