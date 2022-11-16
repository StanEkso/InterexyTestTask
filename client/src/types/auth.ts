export interface AuthUtilities {
  user: User | null;
  login: (dto: UserLoginDto) => Promise<void>;
}

export interface User {
  email: string;
  bio: string;
  accessToken: string;
}
export interface UserLoginDto {
  email: string;
  password: string;
}
