export function degToRad(degress: number): number {
  return (degress * Math.PI) / 180;
}

export function rand(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
