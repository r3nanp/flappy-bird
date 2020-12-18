import createCanvas from './canvas.js'
import createRender from './createRender.js'
import addEffects from './effects.js'
import createMenus from './menus.js'
import createBackground from './background.js'
import createScore from './createScore.js'

import changeDisplay from './changeDisplay.js'
import makeFlappyBird from './makeFlappyBird.js'
import makePipes from './makePipes.js'
import createDisplay from './display.js'
import makeFloor from './floor.js'

const main = {}

createRender(main)
createCanvas(main)
addEffects(main)
createBackground(main)
makeFloor(main)
createDisplay(main)

makePipes(main)
makeFlappyBird(main)
changeDisplay(main)
createMenus(main)
createScore(main)

export default main
