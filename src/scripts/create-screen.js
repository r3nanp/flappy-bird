/**
 * Create a screen.
 * @param {object} main - Main object
 */

export default function (main) {
  main.changeScreen = newScreen => {
    main.screenActive = newScreen

    if (main.screenActive.started) {
      main.screenActive.started()
    }

    if (main.screenActive.over) {
      main.screenActive.over()
    }
  }
}
