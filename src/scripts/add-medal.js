import { score } from './create-score.js'
import { drawMedals } from './draw-medals.js'

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
        const medals = {
          'gold': drawGoldMedal(main),
          'silver': drawSilverMedal(main),
          'bronze': drawBronzeMedal(main),
          'white': drawWhiteMedal(main)
        }

        return medals[medal] ?? medals.white
      }

      getMedal(medal, main)
    },
    update() {
      this.draw()
    },
  }
}
