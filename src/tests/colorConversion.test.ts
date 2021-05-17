import { hexToRGB } from '../colorConversion';

import * as mocha from 'mocha';
import * as chai from 'chai';

const expect = chai.expect;

describe('Color Conversions', () => {
	it('Hex To RGB - 6 values', () => {
		expect(hexToRGB('#ffffff')).to.equal("rgb('255, 255, 255')");
	});

	it('Hex To RGB - 3 values', () => {
		expect(hexToRGB('#fff')).to.equal("rgb('255, 255, 255')");
	});
});
