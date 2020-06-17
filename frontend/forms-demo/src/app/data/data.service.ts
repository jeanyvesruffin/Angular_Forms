import { Injectable } from '@angular/core';
import { DefaultUserSettings } from './default-user-settings';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http : HttpClient) { }
  postUserSettingsForm(userSettings: DefaultUserSettings) : Observable<any>{
    return this.http.post('https://putsreq.com/ppObaykjvmFQvZRhwAma', userSettings);
    // return of(userSettings);
  }
}
