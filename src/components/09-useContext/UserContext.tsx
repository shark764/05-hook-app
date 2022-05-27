import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useMemo,
  useState,
} from 'react';
import type { UserData } from './types';

export interface ContextProps {
  authUser: UserData | null;
  setAuthUser: Dispatch<SetStateAction<UserData | null>>;
}
interface Props {
  children: ReactNode;
}

export const UserContext = createContext<ContextProps | null>(null);

const UserContextProvider = ({ children }: Props) => {
  const [authUser, setAuthUser] = useState<UserData | null>(null);
  const value = useMemo(() => ({ authUser, setAuthUser }), [authUser]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
