import { Aabb } from "./Aabb";
import { Vec2 } from "./Vec2";

export class GameBorder {
  constructor(private _aabb: Aabb) {}

  get aabb() {
    return this._aabb;
  }
}
