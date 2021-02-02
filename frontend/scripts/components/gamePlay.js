class GamePlay {
    constructor() {
      this.canvas = document.getElementById('myCanvas')
      this.ctx = this.canvas.getContext('2d')
      this.x = this.canvas.width / 2
      this.y = this.canvas.height - 30
      this.ballRadius = 10
      this.force = new Vector(8,2)
      this.gameBall = new Ball(this.x,this.y,this.ballRadius)
    }

  ball = function() {
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI*2)
    this.ctx.fillStyle = '#0095DD'
    this.ctx.fill()
    this.ctx.closePath()
  }

  drawBall = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.ball()
    if (this.x + this.force.x > this.canvas.width - this.ballRadius || this.x + this.force.x < this.ballRadius) {
      this.force.x = -this.force.x
    }
    if (this.y + this.force.y > this.canvas.height - this.ballRadius || this.y + this.force.y < this.ballRadius ) {
      this.force.y = -this.force.y
    }
    this.x += this.force.x
    this.y += this.force.y
  }

  draw = () => {
    // console.log('this= ' + this)
    this.drawBall()
  }

  // Why is this throw an error of not a function
  // draw = function(this) {
  //   console.log('this= ' + this)
  //   this.drawBall()
  // }

}
