import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/template/header/header.component';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss',
})
export class DashboardPageComponent {}
