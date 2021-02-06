class GamePlay {

    constructor() {
      this.platforms = new Array()
      this.timer = new Timer()
      this.ui = new Ui()

      this.timerDiv = this.ui.attachTimer()
      this.platformCounter = this.ui.attachPlatfromCounter()
      this.platformBtn = this.ui.attachPlatformBtn()
      this.restartBtn = this.ui.attachRestartGameBtn()
      this.interval = setInterval( this.checkTimer, 1000)

      // lexical scoping needs the argument passed
      canvas.addEventListener('click', event =>           this.makePlatform(event, this.platforms))
      this.platformBtn.addEventListener('click', event => this.removePlatform(this.platforms))

      //Engine.run(this.engine)
      this.ballRadius = 6
      this.gameBall = new Ball(10, 10, this.ballRadius, 10, 0.5)

      this.goalPost = new Rectangle(canvas.width, 200 + canvas.height / 2, 20, canvas.height )

      this.canvasTop = new Rectangle(canvas.width / 2,  -40, canvas.width + 40, 80)
      this.canvasLeft = new Rectangle(-100, canvas.height / 2, 200, canvas.height + 20)

      World.add(world,[this.canvasLeft, this.canvasTop])
    }

  drawCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    this.ui.updateTime(this.timer.elapsedTime())
    Engine.update(engine)

    this.goalPost.drawRectangle()
    this.ui.updatePlatformCount(this.platforms)
    this.platforms.forEach( platform => platform.drawPlatform())
    this.gameBall.drawBall()
    if (this.gameBall.isOffScreen()) {
      this.gameBall.removeFromWorld()
      // setTimeout(this.resetBall, 2000)
      // creating crazy amount of objects
      this.resetBall()
    }

    if (this.gameBall.youWon()) {
      stopInterval()
      this.timer.timerRunning = false
      this.gameBall.removeFromWorld()
      this.platforms.forEach( element => element.removeFromWorld())
      this.platforms = []
      this.platformCounter.remove()
      this.platformBtn.remove()
      this.gameBall = null
      window.alert(`OMG you won! It took you ${this.timer.stopTime} seconds to finish. It took you ${this.platforms.length} Platforms to win`)
    }
  }

   makePlatform = function(e, array) {
    array.push(new Platform(e.offsetX, e.offsetY, 50, 15))
  }

  resetBall = () => {
    this.gameBall = null
    this.gameBall = new Ball(10, 10, this.ballRadius, 10, 0.5)
  }

  // Why does this throw an error of not a function
  // if reg function needs to be bound context of this
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

}
