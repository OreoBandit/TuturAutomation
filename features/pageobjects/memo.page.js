class MemoPage {

    get lblTitleHeader() {
        return $('//android.widget.TextView[@content-desc="lblTitleHeader"]')
    }
    
    get btnBack() {
        return $('//android.view.View[@content-desc="btnBack"]');
    }

    get btnTextHeader() {
        return $('id=btnTextHeader');
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

    get lblDateItemCard() {
        return $('id=lblDateItemCard');
    }

    get lblTimeItemCard() {
        return $('id=lblTimeItemCard');
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
        return $('id=lblTitlePopup')
    }
    
    get btnIconItemCard() {
        return $$('//android.view.View[@content-desc="btnCheckBoxItemCard"]')
    }

    get lblTitleItemCard() {
        return $$('//android.widget.TextView[@content-desc="lblTitleItemCard"]')
    }

    get btnFloatingDelete(){
        return $('//android.view.View[@content-desc="btnFloatingDelete"]')
    }
}

export default new MemoPage();