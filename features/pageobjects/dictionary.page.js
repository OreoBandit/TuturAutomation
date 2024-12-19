class DictionaryPage{
    get btnSayit(){
        return $('//android.view.View[@content-desc="Say it"]')
    }

    get btnTranslate(){
        return $('//android.view.View[@content-desc="Translate"]')
    }

    get btnHistory() {
        return $('//android.view.View[@content-desc="History"]')
    }

    get lblPlaceholderDictionary(){
        return $('//android.widget.TextView[@content-desc="lblPlaceholderDictionary"]')
    }

    get btnPaste(){
        return $('//android.view.View[@content-desc="btnPaste"]')
    }

    get txtInputDictionary(){
        return $('//android.view.View[@content-desc="txtInputDictionary"]')
    }

    get btnTutur(){
        return $('//android.view.View[@content-desc="btnTutur"]')
    }

    get lblDictionaryResult(){
        return $('//android.widget.TextView[@content-desc="lblDictionaryResult"]')
    }

    get btnNextDictionary(){
        return $('//android.view.View[@content-desc="btnNextDictionary"]')
    }
}

export default new DictionaryPage();