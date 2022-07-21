import * as Controllers from "../controllers/controller.export.js";
export class App {
    constructor() {
        console.log(1);
        globalThis.app = this;
        this.createControllers();
    }
    createControllers() {
        Object.keys(Controllers).forEach((x) => {
            new Controllers[x]();
        });
    }
}
