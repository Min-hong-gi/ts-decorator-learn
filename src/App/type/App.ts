import * as Controllers from "../controllers/controller.export.js";

type controllerPropertyType = {
  [k in keyof typeof Controllers[keyof typeof Controllers]]: typeof Controllers[keyof typeof Controllers][k];
};

type ControllersTypes = {
  [k in keyof controllerPropertyType[keyof controllerPropertyType]]: controllerPropertyType[keyof controllerPropertyType][k];
};
export interface App extends ControllersTypes {}

export class App {
  constructor() {
    console.log(1);
    globalThis.app = this;
    this.createControllers();
  }
  private createControllers() {
    Object.keys(Controllers).forEach((x) => {
      new Controllers[x as keyof typeof Controllers]();
    });
  }
}

declare global {
  var app: App;
}
