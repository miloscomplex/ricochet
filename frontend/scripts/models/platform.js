class Platform {
  constructor(x,y,w,h) {
    this.position = new Vector(x,y)
    this.height = h
    this.width = w
    this.options = {
      friction: 0.3,
      restitution: 0.6
    }
    this.body = Bodies.rectangle(x, y, w, h, this.options)
    World.add(newGame.world, this.body)
  }

  drawPlatform = function() {
    let pos = this.body.position
    console.log(pos);
    ctx.beginPath()
    ctx.rect(pos.x, pos.y, this.width, this.height)
    ctx.fillStyle = '#4caf50'
    ctx.fill()
    ctx.closePath()
  }

}
