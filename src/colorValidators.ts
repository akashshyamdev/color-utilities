/**
 * Validate if string is hexadecimal
 * @param hex string
 * @returns a boolean stating if the string is a valid hex
 */

export function validateHex(hex: string) {
	const re = /^#[a-zA-Z0-9]{6}/;

	return re.test(hex);
}

/**
 * Validate if string is rgb
 * @param rgb string
 * @returns a boolean stating if the string is a valid rgb
 */

export function validateRGB(rgb: string) {
	const re = /rgb\(\"(\d{1,3}), (\d{1,3}), (\d{1,3})\"\)/;

	return re.test(rgb);
}

/**
 * Validate if string is hsl
 * @param hsl string
 * @returns a boolean stating if the string is a valid hsl
 */

export function validateHSL(hsl: string) {
	const re = /hsl\(\"\s*(\d+)\s*,\s*(\d+(?:\.\d+)?%)\s*,\s*(\d+(?:\.\d+)?%)\"\)/;

	return re.test(hsl);
}
