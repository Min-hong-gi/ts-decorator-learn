import { App } from "../type/App.js";
export function AppCore(constructor) {
    return class extends constructor {
        constructor(...args) {
            super(...args);
            applyMixins(App, [constructor]);
            mergeController(this);
        }
    };
}
function mergeController(controller) {
    Object.keys(controller).forEach(x => {
        globalThis.app[x] = controller[x];
    });
}
function applyMixins(derivedCtor, constructors) {
    constructors.forEach((baseCtor) => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
                Object.create(null));
        });
    });
}
