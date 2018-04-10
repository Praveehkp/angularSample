import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
baseUrl:string = "https://reqres.in/api/users?page=2";


constructor(private _http: Http) {
}


get_users(){
    return this._http.get(this.baseUrl).map((response:Response) => response.json());
}

}
