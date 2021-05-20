import { getContrast } from './colorContrast';
import { HSLToHex, HSLToRGB, RGBToHSL, RGBToHex, hexToHSL, hexToRGB } from './colorConversion';
import { separateHSL, separateRGB } from './colorSeparation';
import { validateHSL, validateHex, validateRGB } from './colorValidators';

export default {
	getContrast,
	HSLToHex,
	HSLToRGB,
	RGBToHSL,
	RGBToHex,
	hexToHSL,
	hexToRGB,
	separateHSL,
	separateRGB,
	validateHSL,
	validateHex,
	validateRGB,
};
