import {BaseComponent} from "./base.component";

export class HeaderLabelComponent extends BaseComponent {
    constructor() {
        super("//div[@class='header_label']");
    }

    async fetchLabelTitle() {
        return (await this.rootEl).getText();
    }
}