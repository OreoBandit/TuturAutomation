import homepage from "../features/pageobjects/homepage.page";
import dictionaryPage from "../features/pageobjects/dictionary.page";
import memoPage from "../features/pageobjects/memo.page";
import memodetailPage from "../features/pageobjects/memodetail.page";
import missionPage from "../features/pageobjects/mission.page";

class Pages {
    get homepage() {return homepage}
    get dictionaryPage() {return dictionaryPage}
    get memoPage() {return memoPage}
    get memodetailPage() {return memodetailPage}
    get missionPage() {return missionPage}
}

export default new Pages();