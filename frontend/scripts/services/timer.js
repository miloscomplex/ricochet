class Timer {
  constructor(settings) {
    this.startTime = new Date()
    this.stopTime = 0
  }

  start = function() {
    this.startTime = new Date()
  }

  elapsedTime = function() {
    this.endTime = new Date()
    let timeDiff = this.endTime - this.startTime
    // remove miliseconds & round seconds
    this.stopTime = Math.round(timeDiff / 1000)
    return  this.stopTime
  }
}
