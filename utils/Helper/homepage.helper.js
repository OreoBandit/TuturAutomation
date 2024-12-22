import pages from "../pages";

class helperHomepage{

    async checkHeaderComponents(element) {
        if (element === pages.homepage.btnFlash) pages.homepage.btnCamera.click()
        for (var i = 0; i < 2; i++){
            await element.click()
        }
        if (element === pages.homepage.btnFlash) pages.homepage.btnCamera.click()
    }

    async checkPopup(){
        await expect(pages.homepage.txtInputPopup).toBeExisting()
        await expect(pages.homepage.btnLeftPopup).toBeExisting()
        await expect(pages.homepage.btnRightPopup).toBeExisting()
    }

    async inputReplyText(reply){
        await pages.homepage.txtInputPopup.click()
        await driver.keys(reply)
        await pages.homepage.btnRightPopup.click()
    }

    async inputReplyGesture(reply){
        await pages.homepage.txtInputPopup.click()
        await driver.keys(reply)
        await pages.homepage.btnLeftPopup.click()
    }

    async validateReplyText(reply){
        await expect(pages.homepage.lblTitlePopup).toBeExisting()
        await expect(pages.homepage.lblTitlePopup).toHaveText("Speaker Replied")
        await expect(pages.homepage.lblMsgPopup).toHaveText(reply)
        await pages.homepage.btnCenter.click()
    }

    async validateReplyGesture(){
        await expect(pages.dictionaryPage.lblDictionaryResult).toBeExisting()
        await expect(pages.dictionaryPage.btnNextDictionary).toBeExisting()
    }
}

export default new helperHomepage;