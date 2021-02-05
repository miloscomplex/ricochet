
// GLOBAL VARIABLES
const canvas = document.getElementById('myCanvas')
const ctx = canvas.getContext('2d')

// module aliases for Matter.js
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Vertices = Matter.Vertices
const Svg = Matter.Svg

const engine = Engine.create()
const world = engine.world
world.gravity.y = .33
let interval;
let newGame;

window.addEventListener('DOMContentLoaded', (event) => {
  startGame()
})

function stopInterval() {
  clearInterval(interval)
}

setTimeout( stopInterval, 9000)

function startGame() {
  newGame = null
  newGame = new GamePlay()
  interval = setInterval(newGame.drawCanvas, 10)
}
