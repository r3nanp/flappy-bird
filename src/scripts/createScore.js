export let score = 0
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
      }
    }
    return scoreboard
  }
}
