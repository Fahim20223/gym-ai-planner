import type { User } from "@neondatabase/neon-js/auth/types";
import { createContext, useState, type ReactNode } from "react";

interface AuthUIContextType {
  user: User | null;
}

const AuthContext = createContext<AuthUIContextType | null>(null);

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [neoUser, setNeonUser] = useState<any>(null);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}
