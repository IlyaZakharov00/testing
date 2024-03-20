import { NumberCard } from "../app";

test("Find control number should return number", () => {
  const newCard = new NumberCard();
  newCard.numberCard = "371449635398431";
  const result = newCard.findContorlNum("371449635398431");
  expect(result).toBe(newCard.controlNumber);
});

// test("Find control number should return alert", () => {
//   const newCard = new NumberCard();
//   newCard.numberCard = "asdfasdfad";
//   const result = newCard.findContorlNum("asdfasdf");
//   expect(result).toBe(false);
// });

// test("Check control number should return true", () => {
//   const newCard = new NumberCard();
//   newCard.numberCard = "371449635398431";
//   let result = Number(
//     String(newCard.numberCard[newCard.numberCard.length - 1])
//   );

//   expect(result).toBe(newCard.findContorlNum("371449635398431"));
// });

// test("Check control number should return false", () => {
//   const newCard = new NumberCard();
//   newCard.numberCard = "123456789101213";
//   let result = newCard.checkContorlNumber(newCard.numberCard);
//   expect(result).toBe("Такой карты не существует!");
// });
