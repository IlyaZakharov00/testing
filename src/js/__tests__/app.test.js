import { NumberCard } from "../app";

test("Find control number should return true", () => {
  const newCard = new NumberCard("371449635398431");
  const result = newCard.findContorlNum(newCard.numberCard);
  expect(result).toBe(true);
});

test("Find control number should return false", () => {
  const newCard = new NumberCard("asdfasdfad");
  const result = newCard.findContorlNum(newCard.numberCard);
  expect(result).toBe(false);
});

test("Check control number should return true", () => {
  const newCard = new NumberCard("371449635398431");
  newCard.findContorlNum(newCard.numberCard);
  let result = Number(
    String(newCard.numberCard[newCard.numberCard.length - 1])
  );
  expect(result).toBe(newCard.controlNumber);
});

test("Check control number should return false", () => {
  const newCard = new NumberCard("12345678910111213");
  newCard.findContorlNum(newCard.numberCard);
  let result = newCard.checkContorlNumber(newCard.numberCard);
  expect(result).toBe(newCard.checkNumber);
});

test("Validate number card should return true", () => {
  const newCard = new NumberCard("371449635398431");
  let result = newCard.validateCard(newCard.numberCard);
  expect(result).toBe(true);
});

test("Validate number card should return false", () => {
  const newCard = new NumberCard("asdfasdfad");
  let result = newCard.validateCard(newCard.numberCard);
  expect(result).toBe(false);
});
