import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/template/header/header.component';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, HeroSectionComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
