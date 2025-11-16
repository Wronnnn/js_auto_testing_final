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
        this.checkIfVisible("Input username tag is not visible on the page", this.usernameInputSelector);
        await this.rootEl.$(this.usernameInputSelector).setValue(userName);
    }

    async clearUsername(){
        this.checkIfVisible("Input username tag is not visible on the page", this.usernameInputSelector);
        await this.rootEl.$(this.usernameInputSelector).clearValue();
    }

    async inputPassword(userPassword){
        this.checkIfVisible("Input password tag is not visible on the page", this.passwordInputSelector);
        await this.rootEl.$(this.passwordInputSelector).setValue(userPassword);
    }

    async clearPassword(){
        this.checkIfVisible("Input password tag is not visible on the page", this.passwordInputSelector);
        await this.rootEl.$(this.passwordInputSelector).clearValue();
    }

    async clickLoginButton(){
        await this.rootEl.$(this.loginButtonSelector).click();
    }

    async fetchErrorMessage(){
        return await this.rootEl.$(this.errorMessageContainerSelector).getText();
    }


}