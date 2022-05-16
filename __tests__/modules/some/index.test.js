"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const some_1 = __importDefault(require("../../../src/modules/some"));
it("Should some two numbers", () => {
    expect((0, some_1.default)(1, 5)).toBe(6);
});
