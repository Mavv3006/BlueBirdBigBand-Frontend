import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  hasLoginError = false;
  form: FormGroup = this.formBuilder.group({});

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      password: ['', Validators.required],
      username: ['', Validators.required],
    });
  }

  login() {
    this.hasLoginError = !this.hasLoginError;
    console.info(this.form.value);
    console.info('valid', this.form.valid);
  }
}
