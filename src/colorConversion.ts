export type Color = number | string;

export function hexToRGB(hex: string) {
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

	return `rgb('${+r}, ${+g}, ${+b}')`;
}

export function RGBToHex(r: Color, g: Color, b: Color, a?: Color) {
	r = r.toString(16);
	g = g.toString(16);
	b = b.toString(16);
	a = a?.toString(16);

	if (r.length === 1) r = '0' + r;
	if (g.length === 1) g = '0' + g;
	if (b.length === 1) b = '0' + b;
	if (a?.length === 1) a = '0' + a;

	if (a) {
		return `#${r}${g}${b}${a}`;
	}

	return `#${r}${g}${b}`;
}
