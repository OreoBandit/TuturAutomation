import { Given, When, Then } from "@cucumber/cucumber";
import pages from "../../utils/pages";
import missionPage from "../pageobjects/mission.page";

Given(/^user in dictionary page$/, async () => {
  await driver.pause(1000);
  await expect(pages.dictionaryPage.lblPlaceholderDictionary).toBeExisting();
});

When(/^user clicks the learning button$/, async () => {
  await driver.pause(2000);
  await pages.dictionaryPage.btnLearning.click();
});

Then(/^user will be in the mission page$/, async () => {
  await driver.pause(2000);
  await expect(pages.missionPage.lblMissionCategory[0]).toHaveText("Easy");
});

Given(/^user in mission page$/, async () => {
  await driver.pause(2000);
  await expect(pages.missionPage.lblTitleHeader).toHaveText("Learning");
  await expect(pages.missionPage.btnMissionCategory[0]).toBeExisting();
});

Then(/^user will be on the mission list page$/, async () => {
  await driver.pause(2000);
  await expect(pages.missionPage.lblTitleHeader).toHaveText("Easy");
});

Then(/^user go back to mission page$/, async () => {
  await driver.pause(2000);
  await pages.missionPage.btnBack.click();
});

When(/^user clicks on easy level$/, async () => {
  await driver.pause(2000);
  await pages.missionPage.btnMissionCategory[0].click();
});

When(/^user pick the top level$/, async () => {
  await driver.pause(2000);
  await pages.missionPage.btnMission[0].click();
});

Then(/^user should see content preview$/, async () => {
  await driver.pause(2000);
  const text = await pages.dictionaryPage.lblDictionaryResult.getText();
  if (text !== "A") {
    throw new Error("Mission content should be A");
  }
});

Then(/^user should translate the targeted words$/, async () => {
  await driver.pause(4000);
  await expect(pages.missionPage.sectionTimer).toBeExisting();
  await expect(pages.missionPage.lblTitlePopup).toHaveText("Congratulations!");
  await pages.missionPage.btnCenter.click();
  await pages.missionPage.btnBack.click();
});

Then(/^user progress should be saved$/, async () => {
  await driver.pause(2000);
  const currentProgress = await pages.missionPage.lblProgressEasy.getText();
  if (currentProgress === "0%") {
    throw new Error("No Process saved but it should be recorded");
  }
});

Then(/^user log in with Google$/, async () => {
  await driver.pause(2000);
  await pages.missionPage.btnRightPopup.click();
  await driver.pause(4000);
  await expect(pages.missionPage.lblTitleHeader).toHaveText("Learning");
  await pages.missionPage.btnBack.click();
});

When(/^user clicks on logout button$/, async () => {
  await driver.pause(2000);
  await pages.missionPage.btnIconHeader.click();
  await pages.missionPage.btnRightPopup.click();
});

Then(/^user will be logged out$/, async () => {
  await driver.pause(2000);
  await expect(pages.dictionaryPage.lblPlaceholderDictionary).toBeExisting();
  await pages.dictionaryPage.btnLearning.click();
  await expect(pages.missionPage.lblTitlePopup).toHaveText("Please sign in");
  await pages.missionPage.btnLeftPopup.click();
});

// NEGATIVE CASE
When(/^user log in with Google with no internet$/, async () => {
  await driver.pause(2000);
  await pages.missionPage.btnRightPopup.click();
  await driver.pause(3000);
});

Then(/^user will go back to dictionary page$/, async () => {
  await driver.pause(3000);
  await expect(pages.dictionaryPage.lblPlaceholderDictionary).toBeExisting();
});

Then(/^user run out of time when translating$/, async () => {
  await driver.pause(15000); //nunggu timer habis
  await expect(missionPage.lblTitlePopup).toHaveText("Time Out!");
});

Then(/^user exit mission$/, async () => {
  await driver.pause(3000);
  await pages.missionPage.btnLeftPopup.click();
  await expect(missionPage.lblTitleHeader).toHaveText("Easy");
  await pages.missionPage.btnBack.click();
});
