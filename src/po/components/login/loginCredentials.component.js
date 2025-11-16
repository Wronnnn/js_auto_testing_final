import {BaseComponent} from "../common/base.component";
import {$} from "@wdio/globals";

export class LoginCredentialsComponent extends BaseComponent{
    constructor(){
        super("//div[@class='login_credentials_wrap-inner']");
        this.validUsernamesDivSelector = "//div[@id='login_credentials']";
        this.validPasswordDivSelector = "//div[@class='login_password']";
    }

    async fetchUserNames() {
        return (await $(this.validUsernamesDivSelector).getText()).split("\n").slice(1);
    }

    async fetchValidPassword(){
        return (await $(this.validPasswordDivSelector).getText()).split("\n").slice(1).join();
    }
}