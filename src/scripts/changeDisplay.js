export default function (main) {
  main.changeDisplay = newDisplay => {
    main.displayActive = newDisplay

    if (main.displayActive.started) {
      main.displayActive.started()
    }
    if (main.displayActive.over) {
      main.displayActive.over()
    }
  }
}
