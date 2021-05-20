import { expect } from 'chai';
import mixColor from '../colorMixer';

describe('Color Mixing', () => {
	it('RGB FORMAT', () => {
		expect(mixColor('rgb(255, 0, 0)', 'rgb(0, 0, 255)', 0.5, 'rgb')).to.be.equal('rgb(127.5, 0, 127.5)');
	});

	it('HSL FORMAT', () => {
		expect(mixColor('hsl(60, 100%, 50%)', 'hsl(0, 100%, 50%)', 0.5, 'hsl')).to.be.equal('rgb(255, 127.5, 0)');
	});

	it('Hex FORMAT', () => {
		expect(mixColor('#FF0000', '#FFFF00', 0.5, 'hex')).to.be.equal('rgb(255, 127.5, 0)');
	});
});
