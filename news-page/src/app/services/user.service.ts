import { Injectable, signal } from '@angular/core';
import { UserRequest } from '../api/user.request';
import {
  ILoginUserResponse,
  IRegisterUserResponse,
  IUser,
  TCreateUserDataRequest,
  TLoginUserDataRequest,
  TUserResponse,
} from '../interfaces/user.interface';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { publicRoutes } from '../app.routes';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly userSignal = signal<TUserResponse | null>(null);

  readonly lastRouteSignal = signal<string | null>(null);

  constructor(private userRequest: UserRequest, private router: Router) {
    const pathname = window.location.pathname;
    this.userRequest.autoLoginUserRequest()?.subscribe({
      next: (data: IUser) => {
        const { id, name, email } = data;
        const customUser = { id, name, email };
        this.userSignal.set(customUser);
        if (publicRoutes.includes(pathname)) {
          this.router.navigateByUrl('/dashboard');
        } else {
          this.router.navigateByUrl(pathname);
        }
      },
      error: (error) => {
        this.logoutUserService();
      },
    });
  }

  getUser() {
    return this.userSignal();
  }

  setLastRoute(route: string) {
    this.lastRouteSignal.set(route);
  }

  getLastRoute() {
    return this.lastRouteSignal();
  }

  registerUserService(formData: TCreateUserDataRequest) {
    return this.userRequest.registerUsersRequest(formData).subscribe({
      next: (data: IRegisterUserResponse) => {
        console.log(data);
        alert('Cadastro realizado com sucesso!');
        this.router.navigateByUrl('/login');
      },
      error: (error) => {
        if (error instanceof HttpErrorResponse) {
          if (error.error === 'Email already exists') {
            alert('Já existe um usuário cadastrado com este e-mail');
          }
        }
        console.log(error);
      },
    });
  }

  loginUserService(formData: TLoginUserDataRequest) {
    return this.userRequest.loginUserRequest(formData).subscribe({
      next: (data: ILoginUserResponse) => {
        this.userSignal.set(data.user);
        localStorage.setItem(
          '@TokenNewsPage',
          JSON.stringify(data.accessToken)
        );
        localStorage.setItem('@UserIdNewsPage', JSON.stringify(data.user.id));
        alert(`Seja bem-vindo,${data.user.name}`);
        const lastRoute = this.getLastRoute();
        if (lastRoute && !publicRoutes.includes(lastRoute)) {
          this.router.navigateByUrl(lastRoute);
        } else {
          this.router.navigateByUrl('/dashboard');
        }
      },
      error: (error) => {
        if (error instanceof HttpErrorResponse) {
          if (
            error.error === 'Cannot find user' ||
            error.error === 'Incorrect password'
          ) {
            alert('Senha ou E-mail inválidos');
          }
        }
      },
    });
  }

  logoutUserService() {
    this.userSignal.set(null);
    this.setLastRoute(this.router.url);
    localStorage.removeItem('@TokenNewsPage');
    localStorage.removeItem('@UserIdNewsPage');
    this.router.navigateByUrl('/login');
  }
}
