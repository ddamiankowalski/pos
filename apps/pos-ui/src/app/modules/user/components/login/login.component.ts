import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'pos-login',
  templateUrl: 'login.component.html',
  imports: [
    FormsModule,
    PasswordModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
  ],
})
export class LoginComponent {
  username = '';
  password = '';

  private _router = inject(Router);

  public onLoginClick(): void {
    this._router.navigate(['/', 'app']);
  }
}
