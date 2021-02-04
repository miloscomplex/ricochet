class GamePlay {

    constructor() {
      this.x = 10 //canvas.width / 2
      this.y = canvas.height / 2
      this.ballRadius = 6
      this.force = new Vector(4,1)
      this.gravity = new Vector(0, 0.4)
      this.wind = new Vector(0.2, 0)
      this.platforms = new Array()
      this.options = {
        isStatic: true
      }

      // lexical scoping needs the argument passed
      canvas.addEventListener("click", event => this.makePlatform(event, this.platforms))
      this.engine = Engine.create()
      this.world = this.engine.world
      //Engine.run(this.engine)
      this.gameBall = new Ball(this.x, this.y, this.ballRadius, 6, 4)
      //this.gameBall2 = new Ball(this.x ,30 ,this.ballRadius, 8, 1)

      this.ground = Bodies.rectangle(canvas.width / 2, canvas.height + 40, canvas.width, 80, this.options)

      this.right = Bodies.rectangle(canvas.width + 40, canvas.height / 2, 80, canvas.height, this.options)
      this.top = Bodies.rectangle(canvas.width / 2, -40,canvas.width, 80, this.options)
      this.left = Bodies.rectangle(-80, canvas.height / 2, 80, canvas.height, this.options)

      World.add(this.world, [this.right, this.ground, this.left, this.top, this.gameBall])
      //World.add(this.world, this.gameBall)
      //World.add(this.world, this.gambeBall2)
    }

  drawCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    Engine.update(this.engine)
    //this.gameBall.drawBall()
    this.platforms.forEach( platform => platform.drawPlatform())
    //this.gameBall.drawBall()
    // update position
    //this.gameBall.updatePosition()
    //this.gameBall2.applyForce(this.gravity)
    //this.gameBall2.applyForce(this.wind)
    //this.gameBall2.update()
    //this.gameBall2.checkEdges()

    // drawBall
    //this.gameBall2.drawBall()
    //this.gameBall.drawBall()
  }

  draw = () => {
    this.drawCanvas()
  }

   makePlatform = function(e, array) {
    array.push(new Platform(e.offsetX, e.offsetY, 50, 8))
  }

  // Why is this throw an error of not a function
  // draw = function(this) {
  //   console.log('this= ' + this)
  //   this.drawBall()
  // }

}
