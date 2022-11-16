import { createContext, useContext } from "react";
import { AuthUtilities } from "../../types/auth";

export const AuthContext = createContext<AuthUtilities>({
  user: null,
  signin(dto) {
    return Promise.resolve();
  },
  signup(dto) {
    return Promise.resolve();
  },
  logout() {
    return Promise.resolve();
  },
});

export const useAuthContext = () => useContext(AuthContext);
