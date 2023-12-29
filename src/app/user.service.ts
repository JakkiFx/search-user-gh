import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserData } from './UserData';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlAPI = environment.urlApi;

  constructor(private http: HttpClient) {}

  searchId(loginID: any): Observable<UserData> {
    const url = `${this.urlAPI}/${loginID}`;
    return this.http.get<UserData>(url);
  }
}
