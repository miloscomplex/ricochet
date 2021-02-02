class GamePlay {
    constructor() {
      this.x = 10 //canvas.width / 2
      this.y = canvas.height / 2
      this.ballRadius = 6
      this.force = new Vector(4,1)
      this.gameBall = new Ball(this.x ,this.y ,this.ballRadius, 6, 4)
      this.gameBall2 = new Ball(this.x ,this.y ,this.ballRadius, 8, 1)
      this.gravity = new Vector(0, 0.4)
      this.wind = new Vector(0.2, 0)
    }

  // ball = function() {
  //   ctx.beginPath()
  //   ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI*2)
  //   ctx.fillStyle = '#0095DD'
  //   ctx.fill()
  //   ctx.closePath()
  // }

  drawBall = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // draw ball
    this.gameBall.ball()

    // update position
    this.gameBall.updatePosition()
    this.gameBall2.applyForce(this.gravity)
    this.gameBall2.applyForce(this.wind)
    this.gameBall2.update()
    this.gameBall2.checkEdges()
    // if (this.x + this.force.x > canvas.width - this.ballRadius || this.x + this.force.x < this.ballRadius) {
    //   this.force.x = -this.force.x
    // }
    // if (this.y + this.force.y > canvas.height - this.ballRadius || this.y + this.force.y < this.ballRadius ) {
    //   this.force.y = -this.force.y
    // }
    // this.x += this.force.x
    // this.y += this.force.y
    this.gameBall2.ball()
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
