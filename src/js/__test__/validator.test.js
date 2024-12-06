import { validateCardNumber, getCardType } from "../validation.js";
// import puppeteer from 'puppeteer';

test("validateCardNumber должен вернуть true для корректного номера карты", () => {
  expect(validateCardNumber("4111111111111111")).toBe(true);
});

test("validateCardNumber должен вернуть false для некорректного номера карты", () => {
  expect(validateCardNumber("1234567890123456")).toBe(false);
});

test("getCardType должен вернуть Visa для номера карты, начинающегося с 4", () => {
  expect(getCardType("4024007167101863")).toBe("Visa");
});

test("getCardType должен вернуть MasterCard для номера карты, начинающегося с 5", () => {
  expect(getCardType("5442327434737823")).toBe("MasterCard");
});

test("getCardType должен вернуть American Express для номера карты, начинающегося с 34", () => {
  expect(getCardType("374061250862596")).toBe("American Express");
});

test("getCardType должен вернуть Mir для номера карты, начинающегося с 220", () => {
  expect(getCardType("2200000000000000")).toBe("Mir");
});
