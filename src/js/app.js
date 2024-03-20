export class NumberCard {
  constructor(number, parentEL) {
    this.numberCard = number;
    this.controlNumber = null;
    this.checkNumber = false;
    this.paymentSystem = undefined;
    this.validate = false;
    this.parentEL = parentEL;
  }

  static get prntEL() {
    return `
     <div class="container">
        <div class="check-card">
            <h3>Check your credit card number</h3>
            <ul class="cards list-unstyled">
                <li><span class="card visa" title="Visa">Visa</span></li>
                <li><span class="card masterCard" title="Mastercard">Mastercard</span></li>
                <li><span class="card americanExpress" title="American Express">American Express</span></li>
                <li><span class="card discover" title="Discover">Discover</span></li>
                <li><span class="card jcb" title="JCB">JCB</span></li>
                <li><span class="card international" title="Diners Club">Diners Club</span></li>
                <li><span class="card mir" title="Mir">Mir</span></li>

            </ul>
            <form id="form" class="form-inline" novalidate="novalidate">
                <div class="form-group">
                    <input class="form-control" id="card_number" name="card_number" type="text"
                        placeholder="Credit card number" data-original-title="" title="">
                    <a id="submitform" class="btn btn-validate">
                        <div class="btn-validate-text">Click to Validate</div>
                    </a>
                </div>
            </form>
        </div>
    </div>
        `;
  }

  findContorlNum(number) {
    if (number.match(/\D{1,}/)) return false; //если пользователь ввел что угодно кроме цифр

    let nmbRvrsArray = String(number).split("").reverse(); // создаем массив из перевернутого значения number и удаляем первый элемент
    let arrForSum = [];

    for (let i = 1; i < nmbRvrsArray.length; i++) {
      //проходимся циклом по перевернутому массиву
      if (i % 2 !== 0) {
        //ищем нечетные позиции
        let itemX2 = nmbRvrsArray[i] * 2; // умножаем число на 2
        if (String(itemX2).length > 1) {
          // если получили выше число двузначное
          let sumItemX2Str =
            Number(String(itemX2)[0]) + Number(String(itemX2)[1]); // получаем сумму цифр в числе itemX2
          arrForSum.push(sumItemX2Str);
        } else arrForSum.push(itemX2); // если число однозначное
      } else {
        arrForSum.push(Number(nmbRvrsArray[i])); // числа четных позиции пушим в массив для дальнейшего вычисления суммы
      }
    }

    let sumArrForSum = arrForSum.reduce((sum, num) => {
      return sum + num; // возвращаем сумму массива
    }, 0);

    this.controlNumber = (10 - (sumArrForSum % 10)) % 10; // ищем контрольную цифру
    return true;
  }

  checkContorlNumber(number) {
    let lastNumber = Number(String(number[number.length - 1]));
    if (this.controlNumber == lastNumber) {
      return (this.checkNumber = true);
    } else return (this.checkNumber = false);
  }

  findPaymentSystem(number) {
    let firstSixNum = [];
    let firstFourNum = [];

    for (let i = 0; i < 4; i++) {
      firstFourNum.push(number[i]);
    }

    for (let i = 0; i < 6; i++) {
      firstSixNum.push(number[i]);
    }

    if (number.match(/^4\d{1,}/)) {
      this.paymentSystem = "visa"; // проверка на visa
    }

    if (
      number.match(/^5[1-5]\d{1,}/) ||
      (Number(firstSixNum.join("")) >= 222100 &&
        Number(firstSixNum.join("")) <= 272099)
    ) {
      this.paymentSystem = "masterCard"; // проверка на mastercard
    }

    if (number.match(/^34\d{1,}/) || number.match(/^37\d{1,}/)) {
      this.paymentSystem = "americanExpress"; // проверка на american express
    }

    if (
      number.match(/^6011\d{1,}/) ||
      number.match(/^64[4-9]\d{1,}/) ||
      number.match(/^65\d{1,}/) ||
      Number(
        firstSixNum.join("") >= 622126 && Number(firstSixNum.join("")) <= 622925
      )
    ) {
      this.paymentSystem = "discover"; // проверка на discover
    }

    if (
      Number(firstFourNum.join("")) >= 3528 &&
      Number(firstFourNum.join("")) <= 3589
    ) {
      this.paymentSystem = "jcb"; // проверка на jcb
    }

    if (number.match(/^36\d{1,}/)) {
      this.paymentSystem = "international"; // проверка на international
    }

    if (number.match(/^2\d{1,}/)) {
      this.paymentSystem = "mir"; // проверка на mir
    }
    console.log("дошли до платежной системы");
    if (this.paymentSystem == undefined) {
      return false; // если неизвестна платежная система то показываем сообщение и return
    } else return this.paymentSystem; // если платежная система известна - возвращаем ее
  }

  validateCard(number) {
    if (
      this.findContorlNum(number) &&
      this.checkContorlNumber(number) &&
      this.findPaymentSystem(number)
    ) {
      return (this.validate = true);
    } else return (this.validate = false);
  }
}
