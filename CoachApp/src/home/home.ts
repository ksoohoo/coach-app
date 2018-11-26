import { App } from 'app';
import { autoinject } from 'aurelia-framework';

@autoinject()
export class Home {
    msg: string;
    app: App;

    constructor(app: App) {
        this.app = app;
        this.msg = `Welcome to the ${this.app.title} app!`;
    }
}
