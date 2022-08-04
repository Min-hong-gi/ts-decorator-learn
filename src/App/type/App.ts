import * as Controllers from "../controllers/controller.export.js";

type controllerPropertyType = {
  [k in keyof typeof Controllers[keyof typeof Controllers]]: typeof Controllers[keyof typeof Controllers][k];
};

type ControllersTypes = {
  [k in keyof controllerPropertyType[keyof controllerPropertyType]]: controllerPropertyType[keyof controllerPropertyType][k];
};
export interface App extends ControllersTypes {}

export class App {
  constructor(args?: { [k in keyof typeof Controllers]: any }) {
    globalThis.app = this;
    this.createControllers(args);
    this.renderStart();
  }
  private createControllers(args?: { [k: string]: any }) {
    Object.keys(Controllers).forEach((x) => {
      if (args && args[x]) {
        new Controllers[x as keyof typeof Controllers](args[x]);
      } else {
        new Controllers[x as keyof typeof Controllers]();
      }
    });
  }
}

declare global {
  var app: App;
}
