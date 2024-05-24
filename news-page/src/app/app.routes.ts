import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { AllNewsPageComponent } from './pages/all-news-page/all-news-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { UpdatePageComponent } from './pages/update-page/update-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  {
    path: 'register',
    component: RegisterPageComponent,
  },
  { path: 'allnews', component: AllNewsPageComponent },
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'updatepage', component: UpdatePageComponent },
  { path: 'postpage/:id', component: PostPageComponent },
];

export const publicRoutes = ['/login', '/register'];
