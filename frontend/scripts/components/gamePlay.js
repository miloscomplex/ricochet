class GamePlay {
    constructor() {
      this.x = canvas.width / 2
      this.y = canvas.height - 30
      this.ballRadius = 8
      this.force = new Vector(4,1)
      this.gameBall = new Ball(this.x,this.y,this.ballRadius)
    }

  ball = function() {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI*2)
    ctx.fillStyle = '#0095DD'
    ctx.fill()
    ctx.closePath()
  }

  drawBall = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    this.gameBall.ball()
    this.ball()
    this.gameBall.updatePosition()
    if (this.x + this.force.x > canvas.width - this.ballRadius || this.x + this.force.x < this.ballRadius) {
      this.force.x = -this.force.x
    }
    if (this.y + this.force.y > canvas.height - this.ballRadius || this.y + this.force.y < this.ballRadius ) {
      this.force.y = -this.force.y
    }
    this.x += this.force.x
    this.y += this.force.y
  }

  draw = () => {
    this.drawBall()
  }

  // Why is this throw an error of not a function
  // draw = function(this) {
  //   console.log('this= ' + this)
  //   this.drawBall()
  // }

}
