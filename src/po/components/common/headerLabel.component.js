import {BaseComponent} from "./base.component";

export class HeaderLabelComponent extends BaseComponent {
    constructor() {
        super("//div[@class='header_label']");
    }

    async fetchLabelTitle() {
        this.checkIfVisible("Label title is not visible on the page")
        return this.rootEl.getText();
    }
}