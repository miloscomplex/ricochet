// GLOBAL VARIABLES
const canvas = document.getElementById('myCanvas')
const ctx = canvas.getContext('2d')

// Initiate new game
let newGame = new GamePlay()
const interval = setInterval(newGame.draw, 10)

function stopInterval() {
  clearInterval(interval)
}
