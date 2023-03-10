export function calcSum(...values: number[]): number {
  return values.reduce((total, val) => (total += val));
}
