class Vector {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  add (otherVec) {
    this.x = this.x + otherVec.x
    this.y = this.y + otherVec.y
    return (this.x, this.y)
  }

  subtract(otherVec) {
    this.x = this.x - otherVec.x
    this.y = this.y - otherVec.y
    return (this.x, this.y)
  }

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }

  setter(x,y) {
    this.x = x
    this.y = y
  }



}
