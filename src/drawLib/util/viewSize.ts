export function vw(value: number) {
  return (globalThis.app.canvasWidth / 100) * value;
}

export function vh(value: number) {
  return (globalThis.app.canvasHeight / 100) * value;
}
