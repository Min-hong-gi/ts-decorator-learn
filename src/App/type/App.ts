import * as Controllers from "../controllers/controller.export.js";

type ControllersType = {
  [k in keyof typeof Controllers]: typeof Controllers[k];
};
type Cores = {
  [k in keyof ControllersType]: typeof Controllers[k][keyof ControllersType[keyof ControllersType]];
};

export interface App extends Cores {}

export class App {
  constructor(args?: { [k in keyof typeof Controllers]?: any }) {
    globalThis.app = this;
    this.createControllers(args);
  }
  private createControllers(args?: { [k: string]: any }) {
    Object.keys(Controllers).forEach((x) => {
      const key = x as keyof typeof Controllers;
      if (args && args[x]) {
        new Controllers[key](args[key]);
      } else {
        const temp = Controllers as any;
        new temp[key]();
      }
    });
  }
}

declare global {
  var app: App;
}
