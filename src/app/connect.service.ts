import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  url: string = environment.url;

  constructor(
    private http: HttpClient
  ) { }

  getModules(): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set("Access-Control-Allow-Origin", "*");

    return this.http.get<any>(`${this.url}/getData`, {headers: headers});
  }
}
