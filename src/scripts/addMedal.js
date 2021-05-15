import { score } from './createScore.js'
import { goldMedal, goldenMedal, silverMedal, whiteMedal } from './medals.js'

export default function (main) {
  main.addMedal = {
    draw() {
      if (score <= 10) {
        main.context.drawImage(
          main.sprites,
          whiteMedal.initialX,
          whiteMedal.initialY,
          whiteMedal.width,
          whiteMedal.height,
          whiteMedal.canvasX,
          whiteMedal.canvasY,
          whiteMedal.width,
          whiteMedal.height
        )
      } else if (score <= 20) {
        main.context.drawImage(
          main.sprites,
          silverMedal.finalX,
          silverMedal.initialY,
          silverMedal.width,
          silverMedal.height,
          silverMedal.canvasX,
          silverMedal.canvasY,
          silverMedal.width,
          silverMedal.height
        )
      } else if (score <= 30) {
        main.context.drawImage(
          main.sprites,
          goldMedal.initialX,
          goldMedal.finalY,
          goldMedal.width,
          goldMedal.height,
          goldMedal.canvasX,
          goldMedal.canvasY,
          goldMedal.width,
          goldMedal.height
        )
      } else if (score > 30) {
        main.context.drawImage(
          main.sprites,
          goldenMedal.finalX,
          goldenMedal.finalY,
          goldenMedal.width,
          goldenMedal.height,
          goldenMedal.canvasX,
          goldenMedal.canvasY,
          goldenMedal.width,
          goldenMedal.height
        )
      }
    },
    update() {
      this.draw()
    },
  }
}
