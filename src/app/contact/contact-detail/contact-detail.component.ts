import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactService} from '../services/contact.service';
import {Contact} from '../contact';

@Component({
  selector: 'cw-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contact: Contact;

  constructor(private router: Router, private route: ActivatedRoute, private contactService: ContactService) { }

  ngOnInit() {
    const contactId = this.route.snapshot.paramMap.get('id');
    console.log(contactId);
    this.contactService.getContactByID(contactId).subscribe(response => {
      this.contact = response;
      console.log(this.contact);
    }, error => {
      console.error('Getting contact failed!');
      console.error(error);
      this.router.navigate(['/contacts']);
    });
  }

  onNavigateBack(): void {
    this.router.navigate(['/contacts']);
  }

}
