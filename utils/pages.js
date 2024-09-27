import homepage from "../features/pageobjects/homepage.page";
import dictionaryPage from "../features/pageobjects/dictionary.page";

class Pages {
    get homepage() {return homepage}
    get dictionaryPage() {return dictionaryPage}
}

export default new Pages();