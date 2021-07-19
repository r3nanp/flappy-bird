/**
 * Create a moving background.
 * @param {object} main - Main object
 */

export default function (main) {
  main.background = {
    spriteX: 390,
    spriteY: 0,
    width: 275,
    height: 204,
    canvasX: 0,
    canvasY: main.canvas.height - 204,

    draw() {
      /* Moving Background */
      const moveBackground = 1
      const repeat = main.background.width / 2
      const moving = main.background.canvasX - moveBackground
      main.background.canvasX = moving % repeat

      main.context.fillStyle = '#70c5ce'
      main.context.fillRect(0, 0, main.canvas.width, main.canvas.height)

      main.context.drawImage(
        main.sprites,
        main.background.spriteX,
        main.background.spriteY,
        main.background.width,
        main.background.height,
        main.background.canvasX,
        main.background.canvasY,
        main.background.width,
        main.background.height
      )

      main.context.drawImage(
        main.sprites,
        main.background.spriteX,
        main.background.spriteY,
        main.background.width,
        main.background.height,
        main.background.canvasX + main.background.width,
        main.background.canvasY,
        main.background.width,
        main.background.height
      )
    },
  }
}
