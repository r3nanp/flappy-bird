import createCanvas from './create-canvas.js'
import createRender from './create-render.js'
import addEffects from './add-effects.js'
import createMenus from './create-menus.js'
import createBackground from './create-background.js'
import createScore from './create-score.js'
import addMedal from './add-medal.js'

import createScreen from './create-screen.js'
import createFloor from './create-floor.js'
import makeFlappyBird from './create-flappybird.js'
import makePipes from './create-pipes.js'
import createDisplay from './create-display.js'

const main = {}

createRender(main)
createCanvas(main)
addEffects(main)
createBackground(main)
createFloor(main)
createDisplay(main)

createScore(main)
addMedal(main)
makePipes(main)
makeFlappyBird(main)
createScreen(main)
createMenus(main)

export default main
