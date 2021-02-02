class Ball {
  constructor(x,y,radius, vecX, vecY) {
    this.position = new Vector(x,y)
    this.velocity = new Vector(0,0)
    this.acceleration = new Vector(0,0)
    this.ballRadius = radius
    this.force = new Vector(vecX, vecY)
  }

  ball = function() {
    ctx.beginPath()
    ctx.arc(this.position.x, this.position.y, this.ballRadius, 0, Math.PI*2)
    ctx.fillStyle = '#0095DD'
    ctx.fill()
    ctx.closePath()
  }

  // applyForce = function(force2) {
  //   this.acceleration.add(force2)
  // }

  // update = function() {
  //   this.velocity.add(this.acceleration)
  //   this.position.add(this.velocity)
  //   this.acceleration.setter(0,0)
  // }

  updatePosition = function() {
    if (this.position.x + this.force.x > canvas.width - this.ballRadius || this.position.x + this.force.x < this.ballRadius) {
      this.force.x = -this.force.x
    }
    if (this.position.y + this.force.y > canvas.height - this.ballRadius || this.position.y + this.force.y < this.ballRadius ) {
      this.force.y = -this.force.y
    }
    this.position.x += this.force.x
    this.position.y += this.force.y
  }

  // checkEdges = function() {
  //   if (this.position.x >= canvas.width - this.ballRadius) {
  //     this.position.x = width - this.r
  //     this.velocity.x *= -1
  //   } else if (this.position.x <= this.ballRadius) {
  //     this.position.x = this.ballRadius
  //     this.velocity.x *= -1
  //   }
  //   if (this.position.y >= canvas.height - this.ballRadius || this.position.y <= this.ballRadius ) {
  //     this.position.y = canvas.height - this.r
  //     this.velocity.y *= -1
  //   }
  //   this.position.x += this.velocity.x
  // }
}
