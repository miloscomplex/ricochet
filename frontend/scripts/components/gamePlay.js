class GamePlay {
    constructor() {
      this.x = 10 //canvas.width / 2
      this.y = canvas.height / 2
      this.ballRadius = 6
      this.force = new Vector(4,1)
      this.gameBall = new Ball(this.x ,this.y ,this.ballRadius, 6, 4)
      this.gameBall2 = new Ball(this.x ,this.y ,this.ballRadius, 8, 1)
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
    let gravity = new Vector(0, 0.2)

    //this.gameBall.ball()
    this.gameBall.ball()
    this.gameBall2.ball()
    // this.ball()

    // this.gameBall.update()
    // this.gameBall.checkEdges()
    // this.gameBall.ball()
    this.gameBall.updatePosition()
    this.gameBall2.updatePosition()
    // if (this.x + this.force.x > canvas.width - this.ballRadius || this.x + this.force.x < this.ballRadius) {
    //   this.force.x = -this.force.x
    // }
    // if (this.y + this.force.y > canvas.height - this.ballRadius || this.y + this.force.y < this.ballRadius ) {
    //   this.force.y = -this.force.y
    // }
    // this.x += this.force.x
    // this.y += this.force.y
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
