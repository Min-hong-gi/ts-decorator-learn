export default class Pointer2D {
  constructor(
    public x: number,
    public y: number) { }
  
  add(point: Pointer2D) {
    this.x += point.x;
    this.y += point.y;
    return this;
  }
  sub(point: Pointer2D) {
    this.x += point.x;
    this.y += point.y;
    return this;
  }
  mul(val: number) {
    this.x *= val;
    this.y *= val;
    return this;
  }
  avg(val: number) {
    this.x /= val;
    this.y /= val;
    return this;
  }
  normalize() {
    return Math.sqrt(this.x*this.x + this.y*this.y);
  }
}