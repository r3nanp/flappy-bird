import { factoryDraw } from '../utils/factory-draw.js'

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
    factoryDraw(main, whiteMedal)
  },

  drawBronzeMedal(main) {
    factoryDraw(main, bronzeMedal)
  },

  drawSilverMedal(main) {
    factoryDraw(main, silverMedal)
  },

  drawGoldMedal(main) {
    factoryDraw(main, goldMedal)
  },
}
