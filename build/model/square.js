var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Squre_1;
import { Draw, setRender } from "../decorator/DrawDecorator.js";
export var SETTING;
(function (SETTING) {
    SETTING[SETTING["changeFrame"] = 20] = "changeFrame";
})(SETTING || (SETTING = {}));
let Squre = Squre_1 = class Squre {
    point;
    width;
    height;
    color;
    static nextId = 0;
    id = -1;
    count = SETTING.changeFrame;
    colorList = [];
    isRend = true;
    constructor(point, width, height, color = "#000") {
        this.point = point;
        this.width = width;
        this.height = height;
        this.color = color;
        this.id = Squre_1.nextId++;
    }
    dead() {
        this.color = '#fff';
        this.colorList = ['#fff', '#fff'];
        this.isRend = false;
    }
    respone() {
        this.isRend = true;
    }
    setColor(color) {
        if (!this.isRend) {
            return;
        }
        this.colorList.push(color);
    }
    getColor() {
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
                num1 += Math.ceil(((num2 - num1) / SETTING.changeFrame) *
                    (SETTING.changeFrame - this.count));
                middle += colorFormat(num1);
            }
            this.color = middle;
        }
        else {
            this.count = SETTING.changeFrame;
            this.colorList.splice(0, 1);
        }
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color || "#000";
        ctx.fillRect(this.point.x - this.width / 2, this.point.y - this.height / 2, this.width, this.height);
        ctx.closePath();
        this.getColor();
    }
};
__decorate([
    setRender(false)
], Squre.prototype, "dead", null);
__decorate([
    setRender(true)
], Squre.prototype, "respone", null);
Squre = Squre_1 = __decorate([
    Draw
], Squre);
export default Squre;
export function colorFormat(num) {
    if (num > 16) {
        return `${Math.floor(num / 16).toString(16)}`;
    }
    return num.toString(16);
}
