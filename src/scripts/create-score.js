import { global } from './create-display.js'

export let score = 0
export let storagedScore = localStorage.getItem('@FlappyBird:bestScore')

/**
 * Function that create a new score, get a new score and save it in localStorage.
 * @param {object} main - Main object
 */

export default function (main) {
  main.createScore = () => {
    let flappyBird = global.flappyBird.spriteX
    let pipeX
    const scoreboard = {
      draw() {
        main.context.font = '35px "VT323"'
        main.context.textAlign = 'right'
        main.context.fillStyle = 'white'
        main.context.fillText(`${score}`, main.canvas.width - 10, 35)
      },
      update() {
        // It will update the score only when the flappy bird passes it to the pipe

        switch (global.pipes.pipeList.length) {
          case 0:
            return
          case 1:
            pipeX = global.pipes.pipeList[0].x
            break
          case 2:
            pipeX = Math.min(
              global.pipes.pipeList[0].x,
              global.pipes.pipeList[1].x
            )
        }

        if (flappyBird === pipeX) {
          score += 1
        }
      },
      over() {
        score = 0
      },
    }
    return scoreboard
  }

  main.getScore = () => {
    const getScore = {
      draw() {
        main.context.font = '30px "VT323"'
        main.context.textAlign = 'center'
        main.context.fillStyle = 'white'
        main.context.fillText(`${score}`, main.canvas.width - 80, 145)
      },
    }
    return getScore
  }

  main.storagedScore = () => {
    const getStoragedScore = {
      draw() {
        main.context.font = '30px "VT323"'
        main.context.textAlign = 'center'
        main.context.fillStyle = 'white'
        main.context.fillText(
          `${score >= Number(storagedScore) ? score : Number(storagedScore)}`,
          main.canvas.width - 80,
          185
        )
      },
      save() {
        if (score > Number(storagedScore)) {
          localStorage.setItem('@FlappyBird:bestScore', score)
        }
      },
    }
    return getStoragedScore
  }
}
