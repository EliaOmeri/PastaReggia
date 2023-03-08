import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'subject': ['', Validators.required],
      'message': ['', Validators.required],
    });
  }
  ngOnInit() {

  }

  contactForm = new FormGroup({
    name: new FormControl(''),
    subject: new FormControl(''),
    message: new FormControl(''),
  })
  emailAddress = "eliaomeri5@gmail.com";

  get subject() {
    return this.contactForm.get('subject')?.value;
  }

  get message() {
    return this.contactForm.get('message')?.value;
  }

  get emailLink() {
    return `mailto:${this.emailAddress}?subject=${this.subject}&body=${this.message}`;
  }

}