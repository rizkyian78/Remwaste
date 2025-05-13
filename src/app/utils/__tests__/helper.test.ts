import { getImageBasedOnSize, calculateVATPrice } from "../helper";

describe("getImageBasedOnSize", () => {
  it("returns correct image URL for size <= 4", () => {
    const url = getImageBasedOnSize(4);
    expect(url).toContain("4-yarder-skip.jpg");
  });

  it("returns correct image URL for size between 4 and 16", () => {
    const url = getImageBasedOnSize(8);
    expect(url).toContain("16-yarder-skip.jpg");
  });

  it("returns correct image URL for size between 16 and 20", () => {
    const url = getImageBasedOnSize(18);
    expect(url).toContain("20-yarder-skip.jpg");
  });

  it("returns default image URL for size > 20", () => {
    const url = getImageBasedOnSize(40);
    expect(url).toContain("40-yarder-skip.jpg");
  });
});

describe("calculateVATPrice", () => {
  it("calculates VAT price correctly", () => {
    const basePrice = 100;
    const vatPercentage = 20;
    const result = calculateVATPrice(basePrice, vatPercentage);
    expect(result).toBe(120); // 100 + (100 * 0.2)
  });

  it("rounds the result to nearest integer", () => {
    const basePrice = 99;
    const vatPercentage = 17.5;
    const result = calculateVATPrice(basePrice, vatPercentage);
    expect(result).toBe(116); // 99 + (99 * 0.175) = 116.325, rounded to 116
  });

  it("handles zero VAT percentage", () => {
    const basePrice = 100;
    const vatPercentage = 0;
    const result = calculateVATPrice(basePrice, vatPercentage);
    expect(result).toBe(100);
  });
});
