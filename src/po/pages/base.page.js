export class BasePage{
    constructor(url){
        this.url = url;
    }

    open(){
        return browser.url(this.url);
    }

    fetchTabTitle(){
        return browser.getTitle();
    }
}