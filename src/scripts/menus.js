export default function (main) {
  // Initial menu
  main.getReady = {
    spriteX: 134,
    spriteY: 0,
    width: 174,
    height: 152,
    canvasX: main.canvas.width / 2 - 174 / 2,
    canvasY: 50,
    draw() {
      main.context.drawImage(
        main.sprites,
        main.getReady.spriteX,
        main.getReady.spriteY,
        main.getReady.width,
        main.getReady.height,
        main.getReady.canvasX,
        main.getReady.canvasY,
        main.getReady.width,
        main.getReady.height
      )
    },
  }
  // Game over menu
  main.gameOver = {
    spriteX: 131,
    spriteY: 155,
    width: 227,
    height: 199,
    canvasX: main.canvas.width / 2 - 227 / 2,
    canvasY: 50,

    draw() {
      main.context.drawImage(
        main.sprites,
        main.gameOver.spriteX,
        main.gameOver.spriteY,
        main.gameOver.width,
        main.gameOver.height,
        main.gameOver.canvasX,
        main.gameOver.canvasY,
        main.gameOver.width,
        main.gameOver.height
      )
    },
    update() {
      this.draw()
    },
  }
}
