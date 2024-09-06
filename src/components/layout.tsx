import { ReactNode } from "react";
import LockScreen from "./auth/lock-screen";

interface IProps {
    children: ReactNode
}

export default function MainLayout({ children }: IProps) {
    let isAuthenticated = false;
  return (
    <div>
        {!isAuthenticated && (<LockScreen/>)}

      {children}
    </div>
  );
}
