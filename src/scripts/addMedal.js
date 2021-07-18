import { score } from './createScore.js'
import { drawMedals } from './medals.js'

/**
 * Return a function that draws a medal to a user's score.
 * @param {object} main
 */

export default function (main) {
  const { drawSilverMedal, drawGoldMedal, drawBronzeMedal } = drawMedals

  main.addMedal = {
    draw() {
      const medal = score >= 30 ? 'gold' : score >= 20 ? 'silver' : 'bronze'

      /**
       * Get a medal based on a score.
       * @param {String} medal - Medals to draw
       * @param {object} main - Main object
       */

      const getMedal = (medal, main) => {
        const medals = {
          bronze: drawBronzeMedal(main),
          silver: drawSilverMedal(main),
          gold: drawGoldMedal(main),
        }

        return medals[medal]
      }

      getMedal(medal, main)
    },
    update() {
      this.draw()
    },
  }
}
