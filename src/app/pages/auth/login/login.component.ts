import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  hasLoginError = false;
  form = this.formBuilder.group({
    password: [''],
    username: [''],
  });

  constructor(private formBuilder: FormBuilder) {}

  login() {
    this.hasLoginError = !this.hasLoginError;
    console.info(this.form.value);
  }
}
