import pages from "../pages";

class helperMemopage {
  async clearText(length) {
    for (let i = 0; i < length; i++) {
      await driver.keys("Backspace");
    }
  }

  async longPressItem(itemName) {
    const { height, width } = await driver.getWindowRect();
    const midX = width / 2;
    const midY = height / 4;
    await driver.executeScript("mobile: longClickGesture", [
      { x: midX, y: midY, duration: 2000 },
    ]);
  }

  async verifyItem(action = "", listLength = 0, target = "") {
    switch (action) {
      case "rename":
        for (let i = 0; i < length; i++) {
          if (await expect(pages.memoPage.lblTitleItemCard).tohaveText(target))
            break;
        }
        break;
      default:
        break;
    }
  }

  async verifyChatDetail() {
    await expect(pages.memoPage.bubbleChatLeft[0]).toBeExisting();
    await expect(pages.memoPage.bubbleChatRight[0]).toBeExisting();
    await pages.memoPage.btnIconHeader.click();
    await expect(pages.memoPage.lblTitleInfoMemoDetail).toBeExisting();
    await pages.memoPage.btnContinue.click();
  }
}

export default new helperMemopage();
