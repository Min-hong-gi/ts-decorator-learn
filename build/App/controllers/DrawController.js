var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { vh, vw } from "../../drawLib/util/viewSize.js";
import { AppCore } from "../core/AppCoreDecorator.js";
let DrawController = class DrawController {
    canvas;
    ctx;
    renderObjects = [];
    renderFrame = 1000 / 60;
    get frame() {
        return this.renderFrame;
    }
    set frame(frame) {
        this.renderFrame = frame;
    }
    constructor(background) {
        this.setCanvas(background);
    }
    get context() {
        return this.ctx;
    }
    setCanvas(background = "#fff") {
        this.canvas = document.querySelector("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = this.canvas.clientWidth * 2;
        this.canvas.height = this.canvas.clientHeight * 2;
        this.canvas.style.backgroundColor = background;
        this.ctx.scale(2, 2);
    }
    renderStart() {
        setTimeout(() => {
            this.ctx.clearRect(-vw(100), -vh(100), vw(100) * 2, vh(100) * 2);
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
    addRenderObject(obj) {
        this.renderObjects.push(obj);
    }
    removeRenderObject(obj) {
        const index = this.renderObjects.indexOf(obj);
        if (index != -1) {
            this.renderObjects.splice(index, 1);
        }
    }
};
DrawController = __decorate([
    AppCore
], DrawController);
export { DrawController };
