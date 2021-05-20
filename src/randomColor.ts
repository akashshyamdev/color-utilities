import { ColorFormat, hexToHSL, hexToRGB } from "./colorConversion";

/**
 * Generate Random Color
 * @param format the format of the color to be generated i.e. hex, rgb or hsl
 * @returns returns a randomly generated color in the specified format
 */
export function generateRandomColor(format: ColorFormat = "hex") {
  const hex = Math.floor(Math.random() * 0xffffff);
  let hexColor = `#${hex.toString(16)}`;

  switch (format) {
    case "hex":
      return hexColor;
    case "rgb":
      return hexToRGB(hexColor);
    case "hsl":
      return hexToHSL(hexColor);
    default:
      break;
  }

  return hexColor;
}
