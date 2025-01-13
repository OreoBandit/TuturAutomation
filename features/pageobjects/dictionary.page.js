class DictionaryPage{
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
     
    get lblErrorGestureDictionary() {
        return $('//android.widget.TextView[@content-desc="lblErrorGestureDictionary"]')
    }

    get lblArrowErrorDictionary(){
        return $('//android.widget.TextView[@content-desc="lblArrowErrorDictionary"]')
    }
}

export default new DictionaryPage();