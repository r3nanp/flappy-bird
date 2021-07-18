/**
 * Create a Canvas element.
 * @param {object} main - Main object
 */

export default function (main) {
  main.canvas = document.querySelector('canvas')
  main.context = main.canvas.getContext('2d')
}
