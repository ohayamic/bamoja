import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit {
  password_matcher = new MyErrorStateMatcher();

  passwordForm = new FormGroup({
    oldpassword: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z@1-9#]*')]),
    newpassword: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z@1-9#]*')])
  })

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.passwordForm.value)
  }

}
