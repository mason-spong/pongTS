import { Vec2 } from "./Vec2";

export class Aabb {
  private _middle: Vec2;
  constructor(private topLeft: Vec2, private bottomRight: Vec2) {
    this._middle = new Vec2(topLeft.y / 2, bottomRight.x / 2);
  }

  get middle() {
    return this._middle;
  }
}
