import { Router, RouterConfiguration, RouteConfig } from 'aurelia-router';
import { EventAggregator } from 'aurelia-event-aggregator';
import { PLATFORM } from 'aurelia-pal';
import { HttpClient } from 'aurelia-fetch-client';
import { autoinject } from 'aurelia-framework';
import { Team } from 'classes/team';
import { TeamSelected } from 'messages';

@autoinject()
export class App {
    router: Router;
    title: string = 'CoachSmart';
    teams: Team[];
    selectedTeam: Team;

    constructor(private http: HttpClient) {
        http.fetch('api/teams')
            .then((r: Response) => r.json())
            .then((t: Team[]) => {
                this.teams = t;
            });
    }

    configureRouter(config: RouterConfiguration, router: Router): void {
        this.router = router;
        config.title = this.title;
        config.map([
            { route: '', moduleId: PLATFORM.moduleName('home/home'), title: 'Home' },
            { route: 'roster', moduleId: PLATFORM.moduleName('roster/roster'), title: 'Roster' }
        ]);

    }
}
