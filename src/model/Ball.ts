import { Vec2 } from "./Vec2";

export class Ball {
  constructor(private _velocity: Vec2, private _position: Vec2) {}

  get velocity() {
    return this._velocity;
  }

  get position() {
    return this._position;
  }

  updatePosition(delta: number): void {
    this._position = this.position.add(
      this._velocity.uniformScale(delta / 1000)
    );
  }
}
