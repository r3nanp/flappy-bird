/**
 * Create a Audio and Image effects
 * @param {object} main - Main object
 */

export default function (main) {
  main.sprites = new Image()
  main.sprites.src = '/sprites.png'

  main.hitAudio = new Audio('/hitsound.mp3')
}
