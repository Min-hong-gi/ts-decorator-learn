/**
 * @description 해당 객체가 화면에 그려져야 함을 나타냅니다.
 */
export function Draw(constructor) {
    return class extends constructor {
        constructor(...args) {
            super(...args);
            globalThis.app.addRenderObject(this);
        }
    };
}
/**
 * @description 해당 객체가 화면에 그려질 여부를 결정합니다.
 */
export function setRender(isRender) {
    return function (target, propertyKey, descriptor) {
        descriptor.value = function () {
            if (isRender) {
                globalThis.app.addRenderObject(this);
            }
            else {
                globalThis.app.removeRenderObject(this);
            }
        };
    };
}
