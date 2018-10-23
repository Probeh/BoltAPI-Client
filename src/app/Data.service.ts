import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Profile } from './Models/Profile';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class DataService {
  // Properties

  // Default Constructor
  constructor(private httpClient: HttpClient) { }

  public createProfile(profile: Profile): Observable<any> {
    return this.httpClient.post('http://localhost:5000/api/Profiles', profile);
  }

}
