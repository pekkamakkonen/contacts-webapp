import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Contact} from '../contact';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {TokenService} from '../../user/services/token.service';

@Injectable({
  providedIn: 'root'
})
export class ContactHttpService {

  url: string;

  constructor(private httpClient: HttpClient, private tokenService: TokenService) {
    this.url = environment.apiEndpointUrl + '/api/contacts';
  }

  get(): Observable<Contact[]> {
    const headers: HttpHeaders = this.getAuthorizationHeader();
    return this.httpClient.get(this.url, {headers}).pipe(map(response => {
      return response as Contact[];
    }));
  }

  getById(id): Observable<Contact> {
    const headers: HttpHeaders = this.getAuthorizationHeader();
    return this.httpClient.get(this.url + '/' + id, {headers}).pipe(map(response => {
      return response as Contact;
    }));
  }

  put(contact): Observable<Contact> {
    const headers: HttpHeaders = this.getAuthorizationHeader();
    return this.httpClient.put(this.url + '/' + contact.id, contact, {headers}).pipe(map(response => {
      return response as Contact;
    }));
  }

  post(contact): Observable<Contact> {
    const headers: HttpHeaders = this.getAuthorizationHeader();
    return this.httpClient.post(this.url, contact, {headers}).pipe(map(response => {
      return response as Contact;
    }));
  }

  delete(contact): Observable<any> {
    const headers: HttpHeaders = this.getAuthorizationHeader();
    return this.httpClient.delete(this.url + '/' + contact.id, {headers});
  }

  getAuthorizationHeader(): HttpHeaders {
    const accessToken = this.tokenService.getToken();
    const headers: HttpHeaders = new HttpHeaders({'Authorization': 'Bearer ' + accessToken});
    return headers;
  }
}
