import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css'],
})
export class ContactCreateComponent {
  contatcForm = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
  });

  constructor(
    private contacsService: ContactsService,
    private router: Router
  ) {}

  createContact(): void {
    this.contacsService
      .createContact(this.contatcForm.value)
      .subscribe(() => {
        this.router.navigate(['/contacts']);
      });
  }
}
