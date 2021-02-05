class GamePlay {

    constructor() {
      this.ballRadius = 6
      this.platforms = new Array()
      this.timer = new Timer()
      this.ui = new Ui()
      this.ui.attachTimer()
      this.platformCounter = this.ui.attachPlatfromCounter() 
      this.platformBtn = this.ui.attachPlatformBtn()
      //this.attachTimer = ui.attachTimer()
      this.platformBtn.addEventListener('click', event => this.removePlatform(this.platforms))
      this.interval = setInterval( this.checkTimer, 1000)
      // lexical scoping needs the argument passed
      canvas.addEventListener('click', event => this.makePlatform(event, this.platforms))
      //Engine.run(this.engine)

      this.gameBall = new Ball(10, 10, this.ballRadius, 10, 0.5)

      this.goalPost = new Rectangle(canvas.width, 200 + canvas.height / 2, 20, canvas.height )

      this.top = new Rectangle(canvas.width / 2,  -40, canvas.width + 40, 80)
      this.left = new Rectangle(-100, canvas.height / 2, 200, canvas.height + 20)

      World.add(world,[this.left, this.top])
    }

  drawCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    this.ui.updateTime(this.timer.elapsedTime())
    //console.log(this.timer.elapsedTime());
    Engine.update(engine)

    this.goalPost.drawRectangle()

    this.platforms.forEach( platform => platform.drawPlatform())
    this.gameBall.drawBall()
    if (this.gameBall.isOffScreen()) {
      this.gameBall.removeFromWorld()
      // setTimeout(this.resetBall, 2000)
      // creating crazy amount of objects
      this.resetBall()
    }

    if (this.gameBall.youWon()) {
      this.gameBall.removeFromWorld()
      this.gameBall = null
      this.timer.timerRunning = false
      stopInterval()
      window.alert(`OMG you won! It took you ${this.timer.stopTime} seconds to finish.`)
    }
  }

  draw = () => {
    this.drawCanvas()
  }

   makePlatform = function(e, array) {
    array.push(new Platform(e.offsetX, e.offsetY, 50, 15))
  }

  resetBall = () => {
    this.gameBall = null
    this.gameBall = new Ball(10, 10, this.ballRadius, 10, 0.5)
  }

  // Why is this throw an error of not a function
  // if reg function needs to be bound
  // draw = function(this) {
  //   console.log('this= ' + this)
  //   this.drawBall()
  // }

  removePlatform = function(array) {
    if (array && array.length) {
      let lastPlatform = array.pop()
      World.remove(world, lastPlatform.body)
    }
  }

  checkTimer = () => {
    //console.log(this.timer.elapsedTime())

  }

}
