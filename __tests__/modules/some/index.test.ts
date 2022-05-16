import Some from "../../../src/modules/some";

it("Should some two numbers", () => {
    expect(Some(1, 5)).toBe(6);
});