import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServerService {
  constructor(private http: Http) {}
  storeServers(servers: any[]) {
    const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post('https://udemy-ng-http.firebaseio.com/data.json',
    //   servers,
    //   {headers: headers});
    return this.http.put('http://127.0.0.1:3000/',servers,
      {headers: headers});
  }
  getServers() {
    return this.http.get('http://127.0.0.1:3000/')
      .map(
        (response: Response) => {
          const data = response.json();
          for (const server of data) {
            server.name = server.name;
          }
          return data;
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong.'+error);
        }
      );
  }
  getAppName() {
    return this.http.get('http://127.0.0.1:3000/')
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }
}
