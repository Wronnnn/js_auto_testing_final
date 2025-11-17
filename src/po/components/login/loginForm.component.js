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

    async clearUsername() {
        this.checkIfVisible("Input username tag is not visible on the page", this.usernameInputSelector);

        const el = await this.rootEl.$(this.usernameInputSelector);

        await browser.execute((input) => {
            const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
                window.HTMLInputElement.prototype,
                "value"
            ).set;

            nativeInputValueSetter.call(input, "");

            input.dispatchEvent(new Event("input", { bubbles: true }));
            input.dispatchEvent(new Event("change", { bubbles: true }));
        }, el);
    }


    async inputPassword(userPassword){
        this.checkIfVisible("Input password tag is not visible on the page", this.passwordInputSelector);
        await this.rootEl.$(this.passwordInputSelector).setValue(userPassword);
    }

    async clearPassword() {
        const el = await this.rootEl.$(this.passwordInputSelector);

        this.checkIfVisible("Input password tag is not visible on the page", this.passwordInputSelector);

        await browser.execute((input) => {
            const nativeInputSetter = Object.getOwnPropertyDescriptor(
                window.HTMLInputElement.prototype,
                "value"
            ).set;

            nativeInputSetter.call(input, "");

            input.dispatchEvent(new Event("input", { bubbles: true }));
            input.dispatchEvent(new Event("change", { bubbles: true }));
        }, el);
    }


    async clickLoginButton(){
        await this.rootEl.$(this.loginButtonSelector).click();
    }

    async fetchErrorMessage(){
        return await this.rootEl.$(this.errorMessageContainerSelector).getText();
    }


}