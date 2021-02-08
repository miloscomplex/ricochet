
// GLOBAL VARIABLES
const canvasWrapper = document.getElementById('canvasWrapper')
const canvas = { width: 800, height: 500}
const URL = 'http://localhost:'
const api = new API()
let ctx;

// module aliases for Matter.js
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
// const Vertices = Matter.Vertices
// const Svg = Matter.Svg

const engine = Engine.create()
const world = engine.world
world.gravity.y = .33
let interval

window.addEventListener('DOMContentLoaded', (event) => {
  startGame()
})

function stopInterval() {
  return clearInterval(interval)
}

setTimeout( stopInterval, 19000)


function startGame() {
  const newGame = new GamePlay()
  interval = setInterval(newGame.drawCanvas, 10)
}
