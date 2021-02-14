class Ball {
  constructor(x,y,radius, vecX, vecY) {
    this.position = new Vector(x,y)
    // velocity is readonle apply a force or change position instead
    this.radius = radius
    this.force = new Vector(vecX, vecY)
    this.options = {
      restitution: 1.3,
      friction: 0,
      density: 4,

    }
    this.body = Bodies.circle(x, y, radius, this.options)
    console.log(this.body)
    World.add(world, this.body)
  }

  drawBall = function() {
    // force is only applied per reDraw
    // then zeroed out after body.update
    this.body.force = { x: 0.05, y: -0.05 }
    let pos = this.body.position

    ctx.beginPath()
    ctx.arc(pos.x, pos.y, this.radius, 0, Math.PI*2)
    ctx.fillStyle = '#0095DD'
    ctx.fill()
    ctx.closePath()
  }

  isOffScreen = function() {
    let pos = this.body.position
    return (pos.y > canvas.height + 80)
  }

  youWon = function() {
    let pos = this.body.position
    return (pos.x > canvas.width + 40 && pos.y <= canvas.height)
  }

  removeFromWorld = function() {
    World.remove(world, this.body)
  }

}
