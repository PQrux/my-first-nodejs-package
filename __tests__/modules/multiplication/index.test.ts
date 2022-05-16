import Multiplication from "../../../src/modules/multiplication";

it("Should multiply two numbers", () => {
    expect(Multiplication(5, 5)).toBe(25);
});