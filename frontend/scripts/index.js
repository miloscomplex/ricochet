
// GLOBAL VARIABLES
const URL = 'http://localhost:'
const api = new API()

const canvas = { width: 1200, height: 600}
const canvasWrapper = document.getElementById('canvasWrapper')
const wrapper = document.getElementById('wrapper').style.width = `${canvas.width}px`
canvasWrapper.style.height = `${canvas.height}px`
let ctx // make a global varible

// module aliases for Matter.js
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
// vars for Matter.js
const engine = Engine.create()
const world = engine.world
world.gravity.y = .33

let interval

window.addEventListener('DOMContentLoaded', (event) => {
  const instructions = new Instructions()
})

function stopInterval() {
  return clearInterval(interval)
}

//setTimeout( stopInterval, 19000)

function startGame() {
  const newGame = new GamePlay()
  interval = setInterval(newGame.drawCanvas, 10)
}
