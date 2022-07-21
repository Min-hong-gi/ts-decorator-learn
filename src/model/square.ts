import { Draw, setRender } from "../decorator/DrawDecorator.js";
import DrawObject from "./drawObject.js";
import Pointer2D from "./pointer2d.js";

export enum SETTING {
  changeFrame = 20,
}

@Draw
export default class Squre implements DrawObject {
  static nextId = 0;
  private id = -1;
  private count = SETTING.changeFrame;
  private colorList: Array<string> = [];
  private isRend = true;

  constructor(
    public point: Pointer2D,
    public width: number,
    public height: number,
    private color: string = "#000"
  ) {
    this.id = Squre.nextId++;
  }

  @setRender(false)
  dead() {
    this.color = '#fff';
    this.colorList = ['#fff', '#fff'];
    this.isRend = false;
  }

  @setRender(true)
  respone() {
    this.isRend = true;
  }

  setColor(color: string) {
    if(!this.isRend) {
      return;
    }
    this.colorList.push(color);
  }

  private getColor() {
    if (this.count > 0) {
      if (this.colorList.length < 2) {
        return;
      }
      this.count -= 1;
      let prev = this.colorList[0];
      let next = this.colorList[1];

      let middle = "#";
      for (let i = 1; i < 4; i++) {
        let num1 = parseInt(prev[i], 16);
        let num2 = parseInt(next[i], 16);
        num1 += Math.ceil(
          ((num2 - num1) / SETTING.changeFrame) *
            (SETTING.changeFrame - this.count)
        );
        middle += colorFormat(num1);
      }
      this.color = middle;
    } else {
      this.count = SETTING.changeFrame;
      this.colorList.splice(0, 1);
    }
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.fillStyle = this.color || "#000";
    ctx.fillRect(this.point.x - this.width/2, this.point.y - this.height/2, this.width, this.height);
    ctx.closePath();

    this.getColor();
  }
}

export function colorFormat(num: number): string {
  if (num > 16) {
    return `${Math.floor(num / 16).toString(16)}`;
  }
  return num.toString(16);
}
