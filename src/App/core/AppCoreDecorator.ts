import { App } from "../type/App.js";

export interface Controller {}

export function AppCore<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor implements Controller {
    constructor(...args: any[]) {
      super(...args);
      applyMixins(App, [constructor]);

      mergeController(this);
    }
  };
}

function mergeController(controller: Controller){
  Object.keys(controller).forEach(x=>{
    globalThis.app[x as keyof typeof controller] = controller[x as keyof typeof controller];
  })
}

function applyMixins(derivedCtor: any, constructors: any[]) {
  constructors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      Object.defineProperty(
        derivedCtor.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
          Object.create(null)
      );
    });
  });
}
