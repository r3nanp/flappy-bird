import { global } from './display.js'

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
