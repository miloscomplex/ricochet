
// GLOBAL VARIABLES
const canvas = document.getElementById('myCanvas')
const ctx = canvas.getContext('2d')

// module aliases
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
  newGame = new GamePlay()
  interval = setInterval(newGame.draw, 10)
})

function stopInterval() {
  clearInterval(interval)
}

setTimeout( stopInterval, 1000)

function startGame() {
  newGame = null
  newGame = new GamePlay()
  interval = setInterval(newGame.draw, 10)
}
