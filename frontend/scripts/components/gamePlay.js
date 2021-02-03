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
      this.platform = new Platform(canvas.width / 2, canvas.height / 2, 50, 8)
      this.platform2 = new Platform(canvas.width / 4, canvas.height / 2, 40, 8)
      this.platforms = new Array()
      // lexical scoping needs the argument passed
      canvas.addEventListener("click", event => this.logMousePos(event, this.platforms))
      console.log(this.platforms);
    }

  drawCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    this.platforms.forEach( platform => platform.drawPlatform())
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

  logMousePos = function(e, array) {
    array.push(new Platform(e.offsetX, e.offsetY, 50, 8))
    //let newPlatform = new Platform(e.offsetX, e.offsetY, 80, 20)
    //console.log(newPlatform);
    console.log(array)
    //this.platforms.push(platform)
  }

  // Why is this throw an error of not a function
  // draw = function(this) {
  //   console.log('this= ' + this)
  //   this.drawBall()
  // }

}
