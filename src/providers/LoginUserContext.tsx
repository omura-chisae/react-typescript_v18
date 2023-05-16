import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { User } from "../types/api/User";

type LoginUser = User & { isAdmin: boolean };

export type LoginUserContextType = {
  loginUser: LoginUser | undefined;
  setLoginUser: Dispatch<SetStateAction<LoginUser | undefined>>;
};

export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);

export const LoginUserProvider = (props: { children: React.ReactNode }) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<LoginUser | undefined>(undefined);

  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};
