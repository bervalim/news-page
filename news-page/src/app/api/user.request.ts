import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ILoginUserResponse,
  IRegisterUserResponse,
  IUser,
  TCreateUserDataRequest,
  TLoginUserDataRequest,
} from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserRequest {
  private BASE_URL = 'http://localhost:3001';

  constructor(private http: HttpClient) {}

  registerUsersRequest(formData: TCreateUserDataRequest) {
    return this.http.post<IRegisterUserResponse>(
      `${this.BASE_URL}/users`,
      formData
    );
  }

  loginUserRequest(formData: TLoginUserDataRequest) {
    return this.http.post<ILoginUserResponse>(
      `${this.BASE_URL}/login`,
      formData
    );
  }

  autoLoginUserRequest() {
    const getToken = localStorage.getItem('@TokenNewsPage');
    const getUserId = localStorage.getItem('@UserIdNewsPage');
    if (getToken && getUserId) {
      const parsedToken = JSON.parse(getToken);
      const parsedUser = JSON.parse(getUserId);
      return this.http.get<IUser>(`${this.BASE_URL}/users/${parsedUser}`, {
        headers: { Authorization: `Bearer ${parsedToken}` },
      });
    } else {
      return null;
    }
  }
}
