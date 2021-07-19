/**
 * Create render
 * @param {object} main - Main object
 */

export default function (main) {
  main.frames = 0

  main.renderScreen = () => {
    main.screenActive.draw()
    main.screenActive.update()

    main.frames += 1
    requestAnimationFrame(main.renderScreen)
  }
}
