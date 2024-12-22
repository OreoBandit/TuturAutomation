import { Given, When, Then } from "@cucumber/cucumber";
import pages from "../../utils/pages";
import homepageHelper from "../../utils/Helper/homepage.helper";


Given(/^user open app$/, async () => {
	await driver.pause(5000)
    await pages.homepage.btnCenter.click()
});


Given(/^user in homepage$/, async () => {
    await driver.pause(5000);
	await expect(pages.homepage.btnRecord).toBeExisting()
    await expect(pages.homepage.btnDictionary).toBeExisting()
    await expect(pages.homepage.btnMemos).toBeExisting()
});

When(/^hand landmark is active$/, async () => {
	await driver.pause(5000)
    await expect(pages.homepage.handLandMarkOverlay).toBeExisting()
});

When(/^user translate SIBI$/, async () => {
	await driver.pause(5000)
    await expect(pages.homepage.lblGestureResult).toBeExisting()
});

When(/^reply button is present$/, async () => {
	await driver.pause(5000)
    await expect(pages.homepage.btnReply).toBeExisting()
});

When(/^user reply with text "(.*)"$/, async (reply) => {
	await driver.pause(5000)
    await pages.homepage.btnReply.click()
    await homepageHelper.checkPopup()
    await homepageHelper.inputReplyText(reply)
});

Then(/^user should see reply "(.*)"$/, async (reply) => {
    await driver.pause(5000)
    await homepageHelper.validateReplyText(reply)
});

When(/^user reply with gesture "(.*)"$/, async (reply) => {
    await driver.pause(5000)
    await pages.homepage.btnReply.click()
    await homepageHelper.inputReplyGesture(reply)
});

Then(/^user should see gesture results$/, async () => {
    await driver.pause(5000)
    await homepageHelper.validateReplyGesture()
    await driver.pause(3000)
});

When(/^user click on memo page button$/, async () => {
    await driver.pause(3000)
	await pages.homepage.btnMemos.click()
});

Then(/^user will not have memo$/, async () => {
    await driver.pause(3000)
	await expect(pages.memoPage.lblEmptyMemo).toBeExisting()
    await pages.memoPage.btnBack.click()
});

When(/^user click record button$/, async () => {
    await driver.pause(3000)
    await pages.homepage.btnRecord.click()
});

When(/^user is in dialogue$/, async () => {
    await driver.pause(3000)
    await expect(pages.homepage.lblGestureResult).toBeExisting()
});

When(/^user save conversation "(.*)"$/, async (memoTitle) => {
    await driver.pause(3000)
    await pages.homepage.btnStopRecording.click()
    await driver.pause(2000)
    await pages.homepage.txtInputPopup.click()
    await driver.keys(memoTitle)
    await pages.homepage.btnRightPopup.click()
});

Then(/^memo "(.*)" will be present$/, async (memoTitle) => {
	await driver.pause(3000)
    await expect(pages.memoPage.btnItemCard[0]).toBeExisting
    await expect(pages.memoPage.lblTitleItemCard[0]).toHaveText(memoTitle)
    await pages.memoPage.btnBack.click()
});
