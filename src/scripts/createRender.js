export default function (main) {
  main.frames = 0

  main.renderScreen = function () {
    main.displayActive.draw()
    main.displayActive.update()

    main.frames += 1
    requestAnimationFrame(main.renderScreen)
  }
}
