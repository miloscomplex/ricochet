class Ball {
  constructor(x,y,radius, vecX, vecY) {
    this.position = new Vector(x,y)
    //this.velocity = new Vector(0,0)
    //this.acceleration = new Vector(0,0)
    this.radius = radius
    this.force = new Vector(vecX, vecY)
    //this.force = { x: vecX, y: vecY }
    this.options = {
      friction: 0.1,
      restitution: 1
    }
    this.body = Bodies.circle(x, y, radius, this.options)
    //this.body = Matter.Body.setInertia(this.body, 1)
    console.log(this.body)
    //console.log(newGame.world)
    World.add(world, this.body)

  }

  drawBall = function() {

    let pos = this.body.position
    ctx.beginPath()
    ctx.arc(pos.x, pos.y, this.radius, 0, Math.PI*2)
    ctx.fillStyle = '#0095DD'
    ctx.fill()
    ctx.closePath()
  }

  // applyForce = function(force) {
  //   // F = M * A || A = F / M ( setting M = 1 )
  //   this.acceleration.add(force)
  // }

  // update = function() {
  //   this.velocity.add(this.acceleration)
  //   this.position.add(this.velocity)
  //   this.acceleration.setter(0,0)
  //   // Eulor time steps so needs to be reset
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
  //     this.position.x = canvas.width - this.ballRadius
  //     this.velocity.x *= -1
  //   } else if (this.position.x <= this.ballRadius) {
  //     this.position.x = this.ballRadius
  //     this.velocity.x *= -1
  //   }
  //   if (this.position.y >= canvas.height - this.ballRadius || this.position.y <= this.ballRadius ) {
  //     this.position.y = canvas.height - this.ballRadius
  //     this.velocity.y *= -1
  //   }
  // }
}
