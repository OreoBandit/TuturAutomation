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

Then(/^header button should exist$/, async () => {
    await driver.pause(3000)
	await expect(pages.homepage.btnCameraFront).toBeExisting()
    await expect(pages.homepage.btnTTSDisabled).toBeExisting()
	await expect(pages.homepage.btnFlashDisabled).toBeExisting()
})


Then(/^header button is functioning while front camera active$/, async () => {
	await driver.pause(3000)
    await homepageHelper.checkComponentsFrontFacing()
});


Then(/^header button is functioning while back camera active$/, async () => {
	await driver.pause(3000)
    await homepageHelper.checkComponentsBackFacing()
});


When(/^hand landmark is active$/, async () => {
	await driver.pause(5000)
    await expect(pages.homepage.handLandMarkOverlay).toBeExisting()
});

When(/^user translate SIBI$/, async () => {
	await driver.pause(5000)
    await expect(pages.homepage.lblGestureResult).toBeExisting()
});

When(/^user translate SIBI with TTS$/, async () => {
	await driver.pause(5000)
    await pages.homepage.btnTTSDisabled.click()
    await expect(pages.homepage.btnTTSEnabled).toBeExisting()
    await expect(pages.homepage.lblGestureResult).toBeExisting()
    await pages.homepage.btnTTSEnabled.click()
    await driver.pause(3000)
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
    await pages.homepage.btnFinishRecording.click()
    await driver.pause(2000)
    await pages.homepage.txtInputPopup.click()
    await driver.keys(memoTitle)
    await pages.homepage.btnRightPopup.click()
});

Then(/^memo "(.*)" will be present$/, async (memoTitle) => {
	await driver.pause(3000)
    await pages.homepage.btnMemos.click()
    await expect(pages.memoPage.btnItemCard[0]).toBeExisting
    await expect(pages.memoPage.lblTitleItemCard[0]).toHaveText(memoTitle)
    await pages.memoPage.btnBack.click()
});

// negative
Then(/^gesture is not recognized$/, async () => {
    await driver.pause(3000)
    const isExisting = await pages.homepage.lblGestureResult.isExisting();
    if (isExisting) {
        throw new Error("Gesture was recognized, but it shouldn't have been.");
    }
});

Then(/^user reply empty text$/, async () => {
    await driver.pause(3000)
    await pages.homepage.btnReply.click()
    await pages.homepage.btnRightPopup.click()
    const isExisting = await pages.homepage.lblTitlePopup.isExisting()
    if (isExisting) {
        throw new Error("Popup reply text was present, but it shouldn't have been.");
    }
});

Then(/^user reply empty gesture$/, async () => {
    await driver.pause(3000)
    await pages.homepage.btnReply.click()
    await pages.homepage.btnLeftPopup.click()
    const isExisting = await pages.dictionaryPage.lblDictionaryResult.isExisting()
    if (isExisting) {
        throw new Error("User went to dictionary, but it shouldn't have been.");
    }
});


When(/^user finish recording$/, async () => {
    await driver.pause(3000)
    await pages.homepage.btnFinishRecording.click()
});


Then(/^record should not be saved$/, async () => {
    await driver.pause(2000)
    const isExisting = await pages.homepage.lblTitlePopup.isExisting()
    if (!isExisting) {
        throw new Error("Recording is saved, but it shouldn't have been because title was empty.");
    }
    await pages.homepage.btnLeftPopup.click()
});


