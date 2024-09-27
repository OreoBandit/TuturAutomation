import { Given, When, Then } from "@cucumber/cucumber";
import pages from "../../utils/pages";

Given(/^user tap dictionary$/, async () => {
    await expect(pages.homepage.dictionaryButton).toBeDisplayed({timeout: 12000}); //tunggu komponen muncul
	await pages.homepage.dictionaryButton.click()
});

When(/^user tap translate$/, async () => {
    await expect(pages.homepage.translateButton).toBeDisplayed({timeout: 12000}); //tunggu komponen muncul
	await pages.homepage.translateButton.click()
});

Given(/^User in homepage$/, async () => {
    await driver.pause(5000);
	await expect(pages.homepage.recordButton).toBeExisting();
    await expect(pages.homepage.dictionaryButton).toBeExisting();
    await expect(pages.homepage.memosButton).toBeExisting();
});

When(/^User tap dictionary$/, async () => {
    await driver.pause(5000)
	await pages.homepage.dictionaryButton.click();
});

Then(/^User in dictionary page$/, async () => {
    await driver.pause(5000);
	await expect(pages.dictionaryPage.btnSayit).toBeExisting();
    await expect(pages.dictionaryPage.btnTranslate).toBeExisting();
    await expect(pages.dictionaryPage.btnHistory).toBeExisting()
    await pages.dictionaryPage.btnTranslate.click();
});
