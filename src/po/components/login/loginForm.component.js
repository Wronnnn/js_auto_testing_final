import {BaseComponent} from "../common/base.component";

export class LoginFormComponent extends BaseComponent{
    constructor() {
        super("//div[@class='login_wrapper-inner']");
        this.usernameInputSelector = "//input[@id='user-name']";
        this.passwordInputSelector = "//input[@id='password']";
        this.loginButtonSelector = "//input[@id='login-button']";
        this.errorMessageContainerSelector = "//h3[@data-test='error']"
    }

    async inputUsername(userName){
        if(userName === null || userName === undefined){
            await this.rootEl.$(this.usernameInputSelector).clearValue();
        } else {
            await this.rootEl.$(this.usernameInputSelector).setValue(userName);
        }
    }

    async clearUsername(){
        await this.rootEl.$(this.usernameInputSelector).clearValue();
    }

    async inputPassword(userPassword){
        if(userPassword === null || userPassword === undefined){
            await this.rootEl.$(this.passwordInputSelector).clearValue();
        } else {
            await this.rootEl.$(this.passwordInputSelector).setValue(userPassword);
        }
    }

    async clearPassword(){
        await this.rootEl.$(this.passwordInputSelector).clearValue();
    }

    async clickLoginButton(){
        await this.rootEl.$(this.loginButtonSelector).click();
    }

    async fetchErrorMessage(){
        return await this.rootEl.$(this.errorMessageContainerSelector).getText();
    }


}