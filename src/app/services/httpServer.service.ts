import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable ({
    providedIn: 'root'
})

export class HttpServerService {

    private serverUrl;
    private headers;

    constructor(private httpClient: HttpClient) {
        // please include the server URL over here
        this.serverUrl = '';
        this.headers = {
            'headers': {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Headers': 'Cache-Control, Pragma, Origin, Authorization, Content-type, X-requested-with, Accept',
                'Access-control-Allow-Origin': '*'
            }
        };
    }

    public fetchFilters() {
        return this.httpClient.get(this.serverUrl + '/filters');
    }

    public fetchVideos() {
        return this.httpClient.get(this.serverUrl + '/videos');
    }


}

