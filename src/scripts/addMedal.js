import { score } from './createScore.js'
import { drawMedals } from './medals.js'

/**
 * Return a function that draws a medal to a user's score.
 * @param {object} main - Main object
 */

export default function (main) {
  const { drawSilverMedal, drawGoldMedal, drawBronzeMedal, drawWhiteMedal } =
    drawMedals

  main.addMedal = {
    draw() {
      const medal = score > 30 ? 'gold' : score <= 15 ? 'bronze' : 'silver'

      /**
       * Get a medal based on a score.
       * @param {String} medal - Medals to draw
       * @param {object} main - Main object
      */

      const getMedal = (medal, main) => {
        switch (medal) {
          case 'silver':
            return drawSilverMedal(main)
          case 'gold':
            return drawGoldMedal(main)
          case 'bronze':
            return drawBronzeMedal(main)
          default:
            return drawWhiteMedal(main)
        }
      }
    },
    update() {
      this.draw()
    },
  }
}
