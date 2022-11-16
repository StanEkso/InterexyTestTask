import { useMemo, useState } from "react";
import { createUser, loginUser } from "../api/auth";
import { AuthUtilities, User } from "../types/auth";

const useAuth = () => {
  const [user, setUser] = useState<User | null>(() => {
    const userString = localStorage.getItem("user");
    return userString ? JSON.parse(userString) : null;
  });

  const value = useMemo<AuthUtilities>(
    () => ({
      user,
      signin: (dto) => {
        return loginUser(dto)
          .then((user) => {
            setUser(user);
            localStorage.setItem("user", JSON.stringify(user));
          })
          .catch(() => {
            setUser(null);
            localStorage.removeItem("user");
          });
      },
      signup: (dto) => {
        return createUser(dto)
          .then((user) => {
            setUser(user);
            localStorage.setItem("user", JSON.stringify(user));
          })
          .catch(() => {
            setUser(null);
            localStorage.removeItem("user");
          });
      },
    }),
    [user]
  );
  return value;
};

export default useAuth;
