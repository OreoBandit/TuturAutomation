import pages from "../pages";


class helperMemopage{

    async clearText(length) {
        console.log('cek length', length)
        for (let i = 0; i < length; i++) {
            await driver.keys("Backspace")
        }  
    }

    async longPressItem(itemName) {
        const { height, width } = await driver.getWindowRect()
        const midX = width/2
        const midY = height/2
        await driver.executeScript('mobile: longClickGesture', [{x: midX, y: midY, duration: 2000}]);
    }

    async verifyItem(action = '', listLength = 0, target = '') {
        switch(action){
            case 'rename':
                for (let i = 0; i < length; i++) {
                    if (await expect(pages.memoPage.lblTitleItemCard).tohaveText(target)) break;
                }
                break;
            default:
                break;
        }
    }
}

export default new helperMemopage;