import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/template/header/header.component';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss',
})
export class DashboardPageComponent {
  constructor(private userService: UserService, private router: Router) {
    if (!this.user) this.router.navigateByUrl('/login');
  }

  get user() {
    return this.userService.getUser();
  }

  handleLogout() {
    this.userService.logoutUserService();
  }
}
