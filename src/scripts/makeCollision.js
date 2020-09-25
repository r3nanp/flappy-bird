export default function makeCollision(flappyBird, floor) {
  const flappyBirdY = flappyBird.canvasY + flappyBird.height

  const floorY = floor.canvasY

  if (flappyBirdY >= floorY) {
    return true
  }

  return false
}
