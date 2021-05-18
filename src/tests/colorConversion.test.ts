import { hexToHSL, hexToRGB, HSLToHex, HSLToRGB, RGBToHex, RGBToHSL } from '../colorConversion';

import { expect } from 'chai';

describe('Color Conversion', () => {
	it('Hex To RGB - 6 values', () => {
		expect(hexToRGB('#ffffff')).to.equal("rgb('255, 255, 255')");
	});

	it('Hex To RGB - 3 values', () => {
		expect(hexToRGB('#fff')).to.equal("rgb('255, 255, 255')");
	});

	it('RGB To Hex', () => {
		expect(RGBToHex(255, 255, 255)).to.equal('#ffffff');
	});

	it('RGB To HSL', () => {
		expect(RGBToHSL(255, 255, 255)).to.equal('hsl("0, 0%, 100%")');
	});

	it('HSL To RGB', () => {
		expect(HSLToRGB(0, 0, 100)).to.equal('rgb("255, 255, 255")');
	});

	it('Hex To HSL - 3 values', () => {
		expect(hexToHSL('#fff')).to.equal('hsl("0, 0%, 100%")');
	});

	it('Hex To HSL - 6 values', () => {
		expect(hexToHSL('#ffffff')).to.equal('hsl("0, 0%, 100%")');
	});

	it('HSL To Hex', () => {
		expect(HSLToHex(0, 0, 100)).to.equal('#ffffff');
	});
});
