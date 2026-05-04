import test, { expect } from "@playwright/test";

// test('first playwright test', function() {

// });

test.only('first playwright test', async ({browser}) => {
    // chrome - plugings, cookies... etc
    // newContext => opens a fresh browser instance
    // we can use this method to inject cookies for example, basically configure the browser as it launches
    // this can help establish sessions the same it is done in cypress so avoid re-logins
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());
    await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy!!!');
});

test('2nd playwright test', async ({page}) => {
    await page.goto('https://google.com');
    console.log(await page.title());
    await expect(page).toHaveTitle('Google');
});