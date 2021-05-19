export type Color = number | string;
export type ColorFormat = 'hex' | 'rgb' | 'hsl';

/**
 * Converts a hex string into RGB
 * @param hex A hexadecimal string
 * @returns A rgb string in this format - rgb(SOME_VALUE, SOME_VALUE, SOME_VALUE)
 */
export function hexToRGB(hex: string, returnSeparatedValues = false) {
	let r: Color = 0,
		g: Color = 0,
		b: Color = 0;

	// 3 digits + '#'
	if (hex.length === 4) {
		r = `0x${hex[1]}${hex[1]}`;
		g = `0x${hex[2]}${hex[2]}`;
		b = `0x${hex[3]}${hex[3]}`;
	} else if (hex.length === 7) {
		r = `0x${hex[1]}${hex[2]}`;
		g = `0x${hex[3]}${hex[4]}`;
		b = `0x${hex[5]}${hex[6]}`;
	}

	if (returnSeparatedValues) return [r, g, b];

	return `rgb(${+r}, ${+g}, ${+b})`;
}

/**
 * Convert rgb value to hex string
 * @param r - red value
 * @param g - green value
 * @param b - blue value
 * @returns a hexadecimal string, eg - #ffffff
 */

export function RGBToHex(r: Color, g: Color, b: Color) {
	r = r.toString(16);
	g = g.toString(16);
	b = b.toString(16);

	if (r.length === 1) r = '0' + r;
	if (g.length === 1) g = '0' + g;
	if (b.length === 1) b = '0' + b;

	return `#${r}${g}${b}`;
}

/**
 * Converts RGB colors to HSL
 * @param r red value
 * @param g green value
 * @param b blue value
 * @returns a color in HSL format, eg - hsl(255, 25, 25)
 */
export function RGBToHSL(r: number, g: number, b: number) {
	// Make r, g, and b fractions of 1
	r /= 255;
	g /= 255;
	b /= 255;

	// Find greatest and smallest channel values
	let cmin = Math.min(r, g, b),
		cmax = Math.max(r, g, b),
		delta = cmax - cmin;

	let h = 0,
		s = 0,
		l = 0;

	// Calculate hue
	// No difference
	if (delta === 0) h = 0;
	// Red is max
	else if (cmax === r) h = ((g - b) / delta) % 6;
	// Green is max
	else if (cmax === g) h = (b - r) / delta + 2;
	// Blue is max
	else h = (r - g) / delta + 4;

	h = Math.round(h * 60);

	// Make negative hues positive behind 360°
	if (h < 0) h += 360;

	// Calculate lightness
	l = (cmax + cmin) / 2;

	// Calculate saturation
	s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

	// Multiply l and s by 100
	s = +(s * 100).toFixed(1);
	l = +(l * 100).toFixed(1);

	return `hsl(${h}, ${s}%, ${l}%)`;
}

/**
 * Converts HSL colors to RGB
 * @param h hue value
 * @param s saturation value
 * @param l lightness value
 * @returns a color in RGB format, eg - rgb(20, 20, 20)
 */
export function HSLToRGB(h: number, s: number, l: number) {
	// Must be fractions of 1
	s /= 100;
	l /= 100;

	let c = (1 - Math.abs(2 * l - 1)) * s,
		x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
		m = l - c / 2,
		r = 0,
		g = 0,
		b = 0;

	if (0 <= h && h < 60) {
		r = c;
		g = x;
		b = 0;
	} else if (60 <= h && h < 120) {
		r = x;
		g = c;
		b = 0;
	} else if (120 <= h && h < 180) {
		r = 0;
		g = c;
		b = x;
	} else if (180 <= h && h < 240) {
		r = 0;
		g = x;
		b = c;
	} else if (240 <= h && h < 300) {
		r = x;
		g = 0;
		b = c;
	} else if (300 <= h && h < 360) {
		r = c;
		g = 0;
		b = x;
	}
	r = Math.round((r + m) * 255);
	g = Math.round((g + m) * 255);
	b = Math.round((b + m) * 255);

	return `rgb(${r}, ${g}, ${b})`;
}

/**
 * Converts hex string to HSL
 * @param hex a hex string
 * @returns a color in HSL format, eg - hsl(20, 20, 20)
 */
export function hexToHSL(hex: string) {
	// Convert hex to RGB first
	let r: Color = 0,
		g: Color = 0,
		b: Color = 0;

	if (hex.length == 4) {
		r = '0x' + hex[1] + hex[1];
		g = '0x' + hex[2] + hex[2];
		b = '0x' + hex[3] + hex[3];
	} else if (hex.length == 7) {
		r = '0x' + hex[1] + hex[2];
		g = '0x' + hex[3] + hex[4];
		b = '0x' + hex[5] + hex[6];
	}

	// Convert to HSL
	r = (r as number) / 255;
	g = (g as number) / 255;
	b = (b as number) / 255;

	let cmin = Math.min(r, g, b),
		cmax = Math.max(r, g, b),
		delta = cmax - cmin,
		h = 0,
		s = 0,
		l = 0;

	if (delta == 0) h = 0;
	else if (cmax == r) h = ((g - b) / delta) % 6;
	else if (cmax == g) h = (b - r) / delta + 2;
	else h = (r - g) / delta + 4;

	h = Math.round(h * 60);

	if (h < 0) h += 360;

	l = (cmax + cmin) / 2;
	s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
	s = +(s * 100).toFixed(1);
	l = +(l * 100).toFixed(1);

	return `hsl(${h}, ${s}%, ${l}%)`;
}

/**
 * Converts HSL color to hex
 * @param h hue value
 * @param s saturation value
 * @param l lightness value
 * @returns a color in hex format, eg - #ffffff
 */
export function HSLToHex(h: Color, s: Color, l: Color) {
	s = (s as number) / 100;
	l = (l as number) / 100;

	let c = (1 - Math.abs(2 * l - 1)) * s,
		x = c * (1 - Math.abs((((h as number) / 60) % 2) - 1)),
		m = l - c / 2,
		r: Color = 0,
		g: Color = 0,
		b: Color = 0;

	if (0 <= h && h < 60) {
		r = c;
		g = x;
		b = 0;
	} else if (60 <= h && h < 120) {
		r = x;
		g = c;
		b = 0;
	} else if (120 <= h && h < 180) {
		r = 0;
		g = c;
		b = x;
	} else if (180 <= h && h < 240) {
		r = 0;
		g = x;
		b = c;
	} else if (240 <= h && h < 300) {
		r = x;
		g = 0;
		b = c;
	} else if (300 <= h && h < 360) {
		r = c;
		g = 0;
		b = x;
	}
	// Having obtained RGB, convert channels to hex
	r = Math.round((r + m) * 255).toString(16);
	g = Math.round((g + m) * 255).toString(16);
	b = Math.round((b + m) * 255).toString(16);

	// Prepend 0s, if necessary
	if (r.length == 1) r = '0' + r;
	if (g.length == 1) g = '0' + g;
	if (b.length == 1) b = '0' + b;

	return `#${r}${g}${b}`;
}
