// GLOBAL VARIABLES
const canvas = document.getElementById('myCanvas')
const ctx = canvas.getContext('2d')
// module aliases
const Engine = Matter.Engine, // Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

// Initiate new game
let newGame = new GamePlay()
const interval = setInterval(newGame.draw, 10)

function stopInterval() {
  clearInterval(interval)
}

setTimeout( stopInterval, 20000)
