import { createContext, useContext } from "react";
import { AuthUtilities } from "../../types/auth";

export const AuthContext = createContext<AuthUtilities>({
  user: null,
  login(dto) {
    return Promise.resolve();
  },
});

export const useAuthContext = () => useContext(AuthContext);
