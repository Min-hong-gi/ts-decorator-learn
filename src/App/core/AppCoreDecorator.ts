import { App } from "../type/App.js";

export interface Controller {}

export function AppCore<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor implements Controller {
    constructor(...args: any[]) {
      super(...args);

      mergeController(constructor.name, this);
    }
  };
}

function mergeController(name: string, controller: Controller) {
  if (globalThis.app[name as keyof App]) {
    globalThis.app[name as keyof App] = {
      ...globalThis.app[name as keyof App],
      ...(controller as any),
    };
  } else {
    globalThis.app[name as keyof App] = controller as any;
  }
}
