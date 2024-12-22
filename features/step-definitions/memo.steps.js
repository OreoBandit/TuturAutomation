import { Given, When, Then } from "@cucumber/cucumber";
import pages from "../../utils/pages";
import memoPage from "../pageobjects/memo.page";
import memopageHelper from "../../utils/Helper/memopage.helper";

Given(/^user on homepage$/, async () => {
    await driver.pause(1000)
    await pages.homepage.btnMemos.waitForDisplayed({timeout: 60000})
});

When(/^user tap memo button$/, async () => {
    await driver.pause(3000)
    await pages.homepage.btnMemos.click()
});

Then(/^user in memo$/, async () => {
    await driver.pause(3000)
    await pages.memoPage.lblTitleHeader.waitForDisplayed({timeout: 60000})
    await expect(pages.memoPage.lblTitleHeader).toHaveText("Recorded Memos")
    await pages.memoPage.btnItemCard[0].isExisting()
});

Given(/^user in the memo page$/, async () => {
    await driver.pause(3000)
    await pages.memoPage.lblTitleHeader.waitForDisplayed({timeout: 60000})
    await expect(pages.memoPage.lblTitleHeader).toHaveText("Recorded Memos")
    await pages.memoPage.listItemCard[0].isExisting()
});

Given(/^user has memo$/, async () => {
    await driver.pause(1000)
	await pages.memoPage.lblTitleItemCard[0].waitForDisplayed({timeout: 60000})
    await pages.memoPage.btnItemCard[0].waitForDisplayed({timeout: 60000})
});

When(/^user search for memo "(.*)"$/, async (memoName) => {
    await driver.pause(1000)
	await pages.memoPage.txtInputSearch.waitForDisplayed({timeout: 60000})
    await pages.memoPage.txtInputSearch.click()
    await driver.keys(memoName)
});

Then(/^user will see memo with title "(.*)"$/, async (memoName) => {
	await driver.pause(1000)
    const length = memoName.length
    await expect(memoPage.lblTitleItemCard[0]).toHaveText(memoName)
    await memopageHelper.clearText(length) 
});


When(/^user click on the first item$/, async () => {
    await driver.pause(3000)
    await pages.memoPage.listItemCard[0].isExisting()
	await pages.memoPage.btnItemCard[0].click()
});

Then(/^user is on memo detail$/, async () => {
    await driver.pause(3000)
    await pages.memodetailPage.lblTitleHeader.isExisting()
	await expect(pages.memodetailPage.lblTitleHeader).toHaveText("Memo Detail")
});

When(/^user long press item$/, async () => {
    await driver.pause(1000)
    const itemCard = await pages.memoPage.btnItemCard[0]
    await memopageHelper.longPressItem(itemCard)
})

When(/^user choose rename$/, async () => {
    await driver.pause(1000)
    await pages.memoPage.btnRightPopup.click()
});

When(/^user rename item "(.*)"$/, async (newName) => {
    const currentTitle = await memoPage.txtInputPopup.getText()
    const length = await currentTitle.length
    console.log('cek items', currentTitle, length)
    await driver.pause(1000)
    await pages.memoPage.txtInputPopup.click()
    await memopageHelper.clearText(length)
    await driver.keys(newName)
    await pages.memoPage.btnRightPopup.click()
});

Then(/^user "(.*)" item will be present$/, async (newName) => {
    await driver.pause(3000)
    await expect(pages.memoPage.lblTitleItemCard[0]).toHaveText(newName)
});

When(/^user choose delete$/, async () => {
	await driver.pause(1000)
    await pages.memoPage.btnLeftPopup.click()
});

When(/^user select items "(.*)"$/, async (items) => {
    await driver.pause(1000)
	await pages.memoPage.btnItemCard[items].click()
});

Then(/^user deletes item$/, async () => {
	await driver.pause(1000)
    await pages.memoPage.btnFloatingDelete.click()
    await pages.memoPage.btnRightPopup.click()
    await expect(pages.memoPage.lblEmptyMemo).toBeExisting()
});


Then(/^user has conversation in memoDetail$/, async () => {
	await driver.pause(3000)
    await memopageHelper.verifyChatDetail()
    await pages.memoPage.btnBack.click()
});
