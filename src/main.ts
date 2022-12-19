import { square } from "./mathUtils";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
console.log(`canvas: ${canvas?.id}`);
console.log(`Square(2): ${square(2)}`);
const ctx = canvas.getContext("2d");
ctx?.moveTo(0, 0);
ctx?.lineTo(800, 600);
ctx?.stroke();
