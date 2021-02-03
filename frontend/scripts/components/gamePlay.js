class GamePlay {
    constructor() {
      this.x = 10 //canvas.width / 2
      this.y = canvas.height / 2
      this.ballRadius = 6
      this.force = new Vector(4,1)
      this.gameBall = new Ball(this.x ,this.y ,this.ballRadius, 6, 4)
      this.gameBall2 = new Ball(this.x ,30 ,this.ballRadius, 8, 1)
      this.gravity = new Vector(0, 0.4)
      this.wind = new Vector(0.2, 0)
      this.platform = new Platform(canvas.width / 2, canvas.height / 2, 80, 20)
      this.platform2 = new Platform(canvas.width / 4, canvas.height / 2, 80, 20)

    }

  drawCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    this.platform.drawPlatform()
    this.platform2.drawPlatform()
    // update position
    this.gameBall.updatePosition()
    this.gameBall2.applyForce(this.gravity)
    this.gameBall2.applyForce(this.wind)
    this.gameBall2.update()
    this.gameBall2.checkEdges()

    // drawBall
    this.gameBall2.drawBall()
    this.gameBall.drawBall()
  }

  draw = () => {
    this.drawCanvas()
  }

  // Why is this throw an error of not a function
  // draw = function(this) {
  //   console.log('this= ' + this)
  //   this.drawBall()
  // }

}
