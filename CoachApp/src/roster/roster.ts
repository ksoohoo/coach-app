import { HttpClient } from 'aurelia-fetch-client';
import { autoinject } from 'aurelia-framework';

@autoinject()
export class Roster {
    http: HttpClient;
    constructor(http: HttpClient) {
        this.http = http;

        this.http.fetch('api/values')
            .then((r: Response) => r.json())
            .then((data: number[]) => {
                console.log(data);
        });
    }
}
