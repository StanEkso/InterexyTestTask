export interface AuthUtilities {
  user: User | null;
  signin: (dto: UserLoginDto) => Promise<void>;
  signup: (dto: UserCreationDto) => Promise<void>;
  logout: () => Promise<void>;
}

export interface User {
  id: string;
  email: string;
  bio: string;
  accessToken: string;
}
export interface UserLoginDto {
  email: string;
  password: string;
}
export interface UserCreationDto {
  email: string;
  password: string;
  bio: string;
}
