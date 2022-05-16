"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const subtraction_1 = __importDefault(require("../../../src/modules/subtraction"));
it("Should subtract two numbers", () => {
    expect((0, subtraction_1.default)(5, 3)).toBe(2);
});
