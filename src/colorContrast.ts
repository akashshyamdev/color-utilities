import { hexToRGB, ColorFormat, HSLToRGB } from './colorConversion';
import { separateHSL } from './colorSeparation';

export function getContrast(color: string, colorFormat: ColorFormat = 'hex') {
	let r = 0,
		b = 0,
		g = 0;

	// Convert to RGB value
	switch (colorFormat) {
		case 'hex':
			[r, g, b] = hexToRGB(color, true) as number[];
			break;
		case 'rgb':
			const rgb = color.replace(/[^\d,]/g, '').split(',');

			r = parseInt(rgb[0]);
			g = parseInt(rgb[0]);
			b = parseInt(rgb[0]);

			break;

		case 'hsl':
			const [h, s, l] = separateHSL(color);

			[r, g, b] = HSLToRGB(parseInt(h), parseInt(s), parseInt(l), true) as number[];

			break;

		default:
			break;
	}

	// Get YIQ ratio
	const yiq = (r * 299 + g * 587 + b * 114) / 1000;

	// Check contrast
	return yiq >= 128 ? 'black' : 'white';
}
