import { AuthService } from './../../../services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  password: string = '';
  username: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    console.log({ username: this.username, password: this.password });

    this.authService.login(this.username, this.password);
  }
}
