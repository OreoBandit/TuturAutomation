class Homepage {
    get btnRecord() {
        return $('//android.view.View[@content-desc="btnRecord"]')
    }
    
    get btnDictionary () {
        return $('//android.view.View[@content-desc="btnDictionary"]');
    }

    get btnMemos() {
        return $('//android.view.View[@content-desc="btnMemos"]');
    }

    get btnFinishRecording(){
        return $('//android.view.View[@content-desc="btnFinishRecording"]')
    }

    get btnTexttospeech() {
        return $('//android.widget.ImageView[@content-desc="btnTexttospeech"]')
    }

    get btnCamera() {
        return $('//android.widget.ImageView[@content-desc="btnCamera"]')
    }

    get btnFlash() {
        return $('//android.widget.ImageView[@content-desc="btnFlash"]')
    }

    get handLandMarkOverlay() {
        return $('//android.view.View[@content-desc="handLandMarkOverlay"]')
    }

    get lblGestureResult(){
        return $('//android.widget.TextView[@content-desc="lblGestureResult"]')
    }

    get txtInputPopup(){
        return $('//android.view.View[@content-desc="txtInputPopup"]');
    }

    get lblTitlePopup() {
        return $('//android.widget.TextView[@content-desc="lblTitlePopup"]')
    }

    get lblMsgPopup() {
        return $('//android.widget.TextView[@content-desc="lblMsgPopup"]')
    }

    get btnReply(){
        return $('//android.widget.ImageView[@content-desc="btnReply"]')
    }

    get btnCenter(){
        return $('//android.view.View[@content-desc="btnCenter"]')
    }
    
    get btnLeftPopup(){
        return $('//android.view.View[@content-desc="btnLeftPopup"]');
    }

    get btnRightPopup(){
        return $('//android.view.View[@content-desc="btnRightPopup"]');
    }
}

export default new Homepage();