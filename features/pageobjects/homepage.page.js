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

    get btnTTSEnabled() {
        return $('//android.widget.ImageView[@content-desc="btnTTSEnabled"]')
    }

    get btnTTSDisabled(){
        return $('//android.widget.ImageView[@content-desc="btnTTSDisabled"]')
    }

    get btnCameraFront() {
        return $('//android.widget.ImageView[@content-desc="btnCameraFront"]')
    }

    get btnCameraBack() {
        return $('//android.widget.ImageView[@content-desc="btnCameraBack"]')
    }

    get btnFlashDisabled(){
        return $('//android.widget.ImageView[@content-desc="btnFlashDisabled"]')
    }

    get btnFlashEnabled(){
        return $('//android.widget.ImageView[@content-desc="btnFlashEnabled"]')
    }

    get handLandMarkOverlay() { // khusus ini pake default xpath karena overlay
        return $('//androidx.compose.ui.viewinterop.ViewFactoryHolder/android.widget.FrameLayout/android.view.View')
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