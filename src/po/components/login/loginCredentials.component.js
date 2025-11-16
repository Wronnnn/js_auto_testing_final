import {BaseComponent} from "../common/base.component";
import {$} from "@wdio/globals";

export class LoginCredentialsComponent extends BaseComponent{
    constructor(){
        super("//div[@class='login_credentials_wrap-inner']");
        this.validUsernamesDivSelector = "//div[@id='login_credentials']";
        this.validPasswordDivSelector = "//div[@class='login_password']";
    }

    async fetchUserNames() {
        this.checkIfVisible("Usernames container is not visible on the page", this.validUsernamesDivSelector);
        return (await $(this.validUsernamesDivSelector).getText()).split("\n").slice(1);
    }

    async fetchValidPassword(){
        this.checkIfVisible("Valid password container is not visible on the page", this.validPasswordDivSelector);
        return (await $(this.validPasswordDivSelector).getText()).split("\n").slice(1).join();
    }
}