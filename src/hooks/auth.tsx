import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface AuthContextType {
  signIn: (name: string, password: string) => Promise<void>,
  signUp: (name: string, email: string, password: string) => Promise<void>,
  signOut: () => void,
  user: User;
}

export const AuthContext = createContext({} as AuthContextType);

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'customer' | 'admin';
  created_at: string;
  updated_at: string;
}

interface AuthProviderProps {
  children: ReactNode;
}

interface UserInfo {
  token: string;
  user: User;
}

function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<UserInfo>({} as UserInfo);

  async function signIn(email: string, password: string) {
    try {
      const response = await api.post<UserInfo>("sessions", { email, password });
      const { token, user } = response.data;

      localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
      localStorage.setItem("@foodexplorer:token", token);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({ token, user });
    } catch (error: unknown) {
      if (error instanceof Error && 'response' in error && error.response) {
        alert((error.response as any).data.message);
      } else {
        alert("Não foi possível entrar.");
      }
    }
  }

  async function signUp(name: string, email: string, password: string): Promise<void> {
    try {
      await api.post("/users", { name, email, password });
      alert("Cadastro realizado com sucesso");
    } catch (error: unknown) {
      if (error instanceof Error && 'response' in error && error.response) {
        alert((error.response as any).data.message);
      } else {
        alert("Não foi possível cadastrar.");
      }
      throw error;
    }
  }

  function signOut() {
    localStorage.removeItem("@foodexplorer:token");
    localStorage.removeItem("@foodexplorer:user");

    setData({} as UserInfo);
  }

  useEffect(() => {
    const token = localStorage.getItem("@foodexplorer:token");
    const user = localStorage.getItem("@foodexplorer:user");

    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user),
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signUp,
        signOut,
        user: data.user
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
