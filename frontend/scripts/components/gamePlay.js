class GamePlay {
    constructor() {
      this.canvas = document.getElementById('myCanvas')
      this.ctx = this.canvas.getContext('2d')
      this.x = this.canvas.width / 2
      this.y = this.canvas.height - 30
      this.ballRadius = 30
    }
  //const ctx = canvas.getContext('2d')

  // let x = canvas.width/2
  // let y = canvas.height-30

  drawBall = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI*2)
    this.ctx.fillStyle = '#0095DD'
    this.ctx.fill()
    this.ctx.closePath()
    if (this.x > this.canvas.width - this.ballRadius || this.x < this.ballRadius) {
      this.x = -this.x
    }
    if (this.y > this.canvas.height - this.ballRadius || this.y < this.ballRadius ) {
      this.y = -this.y
    }
    this.x -= 1
    this.y -= 2

  }

  draw = function() {
    //this.drawBall(this.ctx)
  }

}
