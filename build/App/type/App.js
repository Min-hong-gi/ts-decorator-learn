import * as Controllers from "../controllers/controller.export.js";
export class App {
    constructor(args) {
        globalThis.app = this;
        this.createControllers(args);
        this.renderStart();
    }
    createControllers(args) {
        Object.keys(Controllers).forEach((x) => {
            if (args && args[x]) {
                new Controllers[x](args[x]);
            }
            else {
                new Controllers[x]();
            }
        });
    }
}
