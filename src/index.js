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

    if (
      !validator.numberCard.match(/^\d+$/) ||
      validator.numberCard.length < 13
    ) {
      // если номер не проходит проверку
      validator.numberCard = document.getElementById("card_number").value = ""; // очищаем инпут
      alert("Неправильно набран номер карты."); // возвращаем алерт
    } else if (validator.validateCard(validator.numberCard)) {
      // иначе если проверка пройдена и валдиация успешна
      const form = document.querySelector(".form-inline"); // поиск формы
      form.setAttribute("novalidate", "valid"); // добавление форме attribute valid
      let cards = document.querySelectorAll(".card"); // поиск карточек
      cards.forEach((item) => {
        item.classList.remove("hidden"); // сначала удаляем класс скрытия
        if (!item.classList.contains(validator.paymentSystem)) {
          item.classList.add("hidden"); // если в карточка не содержит класс с paymentsystem то добавляем класс invalid
        }
      });
      console.log("Номер карты " + validator.numberCard);
      console.log("Контрольная цифра карты " + validator.controlNumber);
      console.log("Проверка контрольной цифры карты " + validator.checkNumber);
      console.log("Платёжная система карты " + validator.paymentSystem);
      console.log("Карта прошла валидацию " + validator.validate);
    } else {
      //иначе если валидация не прошла
      validator.numberCard = document.getElementById("card_number").value = ""; // очищаем инпут
      alert("Ошибка в номере карты! Пожалуйста, повторите ещё раз."); // возвращаем алерт
    }
  });
});

// Точка входа webpack
// Не пишите код в данном файле
