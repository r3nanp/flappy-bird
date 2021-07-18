import { score } from './createScore.js'
import { drawMedals } from './medals.js'

export default function (main) {
  const { drawWhiteMedal, drawSilverMedal, drawGoldMedal, drawGoldenMedal } =
    drawMedals

  main.addMedal = {
    draw() {
      if (score <= 10) {
        drawWhiteMedal(main)
      } else if (score <= 20) {
        drawSilverMedal(main)
      } else if (score <= 30) {
        drawGoldMedal(main)
      } else if (score > 30) {
        drawGoldenMedal(main)
      }
    },
    update() {
      this.draw()
    },
  }
}
