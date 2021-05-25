class GamePlay {

    constructor() {
      canvasWrapper.innerHTML = ''
      // DOM reset
      //proportions are f*cked if you add it the traditional way
      canvasWrapper.innerHTML = `<canvas id="myCanvas" width="${canvas.width}" height="${canvas.height}"> </canvas>`
      this.canvas = document.getElementById('myCanvas')
      ctx = this.canvas.getContext('2d')

      this.platforms = new Array()
      this.platformLimit = 6
      this.timer = new Timer()
      this.ui = new Ui()

      this.timerDiv = this.ui.attachTimer()
      this.platformCounter = this.ui.attachPlatfromCounter()
      this.platformBtn = this.ui.attachPlatformBtn()
      this.restartBtn = this.ui.attachRestartGameBtn()

      this.modeBtn = this.ui.attachModeBtn()

      this.interval = setInterval( this.checkTimer, 1000)

      // lexical scoping needs the argument passed
      this.canvas.addEventListener('click', event => this.makePlatform (event, this.platforms))
      this.platformBtn.addEventListener('click', event => this.removePlatform(this.platforms))
      this.restartBtn.addEventListener('click', event => this.restart() )

      //this.darkMode = '#00000035'
      this.mode = false
      this.colorMode = '#00000035'
      // this.toggle = this.toggleMode()


      this.modeBtn.addEventListener('click', event => this.toggleMode() )
      //Engine.run(this.engine)
      this.ballRadius = 6
      this.gameBall = new Ball(10, 10, this.ballRadius, 10, 0.5)

      this.goalPost = new Rectangle(canvas.width, 200 + canvas.height / 2, 20, canvas.height )

      this.canvasTop = new Rectangle(canvas.width / 2,  -40, canvas.width + 40, 80)
      this.canvasLeft = new Rectangle(-100, canvas.height / 2, 200, canvas.height + 20)
    }

  drawCanvas = () => {
    ctx.beginPath()
    ctx.rect(0, 0, this.canvas.width, this.canvas.height)
    ctx.fillStyle = this.colorMode
    //console.log(this.mode);
    ctx.fill()
    ctx.closePath()
    //ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.ui.updateTime(this.timer.elapsedTime())
    Engine.update(engine)

    this.goalPost.drawRectangle()
    this.ui.updatePlatformCount(this.platforms, this.platformLimit)
    this.platforms.forEach( platform => platform.drawPlatform())
    this.gameBall.drawBall()
    if (this.gameBall.isOffScreen()) {
      this.gameBall.removeFromWorld()
      this.resetBall()
    }

    if (this.gameBall.youWon()) {
      stopInterval()
      this.timer.timerRunning = false
      this.gameBall.removeFromWorld()
      this.platforms.forEach( element => element.removeFromWorld())
      const levelCompleted = new LevelCompleted({time: this.timer.stopTime, platformsUsed: this.platforms.length, level: 1})
      this.platforms = []
      this.platformCounter.remove()
      this.platformBtn.remove()
      this.gameBall = null
    }
  }

   makePlatform = function(e, array) {
     if (array.length < this.platformLimit) {
       array.push(new Platform(e.offsetX, e.offsetY, 50, 15))
     }
  }

  resetBall = () => {
    this.gameBall = null
    this.gameBall = new Ball(10, 10, this.ballRadius, 10, 0.5)
  }

  removePlatform = function(array) {
    if (array && array.length) {
      let lastPlatform = array.pop()
      World.remove(world, lastPlatform.body)
    }
  }

  restart = () => {
    stopInterval()
    this.timer.timerRunning = false
    this.gameBall.removeFromWorld()
    this.platforms.forEach( element => element.removeFromWorld())
    this.platforms = []
    this.platformCounter.remove()
    this.platformBtn.remove()
    this.gameBall = null
    startGame()
  }

  toggleMode = () => {
    if (!this.mode) {
      console.log('#FFFFFF35')
      this.canvas.style.backgroundColor = '#FFFFFF35'
      document.body.style.backgroundColor = '#555'
      this.colorMode = '#FFFFFF35'

    } else {
     console.log('#00000035')
     this.canvas.style.backgroundColor = '#00000035'
     document.body.style.backgroundColor = '#333'
     this.colorMode = '#00000035'
    }
    this.mode = !this.mode
  }

}
