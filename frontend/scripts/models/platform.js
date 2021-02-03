class Platform {
  constructor(x,y,w,h) {
    this.position = new Vector(x,y)
    this.height = h
    this.width = w
  }

  drawPlatform = function() {
    ctx.beginPath()
    ctx.rect(this.position.x, this.position.y, this.width, this.height)
    ctx.fillStyle = '#4caf50'
    ctx.fill()
    ctx.closePath()
  }
  
}
