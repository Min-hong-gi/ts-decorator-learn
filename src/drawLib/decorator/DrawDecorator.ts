import DrawObject from "../model/drawObject.js";

/**
 * @description 해당 객체가 화면에 그려져야 함을 나타냅니다.
 */
export function Draw<T extends { new (...args: any[]): DrawObject }>(
  constructor: T
) {
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      globalThis.app.addRenderObject(this);
    }
  };
}

/**
 * @description 해당 객체가 화면에 그려질 여부를 결정합니다.
 */
export function setRender<T extends DrawObject>(isRender: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.value = function () {
      if(isRender) {
        globalThis.app.addRenderObject(this as T);
      }else {
        globalThis.app.removeRenderObject(this as T);
      }
    };
  };
}
