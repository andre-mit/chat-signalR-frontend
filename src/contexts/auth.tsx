import React, { createContext, useState, useEffect } from "react";

import api from "../services/api";

interface AuthContextData {
  signed: boolean;
  user: object | null;
  logIn(_email: string, passwod: string): Promise<void>;
  logOut(): void;
}

interface User {
  id: string;
  email: string;
  name: string;
}

interface ResponseUser {
  token: string;
  user: User;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);

  useEffect(() => {
    function checkUser() {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
    checkUser();
  }, []);

  async function logIn(_email: string, password: string) {
    try {
      const response = await api.post<ResponseUser>("users/login", {
        email: _email,
        password,
      });

      setUser(response.data.user);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
    } catch (error) {
      alert("Houve um erro ao fazer login");
    }
  }

  async function logOut() {
    localStorage.clear();
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
