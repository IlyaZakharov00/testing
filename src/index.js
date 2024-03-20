import "./css/style.css";
import { NumberCard } from "./js/app";

document.addEventListener("DOMContentLoaded", () => {
  console.log("загружено");
  const validator = new NumberCard(); // создаем класс

  let btnValidate = document.querySelector(".btn"); //поиск кнопки проверки валидатора

  btnValidate.addEventListener("click", (e) => {
    // следим за кликами по кнопке
    e.preventDefault();
    validator.numberCard = document.getElementById("card_number").value; // поиск значения в инпуте
    validator.validateCard(validator.numberCard);

    let cards = document.querySelectorAll(".card"); // поиск карточек
    cards.forEach((item) => {
      item.classList.remove("hidden"); // сначала удаляем класс скрытия
      if (!item.classList.contains(validator.paymentSystem)) {
        item.classList.add("hidden"); // если в карточка не содержит класс с paymentsystem то добавляем класс invalid
      }
    });
  });
});

// Точка входа webpack
// Не пишите код в данном файле
