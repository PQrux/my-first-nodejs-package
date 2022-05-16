"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const division_1 = __importDefault(require("../../../src/modules/division"));
it("Should divide two numbers", () => {
    expect((0, division_1.default)(25, 5)).toBe(5);
});
