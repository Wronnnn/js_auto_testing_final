import {BasePage} from "./base.page";
import { LoginCredentialsComponent, LoginFormComponent} from "../components";

export class LoginPage extends BasePage{

    constructor(){
        super("/");
        this.loginCredentials = new LoginCredentialsComponent();
        this.loginForm = new LoginFormComponent();
    }

}