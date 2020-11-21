import { global } from './display.js'

export default function makeCollision(flappyBird, _floor) {
  const flappyBirdY = flappyBird.canvasY + flappyBird.height
  const floorY = global.floor.canvasY

  if (flappyBirdY >= floorY) {
    return true
  }

  return false
}
