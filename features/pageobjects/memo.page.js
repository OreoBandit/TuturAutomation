class MemoPage {

    get lblTitleHeader() {
        return $('//android.widget.TextView[@content-desc="lblTitleHeader"]')
    }
    
    get btnBack() {
        return $('//android.view.View[@content-desc="btnBack"]');
    }

    get txtInputSearch() {
        return $('//android.view.View[@content-desc="txtInputSearch"]');
    }

    get listItemCard() {
        return $$('//android.view.View[@content-desc="listItemCard"]');
    }

    get btnItemCard() {
        return $$('//android.view.View[@content-desc="btnItemCard"]');
    }

    get lblTitleItemCard() {
        return $$('//android.widget.TextView[@content-desc="lblTitleItemCard"]');
    }

    get lblChatLeft(){
        return $$('//android.widget.TextView[@content-desc="lblChatLeft"]')
    }

    get lblChatRight(){
        return $$('//android.widget.TextView[@content-desc="lblChatRight"]')
    }

    get lblDateItemCard() {
        return $$('//android.widget.TextView[@content-desc="lblDateItemCard"]');
    }

    get lblTimeItemCard() {
        return $$('//android.widget.TextView[@content-desc="lblTimeItemCard"]');
    }

    get lblEmptyMemo(){
        return $('//android.widget.TextView[@content-desc="lblEmptyMemo"]')
    }

    get txtInputPopup(){
        return $('//android.widget.EditText[@content-desc="txtInputPopup"]');
    }

    get btnLeftPopup(){
        return $('//android.view.View[@content-desc="btnLeftPopup"]');
    }

    get btnRightPopup(){
        return $('//android.view.View[@content-desc="btnRightPopup"]');
    }

    get lblPopupError(){
        return $('id=lblPopupError')
    }

    get lblTitlePopup() {
        return $('//android.widget.TextView[@content-desc="lblTitlePopup"]')
    }

    get lblMsgPopup() {
        return $('//android.widget.TextView[@content-desc="lblMsgPopup"]')
    }

    get lblTitleInfoMemoDetail(){
        return $('//android.widget.TextView[@content-desc="lblTitleInfoMemoDetail"]')
    }

    get btnContinue(){
        return $('//android.view.View[@content-desc="btnContinue"]')
    }

    get btnIconHeader(){
        return $('//android.view.View[@content-desc="btnIconHeader"]')
    }
    
    get btnIconItemCard() {
        return $$('//android.view.View[@content-desc="btnCheckBoxItemCard"]')
    }

    get bubbleChatLeft() {
        return $$('(//android.view.View[@content-desc="bubbleChatLeft"])')
    }

    get bubbleChatRight() {
        return $$('(//android.view.View[@content-desc="bubbleChatRight"])')
    }

    get btnFloatingDelete(){
        return $('//android.view.View[@content-desc="btnFloatingDelete"]')
    }
}

export default new MemoPage();