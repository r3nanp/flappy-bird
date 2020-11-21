export const global = {}

export default function (main) {
   main.display = {
    key: {
      started() {
        global.flappyBird = main.makeFlappyBird()
        global.floor = main.floor
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
      draw() {
        main.background.draw()
        global.pipes.draw()
        global.floor.draw()

        global.flappyBird.draw()
      },

      click() {
        global.flappyBird.jump()
      },

      update() {
        global.flappyBird.update()
        global.floor.update()
        global.pipes.update()
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
        alert(`You've earned ${main.points} points`)
        localStorage.setItem('bestPoints', main.points)
      },
      update() {
        main.gameOver.draw()
      },
    },
  }
}
