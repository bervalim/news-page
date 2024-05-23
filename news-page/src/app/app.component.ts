import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/template/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { UserRequest } from './api/user.request';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatIconModule, FooterComponent],
  providers: [UserRequest, UserService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'news-page';
}
