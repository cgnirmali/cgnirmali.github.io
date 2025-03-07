import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false; // Add this property to track form submission

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  submitForm() {
    if (this.contactForm.valid) {
      this.submitted = true; // Set to true when form is submitted
      console.log('Form Data:', this.contactForm.value);
      this.contactForm.reset();
    }
  }
}
