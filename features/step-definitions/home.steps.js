import { Given, When } from "@cucumber/cucumber";
import pages from "../../utils/pages";

Given(/^user tap dictionary$/, async () => {
    await expect(pages.homepage.dictionaryButton).toBeDisplayed({timeout: 12000}); //tunggu komponen muncul
	await pages.homepage.dictionaryButton.click()
});

When(/^user tap translate$/, async () => {
    await expect(pages.homepage.translateButton).toBeDisplayed({timeout: 12000}); //tunggu komponen muncul
	await pages.homepage.translateButton.click()
});