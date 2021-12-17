import { score } from './create-score.js'
export let global = {}

/**
 * When the game start, it will create a display object.
 * @param {object} main - Main object
 */
export default function (main) {
  main.display = {
    start: {
      started() {
        global.flappyBird = main.makeFlappyBird()
        global.floor = main.createFloor()
        global.pipes = main.makePipes()
      },

      draw() {
        main.background.draw()
        global.flappyBird.draw()

        global.floor.draw()
        main.getReady.draw()
      },

      click() {
        main.changeScreen(main.display.game)
      },

      update() {
        global.floor.update()
      },
    },

    game: {
      started() {
        global.score = main.createScore()
        global.storagedScore = main.storagedScore()
        global.getScore = main.getScore()
      },
      draw() {
        main.background.draw()
        global.pipes.draw()
        global.floor.draw()

        global.flappyBird.draw()
        global.score.draw()
      },

      click() {
        global.flappyBird.jump()
      },

      update() {
        global.flappyBird.update()
        global.floor.update()
        global.pipes.update()
        global.score.update()
      },
    },

    over: {
      draw() {
        main.background.draw()
        global.floor.draw()
        main.gameOver.draw()

        global.storagedScore.draw()
        global.getScore.draw()
        main.addMedal.draw()
      },
      click() {
        Swal.fire({
          title: 'Game over!',
          text: `You've earned ${score} points`,
          icon: 'error',
          confirmButtonText: 'Okay',
        })

        global.storagedScore.save()

        global.score.over()

        main.changeScreen(main.display.start)
      },
      update() {
        main.gameOver.update()
        main.addMedal.draw()
        global.storagedScore.draw()
        global.getScore.draw()
      },
    },
  }
}
