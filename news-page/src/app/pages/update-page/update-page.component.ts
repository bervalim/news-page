import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../components/template/header/header.component';

@Component({
  selector: 'app-update-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './update-page.component.html',
  styleUrl: './update-page.component.scss',
})
export class UpdatePageComponent {
  constructor(private userService: UserService, private router: Router) {
    if (!this.user) this.router.navigateByUrl('/login');
  }

  get user() {
    return this.userService.getUser();
  }
}
