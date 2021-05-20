import { expect } from "chai";
import adjustHue from "../adjustHue";

describe("Adjust Color Hue", () => {
  it("Lighten Color", () => {
    expect(adjustHue("#E59898", 20)).to.be.equal("#f9acac");
  });

  it("Darken Color", () => {
    expect(adjustHue("#E59898", -20)).to.be.equal("#d18484");
  });
});
