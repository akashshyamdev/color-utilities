import { expect } from 'chai';
import { getContrast } from '../colorContrast';

describe('Color Contrast', () => {
	it('Hex Format', () => {
		expect(getContrast('#ffffff')).to.be.equal('black');
		expect(getContrast('#fff')).to.be.equal('black');
		expect(getContrast('#6B1010')).to.be.equal('white');
	});

	it('RGB Format', () => {
		expect(getContrast('rgb(255, 255, 255)', 'rgb')).to.be.equal('black');
		expect(getContrast('rgb(235, 188, 188)', 'rgb')).to.be.equal('black');
		expect(getContrast('rgb(52, 9, 9)', 'rgb')).to.be.equal('white');
	});

	it('HSL Format', () => {
		expect(getContrast('hsl(0, 0%, 100%)', 'hsl')).to.be.equal('black');
		expect(getContrast('hsl(0, 0%, 0%)', 'hsl')).to.be.equal('white');
		expect(getContrast('hsl(0, 27%, 86%)', 'hsl')).to.be.equal('black');
	});
});
