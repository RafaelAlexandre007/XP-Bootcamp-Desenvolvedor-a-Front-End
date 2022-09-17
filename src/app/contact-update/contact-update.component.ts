import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-update',
  templateUrl: './contact-update.component.html',
  styleUrls: ['./contact-update.component.css'],
})
export class ContactUpdateComponent implements OnInit {
  contatcForm = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
  });

  id: any = 0;

  constructor(
    private contactsService: ContactsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      this.id = paramMap.get('id');

      this.contactsService.retrieveContact(this.id).subscribe((contact) => {
        this.contatcForm.reset(contact);
      });
    });
  }

  updateContact() {
    this.contactsService
      .updateContact({ id: this.id, ...this.contatcForm.value })
      .subscribe((contact) => {
        this.contatcForm.reset(contact);
      });
  }
}
