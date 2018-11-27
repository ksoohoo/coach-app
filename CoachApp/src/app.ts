import { Router, RouterConfiguration, RouteConfig } from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';
import { autoinject } from 'aurelia-framework';

export class App {
    router: Router;
    title: string = 'CoachSmart';


    configureRouter(config: RouterConfiguration, router: Router): void {
        this.router = router;
        config.title = this.title;
        config.map([
            { route: '', moduleId: PLATFORM.moduleName('home/home'), title: 'Home' },
            { route: 'roster', moduleId: PLATFORM.moduleName('roster/roster'), title: 'Roster' }
        ]);

        console.log(this.router);
    }
}
