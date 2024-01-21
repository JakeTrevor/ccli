import convert from "color-convert";

export function doTheThing(from: string, to: string, color: string) {
  const bits = color
    .split(/,| /)
    .filter(Boolean)
    .map((e) => (parseInt(e) ? parseInt(e) : e));

  // @ts-ignore
  return convert[from][to](...bits);
}
