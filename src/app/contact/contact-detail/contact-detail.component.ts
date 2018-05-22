import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactService} from '../services/contact.service';
import {Contact} from '../contact';
import {ToolbarService} from '../../ui/tool-bar/toolbar.service';
import {ToolbarOptions} from '../../ui/tool-bar/toolbar-options';
import {ToolbarAction} from '../../ui/tool-bar/toolbar-action';

@Component({
  selector: 'cw-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contact: Contact;
  editingEnabled: boolean;

  constructor(private router: Router, private route: ActivatedRoute,
              private contactService: ContactService, private toolbar: ToolbarService) {
    this.contact = new Contact();
    this.editingEnabled = false;
  }

  ngOnInit() {

    const contactId = this.route.snapshot.paramMap.get('id');
    let toolbarActions: ToolbarAction[];

    if (contactId == null) {
      // Create contact
      this.editingEnabled = true;
      toolbarActions = [];
    } else {
      // View/Edit contact
      toolbarActions = [new ToolbarAction(this.onEdit.bind(this), 'edit')];

      this.contactService.getContactByID(contactId).subscribe(response => {
        this.contact = response;
        console.log(this.contact);
      }, error => {
        console.error('Getting contact failed!');
        console.error(error);
        this.router.navigate(['/contacts']);
      });
    }

    this.toolbar.toolbarOptions.next(
      new ToolbarOptions(
        'Contact', toolbarActions));
  }

  onNavigateBack(): void {
    this.router.navigate(['/contacts']);
  }

  onSave(): void {
    console.log('TODO: Save');
  }

  onEdit() {
    this.editingEnabled = !this.editingEnabled;
  }

}
