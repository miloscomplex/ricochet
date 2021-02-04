class Platform {
  constructor(x,y,w,h) {
    this.position = new Vector(x,y)
    this.height = h
    this.width = w
    this.options = {
      friction: 0.3,
      restitution: 1,
      isStatic: true
    }
    this.body = Bodies.rectangle(x, y, w, h, this.options)
    World.add(world, this.body)
  }

  drawPlatform = function() {
    let pos = this.body.position
    ctx.beginPath()
    ctx.rect(pos.x - this.width / 2, pos.y - this.height / 2, this.width, this.height)
    ctx.fillStyle = '#4caf50'
    ctx.fill()
    ctx.closePath()
  }

}
