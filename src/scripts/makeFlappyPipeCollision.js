import main from './index.js'

export default function flappyBirdCollision(list) {
  const { canvasX, canvasY, height } = main.makeFlappyBird()

  const flappyHead = canvasY
  const flappyFeet = canvasY + height

  if (canvasX >= list.x) {
    if (flappyHead <= list.pipeSky.y) {
      return true
    }

    if (flappyFeet >= list.pipeFloor.y) {
      return true
    }
  }
  return false
}
