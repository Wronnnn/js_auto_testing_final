import {BasePage} from "./base.page";
import { HeaderLabelComponent } from "../components";

export class DashboardPage extends BasePage {
    constructor() {
        super("/inventory.html");
        this.headerLabel = new HeaderLabelComponent();
    }
}