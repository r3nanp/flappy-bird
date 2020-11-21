export default function (main) {
  main.frames = 0
  main.points = 0

  main.renderScreen = function () {
    main.displayActive.draw()
    main.displayActive.update()

    main.frames += 1
    main.points += 1
    requestAnimationFrame(main.renderScreen)
  }
}
