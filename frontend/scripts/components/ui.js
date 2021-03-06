class Ui {
  constructor() {
    this.timerRunning = false
    this.canvasWrapper = document.getElementById('canvasWrapper')
    this.timerDiv = document.createElement('div')
    this.timerText = document.createTextNode("")
    this.platformBtn = document.createElement('a')
    this.platformCounter = document.createElement('div')
    this.restartGameBtn = document.createElement('a')
    this.modeBtn = document.createElement('a')
  }

  attachTimer = function() {
    this.timerDiv.className = 'timer'
    this.canvasWrapper.append(this.timerDiv)
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
    this.canvasWrapper.append(this.platformBtn)
    return this.platformBtn
  }

  attachPlatfromCounter = function() {
    this.platformCounter.className = 'platformCounter'
    this.platformCounter.innerText = 'platforms used'
    this.canvasWrapper.append(this.platformCounter)
    return this.platformCounter
  }

  updatePlatformCount = function(array, num) {
    if (array) {
      this.platformCounter.innerText = `Platforms Used: ${array.length} of ${num}`
      if (array.length === num) { this.platformCounter.style.color = '#ffb347'
    } else { this.platformCounter.style.color = '#eeeeee'}
    }
  }

  attachRestartGameBtn = function() {
    this.restartGameBtn.className = 'button'
    this.restartGameBtn.innerText = 'restart'
    this.canvasWrapper.append(this.restartGameBtn)
    return this.restartGameBtn
  }

  attachModeBtn = function() {
    this.modeBtn.className = 'button'
    this.modeBtn.innerText = 'change mode'
    this.canvasWrapper.append(this.modeBtn)
    return this.modeBtn
  }
}
