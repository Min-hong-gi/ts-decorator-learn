export default class Pointer2D {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    add(point) {
        this.x += point.x;
        this.y += point.y;
        return this;
    }
    sub(point) {
        this.x += point.x;
        this.y += point.y;
        return this;
    }
    mul(val) {
        this.x *= val;
        this.y *= val;
        return this;
    }
    avg(val) {
        this.x /= val;
        this.y /= val;
        return this;
    }
    normalize() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}
