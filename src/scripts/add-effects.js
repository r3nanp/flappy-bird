/**
 * Create a Audio and Image effects
 * @param {object} main - Main object
 */

export default function (main) {
  main.sprites = new Image()
  main.sprites.src = '../src/assets/sprites.png'

  main.hitAudio = new Audio('../src/assets/hitsound.mp3')
}
