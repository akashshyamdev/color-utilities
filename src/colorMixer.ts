import { ColorFormat, hexToRGB, HSLToRGB } from './colorConversion';
import { separateHSL, separateRGB } from './colorSeparation';

function colorChannelMixer(colorChannelA: number, colorChannelB: number, amountToMix: number) {
	const channelA = colorChannelA * amountToMix;
	const channelB = colorChannelB * (1 - amountToMix);

	return channelA + channelB;
}

export default function mixColor(
	color1: number[] | string,
	color2: number[] | string,
	amountToMix = 0.5,
	colorFormat: ColorFormat = 'hex'
) {
	switch (colorFormat) {
		case 'rgb': {
			const [r1, g1, b1] = separateRGB(color1 as string);
			const [r2, g2, b2] = separateRGB(color2 as string);

			// @ts-ignore
			color1 = [r1, g1, b1];
			// @ts-ignore
			color2 = [r2, g2, b2];

			break;
		}

		case 'hex': {
			const [r1, g1, b1] = hexToRGB(color1 as string, true) as number[];
			const [r2, g2, b2] = hexToRGB(color2 as string, true) as number[];

			// @ts-ignore
			color1 = [r1, g1, b1];

			// @ts-ignore
			color2 = [r2, g2, b2];

			break;
		}

		case 'hsl': {
			const [h1, s1, l1] = separateHSL(color1 as string);
			const [h2, s2, l2] = separateHSL(color2 as string);

			const [r1, g1, b1] = HSLToRGB(parseInt(h1), parseInt(s1), parseInt(l1), true) as number[];
			const [r2, g2, b2] = HSLToRGB(parseInt(h2), parseInt(s2), parseInt(l2), true) as number[];

			// @ts-ignore
			color1 = [r1, g1, b1];
			// @ts-ignore
			color2 = [r2, g2, b2];

			break;
		}
		default:
			break;
	}

	color1 = color1 as number[];
	color2 = color2 as number[];

	const r = colorChannelMixer(color1[0], color2[0], amountToMix);
	const g = colorChannelMixer(color1[1], color2[1], amountToMix);
	const b = colorChannelMixer(color1[2], color2[2], amountToMix);

	return `rgb(${r}, ${g}, ${b})`;
}
