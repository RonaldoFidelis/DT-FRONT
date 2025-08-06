import axios from 'axios';
import { createContext, useState } from 'react';

export const AuthContext = createContext();

const BASE_URL = import.meta.env.VITE_API_URL;

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  const login = async(email, password) => {

    try {
      const response = await axios.post(BASE_URL + "login", {
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
