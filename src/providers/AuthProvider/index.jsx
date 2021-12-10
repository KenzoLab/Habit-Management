import { useContext, createContext, useState } from 'react';
import api from '../../services/api';
import jwt_decode from 'jwt-decode';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState('');

  const [userIdLocal, setUserIdLocal] = useState(() => {
    const userId = localStorage.getItem('@Habit:user_id');
    return userId ? { userId } : {};
  });

  const [tokenLocal, setTokenLocal] = useState(() => {
    const token = localStorage.getItem('@Habit:token');
    return token ? { token } : {};
  });

  const signInFunction = (formData) => {
    api
      .post('/sessions/', formData)
      .then((response) => {
        const { access: token } = response.data;
        const tokenDecodificado = jwt_decode(token);
        const { user_id } = tokenDecodificado;

        localStorage.setItem('@Habit:token', token);
        localStorage.setItem('@Habit:userId', tokenDecodificado.user_id);

        setTokenLocal(token);
        setUserIdLocal(user_id);
      })
      .catch((error) => setErrorMessage(error.message));
  };

  return (
    <AuthContext.Provider
      value={{
        token: tokenLocal,
        userId: userIdLocal,
        signInFunction,
        errorMessage: errorMessage,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
