import { Injectable } from '@angular/core';
import {Contact} from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts: Contact[];

  constructor() {
    this.contacts = [];
    this.contacts.push(new Contact('Pekka', 'Makkonen'));
    this.contacts.push(new Contact('Antti', 'Karjalainen'));
    this.contacts.push(new Contact('Mitro', 'Onatsu'));
  }

  getContacts(): Contact[] {
    return this.contacts;
}
}
