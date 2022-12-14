import { Contact } from './../contacts.service';
import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];
  constructor(private contactListService: ContactsService) {}

  ngOnInit(): void {
    this.contactListService.listContacts().subscribe((contacts) => {
      this.contacts = contacts;
    });
  }

  deleteContact(contact: Contact) {
    this.contactListService.deleteContact(contact.id).subscribe(() => {
      const index = this.contacts.indexOf(contact);
      this.contacts.splice(index, 1);
    });
  }
}
