const medalPositions = {
  spriteWidth: {
    spriteX: {
      initialX: 1,
      finalX: 48,
    },
    spriteY: {
      initialY: 77,
      finalY: 123,
    },
  },
  width: 44,
  height: 44,
  canvasX: 320 - 240,
  canvasY: 136,
}

const { spriteWidth, width, height, canvasX, canvasY } = medalPositions

const { finalX, initialX } = spriteWidth.spriteX
const { finalY, initialY } = spriteWidth.spriteY

const whiteMedal = {
  initialX,
  initialY,
  width,
  height,
  canvasX,
  canvasY,
}

const silverMedal = {
  finalX,
  initialY,
  width,
  height,
  canvasX,
  canvasY,
}

const goldMedal = {
  initialX,
  finalY,
  width,
  height,
  canvasX,
  canvasY,
}

const bronzeMedal = {
  finalX,
  finalY,
  width,
  height,
  canvasX,
  canvasY,
}

export const drawMedals = {
  drawWhiteMedal(main) {
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
  },

  drawBronzeMedal(main) {
    main.context.drawImage(
      main.sprites,
      bronzeMedal.finalX,
      bronzeMedal.finalY,
      bronzeMedal.width,
      bronzeMedal.height,
      bronzeMedal.canvasX,
      bronzeMedal.canvasY,
      bronzeMedal.width,
      bronzeMedal.height
    )
  },

  drawSilverMedal(main) {
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
  },

  drawGoldMedal(main) {
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
  },
}
