import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Contact} from '../contact';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactHttpService {

  url: string;

  constructor(private httpClient: HttpClient) {
    this.url = environment.apiEndpointUrl;
  }

  get(): Observable<Contact[]> {
    return this.httpClient.get(this.url).pipe(map(response => {
      return response as Contact[];
    }));
  }

  getById(id): Observable<Contact> {
    return this.httpClient.get(this.url + '/' + id).pipe(map(response => {
      return response as Contact;
    }));
  }
}


