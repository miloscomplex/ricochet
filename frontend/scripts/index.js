
// GLOBAL VARIABLES
const canvas = document.getElementById('myCanvas')
const canvasWrapper = document.getElementById('canvasWrapper')
const ctx = canvas.getContext('2d')
const URL = 'http://localhost:'
const api = new API()

// module aliases for Matter.js
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
// const Vertices = Matter.Vertices
// const Svg = Matter.Svg

const engine = Engine.create()
const world = engine.world
world.gravity.y = .33
let interval;
//let newGame;

window.addEventListener('DOMContentLoaded', (event) => {
  startGame()
})

function stopInterval() {
  return clearInterval(interval)
}

setTimeout( stopInterval, 19000)

function startGame() {
  //if (newGame) { newGame = null }
  const newGame = new GamePlay()
  interval = setInterval(newGame.drawCanvas, 10)
}
