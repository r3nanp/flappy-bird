import createRender from './createRender.js'
import createCanvas from './canvas.js'
import addEffects from './effects.js'
import initialMenu from './initialMenu.js'
import createBackground from './background.js'

import changeDisplay from './changeDisplay.js'
import makeFlappyBird from './makeFlappyBird.js'
import makeDisplay from './display.js'
import makeFloor from './floor.js'

const main = {}

createRender(main)
createCanvas(main)
addEffects(main)
createBackground(main)
makeFloor(main)

makeFlappyBird(main)
makeDisplay(main)
changeDisplay(main)
initialMenu(main)

export default main
