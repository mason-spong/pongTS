import { Aabb } from "./Aabb";
import { Ball } from "./Ball";
import { GameBorder } from "./GameBorder";
import { GameStateMachine } from "./GameStateMachine";
import { Vec2 } from "./Vec2";

const GAME_BORDER_AABB = new Aabb(new Vec2(0, 300), new Vec2(400, 0));

export class GameModel {
  private gameStateMachine = new GameStateMachine();
  private gameBorder = new GameBorder(GAME_BORDER_AABB);
  private ball = new Ball(new Vec2(0.1, 0.1), GAME_BORDER_AABB.middle);

  constructor() {
    console.log(`gameState: ${this.gameStateMachine.state}`);
  }

  public physics(delta: number) {
    this.ball.updatePosition(delta);
    console.log(`ball position: ${this.ball.position}`);
  }
}
