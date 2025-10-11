import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'pos-login',
  templateUrl: 'login.component.html',
  imports: [FormsModule, PasswordModule, ButtonModule],
})
export class LoginComponent {
  username = '';
  password = '';

  private _router = inject(Router);

  public onLoginClick(): void {
    this._router.navigate(['/', 'app']);
  }
}
