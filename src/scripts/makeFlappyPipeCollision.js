import main from './index.js'

export default function flappyBirdCollision(list) {
  const { canvasX, canvasY, height } = main.makeFlappyBird()

  const flappyHead = canvasY
  const flappyFeet = flappyHead + height

  if (canvasX >= list.x) {

    if (flappyFeet >= list.pipeFloor.y) {
      console.log('bateu no de baixo')
      return true
    }

    if (flappyHead <= list.pipeSky.y) {
      console.log('bateu no de cima')
      return true
    }
  }
  return false
}
