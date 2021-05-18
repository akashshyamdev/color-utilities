import { ColorFormat, hexToHSL, hexToRGB } from './colorConversion';

export function generateRandomColor(format: ColorFormat = 'hex') {
	const hex = Math.floor(Math.random() * 0xffffff);
	let hexColor = `#${hex.toString(16)}`;

	switch (format) {
		case 'hex':
			return hexColor;
		case 'rgb':
			return hexToRGB(hexColor);
		case 'hsl':
			return hexToHSL(hexColor);
		default:
			break;
	}

	return hexColor;
}
