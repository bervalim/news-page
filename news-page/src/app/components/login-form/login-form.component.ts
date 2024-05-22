import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    MatIconModule,
    MatCommonModule,
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {
  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  loginForm = new FormGroup({
    email: new FormControl<string | null>(null, [Validators.required]),
    password: new FormControl<string | null>(null, [Validators.required]),
  });

  readonly isPasswordHiddenSignal = signal<boolean>(true);

  get isPasswordHidden() {
    return this.isPasswordHiddenSignal();
  }

  togglePasswordVisibility(field: 'password') {
    if (field === 'password') {
      this.isPasswordHiddenSignal.set(!this.isPasswordHiddenSignal());
    }
    this.changeDetectorRef.markForCheck();
  }

  get errors() {
    return {
      email: this.loginForm.get('email')?.errors,
      password: this.loginForm.get('password')?.errors,
    };
  }

  submitLoginForm() {
    if (this.loginForm.status === 'VALID') {
      console.log(this.loginForm.value);
    }
  }
}
