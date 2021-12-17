import { global } from './create-display.js'

/**
 * Function who create the collision between the pipe and the flappy bird.
 * @param {object} pipe - Pipe object.
 * @returns {boolean} - If the bird collided with the pipe.
 */

export default function flappyBirdCollision(pipe) {
  const flappyBird = global.flappyBird

  const flappyHead = flappyBird.canvasY
  const flappyFeet = flappyBird.canvasY + flappyBird.height

  if (flappyBird.canvasX + flappyBird.width >= pipe.x) {
    if (flappyHead <= pipe.pipeSky.y) {
      return true
    }

    if (flappyFeet >= pipe.pipeFloor.y) {
      return true
    }
  }

  return false
}
