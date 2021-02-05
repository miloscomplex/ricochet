class Ui {
  constructor() {
    this.timerRunning = false
    this.canvasOverlay = document.getElementById('canvasOverlay')
    this.timerDiv = document.createElement('div')
    this.timerText = document.createTextNode("")
    this.removePlatform = document.createElement('a')
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
}
