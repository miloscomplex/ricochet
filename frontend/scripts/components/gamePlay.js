class GamePlay {

    constructor() {
      this.x = canvas.width / 2
      this.y = canvas.height / 2
      this.ballRadius = 6
      this.force = new Vector(4,1)
      this.gravity = new Vector(0, 0.4)
      this.wind = new Vector(0.2, 0)
      this.platforms = new Array()
      this.options = {
        isStatic: true,
        restitution: 1.3
        }

      // lexical scoping needs the argument passed
      canvas.addEventListener("click", event => this.makePlatform(event, this.platforms))
      //Engine.run(this.engine)
      this.gameBall = new Ball(10, 10, this.ballRadius, 10, 0.5)

      //this.ground = new Rectangle(canvas.width / 2, canvas.height + 40, canvas.width, 80)
      //this.right = new Rectangle(canvas.width + 40, canvas.height / 2, 80, canvas.height + 30)
      this.top = new Rectangle(canvas.width / 2,  -40, canvas.width + 40, 80)
      this.left = new Rectangle(-100, canvas.height / 2, 200, canvas.height + 20)

      World.add(world,[ this.left, this.top])
    }

  drawCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    //let p = new Path2D(CUSTOM_PATH)
    ctx.fill(this.p)
    // ctx.beginPath()
    // //ctx.rect(100, 100, 30, 60)
    // let cupBtm = ctx.rect(100, 140, 60, 10)
    // let cupL = ctx.rect(100, 100, 10, 40)
    // let cupR = ctx.rect(150, 100, 10, 40)
    // //this.fillStyle = '#555555'
    // ctx.fill()
    // ctx.closePath()
    //this.basket = this.makeBasket()

    let p = new Path2D(CUSTOM_PATH)
    ctx.fill(p)
    p.fillStyle = '#555555'
    p.moveTo(20, 40)

    Engine.update(engine)
    //this.gameBall.drawBall()
    this.platforms.forEach( platform => platform.drawPlatform())
    this.gameBall.drawBall()
    //this.gameBall2.drawBall()
    if (this.gameBall.isOffScreen()) {
      setTimeout(() => {
      this.gameBall.removeFromWorld()
      //this.gameBall = null
      this.gameBall = new Ball(10, 10, this.ballRadius, 10, 0.5)
      }, 2000)
    }
    if (this.gameBall.youWon()) {
      window.alert("OMG you won!")
      stopInterval()
    }
  }

  draw = () => {
    this.drawCanvas()
  }

   makePlatform = function(e, array) {
    array.push(new Platform(e.offsetX, e.offsetY, 50, 20))
  }

  // Why is this throw an error of not a function
  // draw = function(this) {
  //   console.log('this= ' + this)
  //   this.drawBall()
  // }

  makeBasket = () => {
    ctx.beginPath()
    //ctx.rect(100, 100, 30, 60)
    let cupBtm = ctx.rect(100, 140, 60, 10)
    let cupL = ctx.rect(100, 100, 10, 40)
    let cupR = ctx.rect(150, 100, 10, 40)
    //this.fillStyle = '#555555'
    ctx.fill()
    ctx.closePath()
  }

}
