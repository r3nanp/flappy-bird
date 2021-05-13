export let score = 0

export const storagedScore = localStorage.getItem('@FlappyBird:bestScore')

export default function (main) {
  main.createScore = () => {
    const scoreboard = {
      draw() {
        main.context.font = '35px "VT323"'
        main.context.textAlign = 'right'
        main.context.fillStyle = 'white'
        main.context.fillText(`${score}`, main.canvas.width - 10, 35)
      },
      update() {
        const framesInterval = 20
        const passOnInterval = main.frames % framesInterval === 0

        if (passOnInterval) {
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
    const scoreboard = {
      draw() {
        main.context.font = '30px "VT323"'
        main.context.textAlign = 'center'
        main.context.fillStyle = 'white'
        main.context.fillText(`${score}`, main.canvas.width - 80, 145)
      },
    }
    return scoreboard
  }

  main.storagedScore = () => {
    const getScoreboard = {
      draw() {
        main.context.font = '30px "VT323"'
        main.context.textAlign = 'center'
        main.context.fillStyle = 'white'
        main.context.fillText(`${storagedScore}`, main.canvas.width - 80, 185)
      },
      save() {
        if (score > Number(storagedScore)) {
          localStorage.setItem('@FlappyBird:bestScore', score)
        }
      },
    }
    return getScoreboard
  }
}
