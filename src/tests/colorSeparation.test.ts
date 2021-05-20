import { expect } from "chai";
import { separateHSL, separateRGB } from "../colorSeparation";

describe("Color Separation", () => {
  it("HSL Separation", () => {
    expect(separateHSL("hsl(255, 20%, 25%)")).to.have.all.members([
      "255",
      "20",
      "25",
    ]);
    expect(separateHSL("hsl(20, 5%, 5%)")).to.have.all.members([
      "20",
      "5",
      "5",
    ]);
    expect(separateHSL("hsl(2, 100%, 100%)")).to.have.all.members([
      "2",
      "100",
      "100",
    ]);
  });

  it("RGB Separation", () => {
    expect(separateRGB("rgb(255, 20, 25)")).to.have.all.members([
      "255",
      "20",
      "25",
    ]);
    expect(separateRGB("rgb(5, 240, 205)")).to.have.all.members([
      "5",
      "240",
      "205",
    ]);
    expect(separateRGB("rgb(255, 40, 05)")).to.have.all.members([
      "255",
      "40",
      "05",
    ]);
  });
});
