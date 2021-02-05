class Ui {
  constructor() {
    this.timerAttached = false
    this.wrapper = document.getElementById('wrapper')
    this.timerDiv = document.createElement('div')
    this.timerText = document.createTextNode("")
  }

  attachTimer = function() {
    this.timerDiv.className = 'timer'
    //this.timerDiv.appendChild(timerText)
    this.wrapper.append(this.timerDiv)
    this.timerAttached = true
  }

  updateTime = function(time) {
    if (this.timerAttached) {
      this.timerDiv.innerText = `Seconds: ${time}`
    }
  }
}
