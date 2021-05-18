import { expect } from 'chai';
import { generateRandomColor } from '../randomColor';

describe('Random Color', () => {
	it('Hex Format', () => {
		expect(generateRandomColor()).to.match(/^#[a-zA-Z0-9]{6}/);
	});

	it('RGB Format', () => {
		expect(generateRandomColor('rgb')).to.match(/rgb\(\'(\d{1,3}), (\d{1,3}), (\d{1,3})\'\)/);
	});

	it('HSL Format', () => {
		expect(generateRandomColor('hsl')).to.match(/hsl\(\"\s*(\d+)\s*,\s*(\d+(?:\.\d+)?%)\s*,\s*(\d+(?:\.\d+)?%)\"\)/);
	});
});
