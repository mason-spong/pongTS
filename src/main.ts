import { square } from "./mathUtils";
import { GameModel } from "./model/GameModel";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
console.log(`canvas: ${canvas?.id}`);
console.log(`Square(2): ${square(2)}`);
const ctx = canvas.getContext("2d");
ctx?.moveTo(0, 0);
ctx?.lineTo(800, 600);
ctx?.stroke();

const gameModel = new GameModel();
let prevTime = null as number | null;

function tick(time: number) {
  if (!prevTime) {
    prevTime = time;
  }

  gameModel.physics(time - prevTime);
  window.requestAnimationFrame(tick);
}

window.requestAnimationFrame(tick);
