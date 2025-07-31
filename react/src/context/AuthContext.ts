import type { Session, User } from "better-auth";
import { createContext, use } from "react";

interface ProtectedContextProps {
  session: {
    user: User;
    session: Session;
  } | null;
  refreshSession: () => void;
}

export const AuthContext = createContext<ProtectedContextProps | undefined>(
  undefined
);

export function useAuth() {
  const context = use(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
}
