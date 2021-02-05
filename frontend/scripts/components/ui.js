class Ui {
  constructor() {
    this.timerRunning = false
    this.canvasOverlay = document.getElementById('canvasOverlay')
    this.timerDiv = document.createElement('div')
    this.timerText = document.createTextNode("")
    this.platformBtn = document.createElement('a')
    this.platformCounter = document.createElement('div')
    this.restartGameBtn = document.createElement('a')
  }

  attachTimer = function() {
    this.timerDiv.className = 'timer'
    //this.timerDiv.appendChild(timerText)
    this.canvasOverlay.append(this.timerDiv)
    this.timerRunning = true
    return this.timerDiv
  }

  updateTime = function(time) {
    if (this.timerRunning) {
      this.timerDiv.innerText = `Sec: ${time}`
    }
  }

  attachPlatformBtn = function() {
    this.platformBtn.className = 'button'
    this.platformBtn.innerText = 'remove platform'
    this.canvasOverlay.append(this.platformBtn)
    return this.platformBtn
  }

  attachPlatfromCounter = function() {
    this.platformCounter.className = 'platformCounter'
    this.platformCounter.innerText = 'platforms used'
    this.canvasOverlay.append(this.platformCounter)
    return this.platformCounter
  }

  updatePlatformCount = function(array) {
    if (array) {
      this.platformCounter.innerText = `Platforms Used: ${array.length}`
    }
  }

  attachRestartGameBtn = function() {
    this.restartGameBtn.className = 'button'
    this.restartGameBtn.innerText = 'restart'
    this.canvasOverlay.append(this.restartGameBtn)
    return this.restartGameBtn
  }
}
