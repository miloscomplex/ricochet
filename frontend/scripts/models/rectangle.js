class Rectangle {
  constructor(x,y,w,h) {
    this.position = new Vector(x,y)
    this.width = w
    this.height = h
    this.options = {
      isStatic: true,
      restitution: 1.3
      }
    this.body = Bodies.rectangle(this.position.x, this.position.y, this.width, this.height, this.options)
    World.add(world, this.body)
    }

  drawRectangle = function() {
    let pos = this.body.position
    ctx.beginPath()
    ctx.rect(pos.x - this.width / 2, pos.y - this.height / 2, this.width, this.height)
    ctx.fillStyle = '#0095DD'
    ctx.fill()
    ctx.closePath()
  }
}
