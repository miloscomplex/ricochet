class Ui {
  constructor() {
    this.timerRunning = false
    this.canvasOverlay = document.getElementById('canvasOverlay')
    this.timerDiv = document.createElement('div')
    this.timerText = document.createTextNode("")
    this.platformBtn = document.createElement('a')

  }

  attachTimer = function() {
    this.timerDiv.className = 'timer'
    //this.timerDiv.appendChild(timerText)
    this.canvasOverlay.append(this.timerDiv)
    this.timerRunning = true
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
}
