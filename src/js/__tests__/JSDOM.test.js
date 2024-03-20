import { NumberCard } from "../app";

test("JSDOM test", () => {
  document.body.innerHTML = '<div class="container"></div>';
  const container = document.querySelector(".container");
  const numberCard = new NumberCard("123456789", container);
  numberCard.bindToDOM();
  expect(container.innerHTML).toEqual(NumberCard.prntEL());
});
// КАК НАСТРОИТЬ ОКРУЖЕНИЕ? ПРИ ТЕСТЕ ОШИБКА
