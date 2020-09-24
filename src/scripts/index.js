import createCanvas from './canvas.js'
import addEffects from './effects.js'
// import game from './game.js'
import initialMenu from './initialMenu.js'

const main = {}

createCanvas(main)
addEffects(main)
initialMenu(main)

export default main
