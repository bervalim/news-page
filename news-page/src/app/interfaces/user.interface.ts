export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
}

export type TCreateUserRequest = Omit<IUser, 'id'>;

export type TLoginUserRequest = Pick<IUser, 'email' | 'password'>;

export type TCreateUserDataRequest = {
  name: string | null;
  email: string | null;
  password: string | null;
};

export type TLoginUserDataRequest = {
  email: string | null;
  password: string | null;
};

export type TUserResponse = Omit<IUser, 'password'>;

export interface TRegisterUserResponse {
  accessToken: string;
  user: TUserResponse;
}

export interface TLoginUserResponse {
  accessToken: string;
  user: TUserResponse;
}
