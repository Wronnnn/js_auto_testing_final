export class BaseComponent{
    constructor(rootSelector){
        this.rootSelector = rootSelector;
    }

    get rootEl(){
        return $(this.rootSelector);
    }

    checkIfVisible(errMsg, selector = null) {
        if (selector === null) {
            if (!(this.rootEl).isDisplayed()) {
                throw new Error(errMsg);
            }
        } else {
            if (!(this.rootEl).$(selector).isDisplayed()) {
                throw new Error(errMsg);
            }
        }
    }
}