import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/template/header/header.component';
import { RegisterFormComponent } from '../../components/register-form/register-form.component';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [HeaderComponent, RegisterFormComponent, RouterLink],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss',
})
export class RegisterPageComponent {}
