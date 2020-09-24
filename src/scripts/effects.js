export default function (main) {
  main.sprites = new Image()
  main.sprites.src = '../src/images/sprites.png'

  main.hitAudio = new Audio()
  main.hitAudio.src = '../src/effects/hitsound.mp3'
}
