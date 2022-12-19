export class Vec2 {
  constructor(private _x: number, private _y: number) {}

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  sub(vec: Vec2) {
    return new Vec2(this._x - vec.x, this._y - vec.y);
  }

  add(vec: Vec2) {
    return new Vec2(this._x + vec.x, this._y + vec.y);
  }

  uniformScale(scale: number) {
    return new Vec2(this._x * scale, this._y * scale);
  }

  toString() {
    return `x: ${this._x}, y: ${this._y}`;
  }
}
