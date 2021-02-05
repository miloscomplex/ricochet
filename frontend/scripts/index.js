
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

let newGame = new GamePlay()
const interval = setInterval(newGame.draw, 10)

function stopInterval() {
  clearInterval(interval)
}

setTimeout( stopInterval, 100000)
