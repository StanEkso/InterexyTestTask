import { useMemo, useState } from "react";
import { AuthUtilities, User } from "../types/auth";

const useAuth = () => {
  const [user, setUser] = useState<User | null>(() => {
    const userString = localStorage.getItem("user");
    return userString ? JSON.parse(userString) : null;
  });

  const value = useMemo<AuthUtilities>(
    () => ({
      user,
      login: (dto) => {
        setUser(null);
        return Promise.resolve();
      },
    }),
    [user]
  );
  return value;
};

export default useAuth;
