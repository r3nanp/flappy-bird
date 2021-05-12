import createCanvas from './canvas.js'
import createRender from './createRender.js'
import addEffects from './effects.js'
import createMenus from './menus.js'
import createBackground from './background.js'
import createScore from './createScore.js'

import createScreen from './createScreen.js'
import createFloor from './floor.js'
import makeFlappyBird from './makeFlappyBird.js'
import makePipes from './makePipes.js'
import createDisplay from './display.js'

const main = {}

createRender(main)
createCanvas(main)
addEffects(main)
createBackground(main)
createFloor(main)
createDisplay(main)

makePipes(main)
makeFlappyBird(main)
createScreen(main)
createMenus(main)
createScore(main)

export default main
