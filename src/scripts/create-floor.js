export default function (main) {
  main.createFloor = () => {
    const floor = {
      spriteX: 0,
      spriteY: 610,
      width: 224,
      height: 112,
      canvasX: 0,
      canvasY: main.canvas.height - 112,
      update() {
        const moveFloor = 1
        const repeat = floor.width / 2
        const moving = floor.canvasX - moveFloor

        floor.canvasX = moving % repeat
      },

      draw() {
        main.context.drawImage(
          main.sprites,
          floor.spriteX,
          floor.spriteY,
          floor.width,
          floor.height,
          floor.canvasX,
          floor.canvasY,
          floor.width,
          floor.height
        )

        main.context.drawImage(
          main.sprites,
          floor.spriteX,
          floor.spriteY,
          floor.width,
          floor.height,
          floor.canvasX + floor.width,
          floor.canvasY,
          floor.width,
          floor.height
        )
      },
    }
    return floor
  }
}
