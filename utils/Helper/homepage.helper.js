class helperHomepage{

    //logic homepage
    async clickDictionary(){
        await this.dictionaryButton.click()
    }

    async clickTranslate(){
        await this.translateButton.click()
    }
}

export default new helperHomepage;