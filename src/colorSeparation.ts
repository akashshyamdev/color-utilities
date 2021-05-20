/**
 * Separate an HSL string into it's respective values
 * @param hslString {string} - a hsl string in format hsl(255, 20%, 25%)
 * @returns an array of the hue, saturation and lightness i.e. [255, 20, 25]
 */

export function separateHSL(hslString: string) {
  const hsl = hslString.substr(4).split(")")[0].split(",");

  let h = hsl[0],
    s = hsl[1].substring(1, hsl[1].length - 1),
    l = hsl[2].substring(1, hsl[2].length - 1);

  if (parseInt(h) >= 360) h = (parseInt(h) % 360).toString();

  return [h, s, l];
}

/**
 * Separate an RGB string into it's respective values
 * @param rgbString a rgb string in format rgb(255, 20, 25)
 * @returns an array of red, green and blue i.e. [255, 20, 25]
 */

export function separateRGB(rgbString: string) {
  const rgb = rgbString.substr(4).split(")")[0].split(",");

  let r = rgb[0],
    g = rgb[1].substring(1),
    b = rgb[2].substring(1);

  return [r, g, b];
}
