export function vw(value: number) {
  return (globalThis.app.DrawCore.canvasWidth / 100) * value;
}

export function vh(value: number) {
  return (globalThis.app.DrawCore.canvasHeight / 100) * value;
}
