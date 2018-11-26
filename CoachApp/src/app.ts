import { Router, RouterConfiguration } from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';

export class App {
    router: Router;
    title: string = 'CoachSmart';

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = this.title;
        config.map([
            { route: '', moduleId: PLATFORM.moduleName('home/home'), title: 'Home' }
        ]);

        this.router = router;
    }
}
