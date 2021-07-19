import { global } from './create-display.js'

/**
 * Function that creates a collision object for the floor.
 * @param {object} flappyBird - The flappy bird game object.
 * @returns boolean
 */

export default function makeCollision(flappyBird) {
  const flappyBirdY = flappyBird.canvasY + flappyBird.height
  const floorY = global.floor.canvasY

  if (flappyBirdY >= floorY) {
    return true
  }

  return false
}
