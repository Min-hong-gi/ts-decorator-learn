import DrawObject from "../../model/drawObject.js";
import { AppCore } from "../core/AppCoreDecorator.js";

@AppCore
export class DrawController {
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private renderObjects: Array<DrawObject> = [];

  constructor() {
    console.log(4);
    this.setCanvas();
  }
  setCanvas() {
    this.canvas = document.querySelector("canvas")!;
    this.ctx = this.canvas.getContext("2d")!;

    this.canvas.width = this.canvas.clientWidth * 2;
    this.canvas.height = this.canvas.clientHeight * 2;

    this.ctx.scale(2, 2);
  }
  render() {
    setInterval(() => {
      this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
      this.renderObjects.forEach((x) => {
        x.draw(this.ctx);
      });
    }, 1000 / 60);
  }
  get canvasWidth() {
    return this.canvas.width / 2;
  }
  get canvasHeight() {
    return this.canvas.height / 2;
  }
  addRenderObject(obj: DrawObject) {
    this.renderObjects.push(obj);
  }
  removeRenderObject(obj: DrawObject) {
    const index = this.renderObjects.indexOf(obj);
    if (index != -1) {
      this.renderObjects.splice(index, 1);
    }
  }
}

export interface DrawController {}
