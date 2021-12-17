/**
 * This function will draw, based on this two params.
 * @param {object} main - The main object
 * @param {object} drawObject - The draw object
 */
export function factoryDraw(main, drawObject) {
  main.context.drawImage(
    main.sprites,
    drawObject.initialX,
    drawObject.initialY,
    drawObject.width,
    drawObject.height,
    drawObject.canvasX,
    drawObject.canvasY,
    drawObject.width,
    drawObject.height
  )
}
