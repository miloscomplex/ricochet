class Ball {
  constructor(x,y,radius, vecX, vecY) {
    this.position = new Vector(x,y)
    //this.velocity = new Vector(0,0)
    // velocity is readonle apply a force or change position instead
    //this.acceleration = new Vector(0,0)
    this.radius = radius
    this.force = new Vector(vecX, vecY)
    this.options = {
      restitution: 1.3,
      //velocity: this.force,
      friction: 0,
      //force: { x: 12, y: 3 },
      // force is zeroed out after body.update
      density: 4
    }
    this.body = Bodies.circle(x, y, radius, this.options)
    console.log(this.body)
    World.add(world, this.body)
  }

  drawBall = function() {
    this.body.force = { x: 0.05, y: -0.05 }
    let pos = this.body.position

    ctx.beginPath()
    ctx.arc(pos.x, pos.y, this.radius, 0, Math.PI*2)
    ctx.fillStyle = '#0095DD'
    ctx.fill()
    ctx.closePath()
  }

}
