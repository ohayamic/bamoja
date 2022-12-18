import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  matcher = new MyErrorStateMatcher();

  constructor() { }
  ngOnInit(): void {
  }

   signUpForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('' , [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z@1-9]*')]),
    password: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z@1-9#]*')]),
    address: new FormControl('', [Validators.required, Validators.minLength(2), Validators.max(100)]),
    city: new FormControl('', [Validators.required, Validators.minLength(5)]),
    state: new FormControl('', [Validators.required])
  });

    onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.signUpForm.value)
  }
}
