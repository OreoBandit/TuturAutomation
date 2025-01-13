class MemoDetail {
    get lblTitleHeader() {
        return $('//android.widget.TextView[@content-desc="lblTitleHeader"]')
    }
    
    get btnBack () {
        return $('id=btnBack');
    }

    get btnIconHeader(){
        return $('id=btnIconHeader')
    }

    get lblTitleInfoMemoDetail() {
        return $('id=lblTitleInfoMemoDetail')
    }

    get lblDateInfoMemoDetail() {
        return $('id=lblDateInfoMemoDetail')
    }

    get lblConversationInfoMemoDetail() {
        return $('id=lblConversationInfoMemoDetail')
    }

    get btnContinue(){
        return $('id=btnContinue')
    }
}

export default new MemoDetail();