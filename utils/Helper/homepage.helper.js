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

    async checkTTS() {
        await expect(pages.homepage.btnTTSDisabled).toBeExisting()
        await pages.homepage.btnTTSDisabled.click() // TTS NOW ENABLED
        await driver.pause(2000)
        await expect(pages.homepage.btnTTSEnabled).toBeExisting()
        await pages.homepage.btnTTSEnabled.click() // TTS NOW DISABLED
    }


    async checkFlash(type = ''){
        if(type === 'front') {
            await pages.homepage.btnFlashDisabled.click()
            await expect(pages.homepage.btnFlashDisabled).toBeExisting() // FLASH CANT BE USED IN FRONT CAM
        } else {
            await pages.homepage.btnFlashDisabled.click() // ENABLE FLASH
            await driver.pause(2000)
            await expect(pages.homepage.btnFlashEnabled).toBeExisting() // FLASH ENABLED
            await pages.homepage.btnFlashEnabled.click() // DISABLE FLASH
        }
    }

    async checkCam(type = ''){
        if (type === 'front') {
            await expect(pages.homepage.btnCameraFront).toBeExisting() //CHECK FRONT CAM
        } else {
            await expect(pages.homepage.btnCameraFront).toBeExisting() //CHECK FRONT CAM
            await pages.homepage.btnCameraFront.click() // CHANGE TO BACK CAM
            await driver.pause(3000)
            await expect(pages.homepage.btnCameraBack).toBeExisting() //CHECK BACK CAM
        }
    }

    
    async checkComponentsFrontFacing() {
        //CAMERA
        await driver.pause(2000)
        await this.checkCam('front')

        // TTS
        await driver.pause(2000)
        await this.checkTTS()


        // FLASH
        await driver.pause(2000)
        await this.checkFlash('front')
    }

    async checkComponentsBackFacing() {

        //CAMERA 
        await driver.pause(2000)
        await this.checkCam('back')

        //TTS
        await driver.pause(2000)
        await this.checkTTS()
        
        //FLASH
        await driver.pause(2000)
        await this.checkFlash('back')

        await pages.homepage.btnCameraBack.click() // CHANGE TO FRONT CAM AGAIN
    }
}

export default new helperHomepage;