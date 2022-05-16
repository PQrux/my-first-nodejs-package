"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multiplication_1 = __importDefault(require("../../../src/modules/multiplication"));
it("Should multiply two numbers", () => {
    expect((0, multiplication_1.default)(5, 5)).toBe(25);
});
