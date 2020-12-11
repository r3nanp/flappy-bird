import main from './scripts/index.js'

window.addEventListener('mousedown', () => {
  if (main.displayActive.click || main.displayActive.over) {
    main.displayActive.click()
  }
})

window.addEventListener('keydown', event => {
  if (
    (main.displayActive.click && !event.repeat && event.code === 'Space') ||
    event.key === 'ArrowUp'
  ) {
    main.displayActive.click()
  }
})

main.changeDisplay(main.display.key)

main.renderScreen()
