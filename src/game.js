import './css/global.css'
import main from './scripts/index.js'

const canvas = document.querySelector('canvas')

window.addEventListener('DOMContentLoaded', () => {
  main.changeScreen(main.display.start)

  main.renderScreen()
})

canvas.addEventListener('mousedown', () => {
  if (main.screenActive.click || main.screenActive.over) {
    main.screenActive.click()
  }
})

window.addEventListener('keydown', event => {
  if (
    (main.screenActive.click && !event.repeat && event.code === 'Space') ||
    event.key === 'ArrowUp'
  ) {
    main.screenActive.click()
  }
})
