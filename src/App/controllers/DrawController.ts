import DrawObject from "../../drawLib/model/drawObject.js";
import { vh, vw } from "../../drawLib/util/viewSize.js";
import { AppCore } from "../core/AppCoreDecorator.js";

@AppCore
export class DrawController {
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private renderObjects: Array<DrawObject> = [];
  private renderFrame = 1000/60;

  get frame(): number {
    return this.renderFrame;
  }
  set frame(frame: number) {
    this.renderFrame = frame;
  }

  constructor(background?: string) {
    this.setCanvas(background);
  }
  get context() {
    return this.ctx;
  }
  setCanvas(background: string = "#fff") {
    this.canvas = document.querySelector("canvas")!;
    this.ctx = this.canvas.getContext("2d")!;

    this.canvas.width = this.canvas.clientWidth * 2;
    this.canvas.height = this.canvas.clientHeight * 2;

    this.canvas.style.backgroundColor = background;

    this.ctx.scale(2, 2);
  }
  renderStart() {
    setTimeout(() => {
      this.ctx.clearRect(-vw(100), -vh(100), vw(100)*2, vh(100)*2);
      this.renderObjects.forEach((x) => {
        x.draw(this.ctx);
      });
      this.renderStart();
    }, this.frame);
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
