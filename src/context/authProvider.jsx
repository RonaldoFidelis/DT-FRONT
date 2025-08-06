import axios from 'axios';
import { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const apiUrl = "http://localhost:8080/auth";
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  const login = async(email, password) => {

    try {
      const response = await axios.post(apiUrl + "/login", {
        email,
        password
      });

      const tokenReceive = response.data.token;
      setToken(tokenReceive);
      localStorage.setItem('token', tokenReceive);

    } catch (error) {
       console.log(error);
    }

  }

  return (
    <AuthContext.Provider value={{ user, token, login }}>
      {children}
    </AuthContext.Provider>
  )
}
