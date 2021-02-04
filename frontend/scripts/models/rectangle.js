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
    ctx.rect(pos.x, pos.y, this.width, this.height)
    this.fillStyle = '#555555'
    ctx.fill()
    ctx.closePath()
  }
}
