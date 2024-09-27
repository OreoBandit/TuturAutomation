class Recording{
    get btnSayit(){
        return $('//android.view.View[@content-desc="Say it"]')
    }

    get btnTranslate(){
        return $('//android.view.View[@content-desc="Translate"]')
    }

    get btnHistory() {
        return $('//android.view.View[@content-desc="History"]')
    }
}

export default new Recording();