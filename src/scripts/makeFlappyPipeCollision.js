import { global } from './display.js'

/**
 * Function who create the collision between the pipe and the flappy bird.
 * @param {array} list
 * @returns boolean
 */

export default function flappyBirdCollision(list) {
  const flappyBird = global.flappyBird

  const flappyHead = flappyBird.canvasY
  const flappyFeet = flappyBird.canvasY + flappyBird.height

  if ((flappyBird.canvasX + flappyBird.width)>= list.x) {
    if (flappyHead <= list.pipeSky.y) {
      return true
    }

    if (flappyFeet >= list.pipeFloor.y) {
      return true
    }
  }

  return false
}
