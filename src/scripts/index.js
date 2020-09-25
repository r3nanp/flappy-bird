import createCanvas from './canvas.js'
import addEffects from './effects.js'
import initialMenu from './initialMenu.js'
import createBackground from './background.js'
import makeFloor from './floor.js'

const main = {}

createCanvas(main)
addEffects(main)

createBackground(main)
makeFloor(main)
initialMenu(main)

export default main
