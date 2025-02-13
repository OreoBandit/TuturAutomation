import { Given, When, Then } from "@wdio/cucumber-framework";
import pages from "../../utils/pages";


Given(/^user in homepage$/, async () => {
    await driver.pause(5000);
    await expect(pages.homepage.btnRecord).toBeExisting()
    await expect(pages.homepage.btnDictionary).toBeExisting()
    await expect(pages.homepage.btnMemos).toBeExisting()
});

When(/^user tap dictionary$/, async () => {
    await driver.pause(1000)
    await expect(pages.homepage.btnDictionary).toBeExisting() //tunggu komponen muncul
    await pages.homepage.btnDictionary.click()
});

Then(/^user in dictionary page$/, async () => {
    await driver.pause(1000);
    await expect(pages.dictionaryPage.lblPlaceholderDictionary).toBeExisting()
});

When(/^user search "(.*)"$/, async (keyword) => {
    await driver.pause(3000)
    await pages.dictionaryPage.txtInputDictionary.click()
    await driver.keys(keyword)
    await pages.dictionaryPage.btnTutur.click()
});

When(/^user paste$/, async () => {
    await driver.pause(3000)
    await pages.dictionaryPage.btnPaste.click()
    await pages.dictionaryPage.btnTutur.click()
});

Then(/^user will see "(.*)" displayed in results$/, async (keyword) => {
    await pages.dictionaryPage.lblDictionaryResult.waitForDisplayed({timeout: 10000})
    await driver.pause(2000)
    await expect(pages.dictionaryPage.lblDictionaryResult).toHaveText(keyword)
    await pages.dictionaryPage.btnNextDictionary.click()
});

Then(/^app will display unable to show error "(.*)"$/, async (keyword) => {
    await driver.pause(5000)
    const expectedMsg = `Gestur untuk \"${keyword}\" tidak ditemukan.`
    await pages.dictionaryPage.lblErrorGestureDictionary.waitForDisplayed({timeout: 10000})
    await expect(pages.dictionaryPage.lblErrorGestureDictionary).toHaveText(expectedMsg)
    await pages.dictionaryPage.btnNextDictionary.click()
});
