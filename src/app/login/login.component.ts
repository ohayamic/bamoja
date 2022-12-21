import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

    loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z@1-9#]*')]),
    password: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z@1-9#]*')]),
    });

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.loginForm.value)
  }
}
