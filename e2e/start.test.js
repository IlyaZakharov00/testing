import puppeteer from "puppeteer";

describe("should open page", () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage(); // открываем пустую страницу
  });

  test("test should open localhost 9000 and wait 'body' ", async () => {
    await page.goto("http://localhost:9000"); // открываем localhost 9000

    await page.waitForSelector("body"); // ждем появления body
  });

  afterEach(async () => {
    await browser.close(); // закрываем браузер
  });
});
