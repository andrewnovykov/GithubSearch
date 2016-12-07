import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  private username: string;
  private client_id = 'cb8dcf034d875e2de47f';
  private client_secret = 'f3575d0444c87ab70839233e8c0c375d034b4035';


  constructor(private _http: Http) {
    console.info('github service Ready....');
    this.username = 'papapin';

  }

  getUser(){
    return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&'+this.client_secret).map( res => res.json());
  }

  getRepos(){
    return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&'+this.client_secret).map( res => res.json());
  }

  updateUser(username: string) {
      this.username = username;
  }
}
