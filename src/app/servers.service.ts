import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServersService {

  constructor(private httpClient : HttpClient) { }
  servers : any

  storeServers(server){
    //return this.http.post('https://angular7-connection.firebaseio.com/data.json',server)
    return this.httpClient.put('https://angular7-connection.firebaseio.com/data.json',server)
  }

  getServer(){
    return this.httpClient.get('https://angular7-connection.firebaseio.com/data.json').pipe(map(data =>
    {
      return data
    }));
  }

}
