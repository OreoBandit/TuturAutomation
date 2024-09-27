class Homepage {
    get recordButton() {
        return $('//android.view.View[@content-desc="Record"]')
    }
    
    get dictionaryButton () {
        return $('//android.view.View[@content-desc="Dictionary"]');
    }

    get memosButton() {
        return $('//android.view.View[@content-desc="Memos"]');
    }
}

export default new Homepage();