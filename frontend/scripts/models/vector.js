class Vector {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  add(otherVec) {
    return new Vector(this.x + otherVec.x, this.y + otherVec.y)
  }

  subtract(otherVec) {
    return new Vector(this.x - otherVec.x, this.y - otherVec.y)
  }

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }

  setter(x,y) {
    this.x = x
    this.y = y
  }



}
