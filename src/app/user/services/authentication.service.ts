import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {UserCredentials} from '../user-credentials';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {TokenService} from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  url: string;

  constructor(private http: HttpClient, private tokenService: TokenService) {
    this.url = environment.apiEndpointUrl + '/api/authentication';
  }

  signInUser(userCredentials: UserCredentials): Observable<any> {
    return this.http.post(this.url, userCredentials).pipe(map(result => {
      this.tokenService.setToken(result);
      return of(true);
    }));
  }

  signOutUser(): void {
    this.tokenService.clearToken();
  }

}
