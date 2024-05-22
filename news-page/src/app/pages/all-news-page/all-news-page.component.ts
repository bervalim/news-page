import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/template/header/header.component';

@Component({
  selector: 'app-all-news-page',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './all-news-page.component.html',
  styleUrl: './all-news-page.component.scss',
})
export class AllNewsPageComponent {}
