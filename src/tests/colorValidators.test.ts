import { expect, assert } from "chai";
import { validateHex, validateHSL, validateRGB } from "../colorValidators";
import { generateRandomColor } from "../randomColor";

describe("Color Validators", () => {
  it("Hex Format", () => {
    expect(validateHex("#ffffff")).to.be.true;
  });

  it("RGB Format", () => {
    expect(validateRGB('rgb("255, 255, 255")')).to.be.true;
  });

  it("HSL Format", () => {
    expect(validateHSL('hsl("23, 0%, 0%")')).to.be.true;
  });
});
