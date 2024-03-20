import puppeteer, { Dialog } from "puppeteer";

describe("Test valid card", () => {
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

  test("Form should render ", async () => {
    await page.goto("http://localhost:9000"); // открываем localhost 9000

    await page.waitForSelector(".form-inline"); // ждем появления form-inline
  });

  test("If numberCard valid - card should add calss 'valid'", async () => {
    await page.goto("http://localhost:9000"); // открываем localhost 9000

    await page.waitForSelector(".form-inline"); // ждем появления form-inline

    const form = await page.$(".form-inline");
    const input = await form.$(".form-control");
    const btn = await form.$(".btn-validate");

    await input.type("5408640109002337");
    await btn.click();

    await page.waitForSelector("form[novalidate='valid']"); // ждем появления form[novalidate='valid]
  }, 30000);

  test("If numberCard valid - card should alert ", async () => {
    await page.goto("http://localhost:9000"); // открываем localhost 9000

    await page.waitForSelector(".form-inline"); // ждем появления form-inline

    const form = await page.$(".form-inline");
    const input = await form.$(".form-control");
    const btn = await form.$(".btn-validate");

    await input.type("12345678910111213");
    await btn.click();
    await page.waitForSelector("form[novalidate='novalidate']"); // ждем появления form[novalidate='valid] 
    //КАК ЗАКРЫТЬ АЛЕРТ?
  }, 30000);

  afterEach(async () => {
    await browser.close(); // закрываем браузер
  });
});
