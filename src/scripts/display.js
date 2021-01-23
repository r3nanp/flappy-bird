import { score } from './createScore.js'
export const global = {}

export default function (main) {
   main.display = {
    key: {
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
        main.changeDisplay(main.display.game)
      },

      update() {
        global.floor.update()
      },
    },

    game: {
      started() {
        global.score = main.createScore()
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
      },
      click() {
        main.changeDisplay(main.display.key)
        alert(`You've earned ${score} points`)
        localStorage.setItem('bestPoints', main.points)

        global.score.over()
      },
      update() {
        main.gameOver.draw()
      },
    },
  }
}
