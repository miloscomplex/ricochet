class GamePlay {
    constructor() {
      this.canvas = document.getElementById('myCanvas')
      this.ctx = this.canvas.getContext('2d')
      this.x = this.canvas.width / 2
      this.y = this.canvas.height - 30
    }
  //const ctx = canvas.getContext('2d')

  // let x = canvas.width/2
  // let y = canvas.height-30

  drawBall = function() {
    this.ctx.beginPath()
    this.ctx.arc(x, y, ballRadius, 0, Math.PI*2)
    this.ctx.fillStyle = '#0095DD'
    this.ctx.fill()
    this.ctx.closePath()
  }

  draw = function() {

  }

  interval = function() { setInterval(this.drawBall, 10) }
}
