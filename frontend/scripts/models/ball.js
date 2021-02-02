class Ball {
  constructor(x,y,radius) {
    this.x = x
    this.y = y
    this.ballRadius = radius
    this.force = new Vector(6,2)
    this.ball()
  }

  ball = function() {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI*2)
    ctx.fillStyle = '#0095DD'
    ctx.fill()
    ctx.closePath()
  }

  updatePosition = function() {
    if (this.x + this.force.x > canvas.width - this.ballRadius || this.x + this.force.x < this.ballRadius) {
      this.force.x = -this.force.x
    }
    if (this.y + this.force.y > canvas.height - this.ballRadius || this.y + this.force.y < this.ballRadius ) {
      this.force.y = -this.force.y
    }
    this.x += this.force.x
    this.y += this.force.y
  }

}
