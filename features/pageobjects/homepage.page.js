class Homepage {
    get dictionaryButton () {
        // return $('~dictionary');
        return $('//android.view.View[@content-desc="Dictionary"]');
        //android.view.View[@content-desc="Dictionary"] --> please use this xpath
    }

    get translateButton () {
        // return $('~translate');
        return $('//android.view.View[@content-desc="Translate"]');
        //android.view.View[@content-desc="Translate"] --> please use this xpath
    }

    async clickDictionary(){
        await this.dictionaryButton.click()
    }

    async clickTranslate(){
        await this.translateButton.click()
    }
}

export default new Homepage();