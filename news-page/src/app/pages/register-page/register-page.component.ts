import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/template/header/header.component';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss',
})
export class RegisterPageComponent {}
