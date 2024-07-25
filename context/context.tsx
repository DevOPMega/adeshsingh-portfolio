"use client";
import { createContext, useState } from "react";
import type { Dispatch, SetStateAction } from "react";

type UserType = {
  email: string | undefined;
  name: string | undefined;
  phoneNo: string | undefined;
};

const userInitial: UserType = {
  email: undefined,
  name: undefined,
  phoneNo: undefined,
};

export const User = createContext<{
  user: UserType;
  setUser: Dispatch<SetStateAction<UserType>>;
}>({ user: userInitial, setUser: () => {} });

function UserContext({ children }: { children: any }) {
  const [user, setUser] = useState(userInitial);

  return <User.Provider value={{ user, setUser }}>{children}</User.Provider>;
}

export default UserContext;
