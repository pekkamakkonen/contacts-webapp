import { Injectable } from '@angular/core';
import {Contact} from '../contact';
import {Observable} from 'rxjs';
import {ContactHttpService} from './contact-http.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private contactHttpService: ContactHttpService) {
  }

  getContacts(): Observable<Contact[]> {
    return this.contactHttpService.get();
  }

  getContactById(id): Observable<Contact> {
    return this.contactHttpService.getById(id);
  }

  updateContact(contact): Observable<Contact> {
    return this.contactHttpService.put(contact);
  }

  createContact(contact): Observable<Contact> {
    return this.contactHttpService.post(contact);
  }

  deleteContact(contact): Observable<any> {
    return this.contactHttpService.delete(contact);
  }
}
