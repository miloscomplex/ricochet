
// GLOBAL VARIABLES
const canvas = document.getElementById('myCanvas')
const ctx = canvas.getContext('2d')

const CUSTOM_PATH = "51 0 51 44 6 44 6 0 0 0 0 50 57 50 57 0 51 0"
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
