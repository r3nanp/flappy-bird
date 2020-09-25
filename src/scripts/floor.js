export default function (main) {
  main.floor = {
    spriteX: 0,
    spriteY: 610,
    width: 224,
    height: 112,
    canvasX: 0,
    canvasY: main.canvas.height - 112,
    update() {
      const moveFloor = 1
      const repeat = main.floor.width / 2
      const moving = main.floor.canvasX - moveFloor

      main.floor.canvasX = moving % repeat
    },

    draw() {
      main.context.drawImage(
        main.sprites,
        main.floor.spriteX,
        main.floor.spriteY,
        main.floor.width,
        main.floor.height,
        main.floor.canvasX,
        main.floor.canvasY,
        main.floor.width,
        main.floor.height
      )

      main.context.drawImage(
        main.sprites,
        main.floor.spriteX,
        main.floor.spriteY,
        main.floor.width,
        main.floor.height,
        main.floor.canvasX + main.floor.width,
        main.floor.canvasY,
        main.floor.width,
        main.floor.height
      )
    },
  }
}
