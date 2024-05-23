import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, signal } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatCommonModule } from '@angular/material/core';
import { UserService } from '../../services/user.service';
import { TCreateUserDataRequest } from '../../interfaces/user.interface';

export const confirmPasswordValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  return control.value.password === control.value.confirmPassword
    ? null
    : { PasswordNoMatch: true };
};

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatIconModule, MatCommonModule],
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent {
  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private userService: UserService
  ) {}

  readonly isPasswordHiddenSignal = signal<boolean>(true);
  readonly isConfirmPasswordHiddenSignal = signal<boolean>(true);

  get isPasswordHidden() {
    return this.isPasswordHiddenSignal();
  }

  get isConfirmPasswordHidden() {
    return this.isConfirmPasswordHiddenSignal();
  }

  togglePasswordVisibility(field: 'password' | 'confirmPassword') {
    if (field === 'password') {
      this.isPasswordHiddenSignal.set(!this.isPasswordHiddenSignal());
    } else {
      this.isConfirmPasswordHiddenSignal.set(
        !this.isConfirmPasswordHiddenSignal()
      );
    }
    this.changeDetectorRef.markForCheck();
  }

  registerForm = new FormGroup(
    {
      name: new FormControl(null, [
        Validators.required,
        Validators.maxLength(80),
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.maxLength(45),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/),
      ]),
      confirmPassword: new FormControl(null, [Validators.required]),
    },
    { validators: [confirmPasswordValidator] }
  );

  get errors() {
    return {
      name: this.registerForm.get('name')?.errors,
      email: this.registerForm.get('email')?.errors,
      password: this.registerForm.get('password')?.errors,
      confirmPassword: this.registerForm.get('confirmPassword')?.errors,
    };
  }

  submitRegisterForm() {
    if (this.registerForm.status === 'VALID') {
      const data = this.registerForm.value as TCreateUserDataRequest;
      this.userService.registerUserService(data);
      this.registerForm.reset();
    }
  }
}
