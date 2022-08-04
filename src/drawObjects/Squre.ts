import { Draw } from "../drawLib/decorator/DrawDecorator.js";
import DrawObject from "../drawLib/model/drawObject.js";
import Pointer2D from "../drawLib/model/pointer2d.js";
import { degToRad } from "../drawLib/util/drawUtils.js";

@Draw
export class Squre implements DrawObject {
  constructor(
    public point: Pointer2D,
    public width: number,
    public height: number,
    public color: string = "#000",
    public rotate: number = 0,
  ) {
    this.point.x -= this.width;
    this.point.y -= this.height;
  }
  draw(ctx: CanvasRenderingContext2D): void {
    ctx.save();
    ctx.rotate(degToRad(this.rotate));

    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.moveTo(this.point.x, this.point.y);
    ctx.lineTo(this.point.x, this.point.y + this.height);
    ctx.lineTo(
      this.point.x + this.width,
      this.point.y + this.height
    );
    ctx.lineTo(this.point.x + this.width, this.point.y);
    ctx.lineTo(this.point.x, this.point.y);
    ctx.stroke();
    ctx.closePath();

    ctx.restore();
  }
}
