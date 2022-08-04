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
  mag() {
    return Math.sqrt(this.x*this.x + this.y*this.y);
  }
  normalize() {
    const m = this.mag();
    this.avg(m);
    return this;
  }
}