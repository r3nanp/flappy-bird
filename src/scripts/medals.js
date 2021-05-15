const data = {
  widths: {
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

const { widths, width, height, canvasX, canvasY } = data

const { finalX, initialX } = widths.spriteX
const { finalY, initialY } = widths.spriteY

export const whiteMedal = {
  initialX,
  initialY,
  width,
  height,
  canvasX,
  canvasY,
}

export const silverMedal = {
  finalX,
  initialY,
  width,
  height,
  canvasX,
  canvasY,
}

export const goldMedal = {
  initialX,
  finalY,
  width,
  height,
  canvasX,
  canvasY,
}

export const goldenMedal = {
  finalX,
  finalY,
  width,
  height,
  canvasX,
  canvasY,
}
