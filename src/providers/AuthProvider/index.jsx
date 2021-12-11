import { useContext, createContext, useState } from "react";
import api from "../../services/api";
import jwt_decode from "jwt-decode";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isAuth, setIsAuth] = useState(() => {
    const token = localStorage.getItem("@Habit:token");
    return token ? true : false;
  });

  const [userId, setUserId] = useState(() => {
    const id = localStorage.getItem("@Habit:userId");
    console.log(id);
    return id ? id : null;
  });

  const [token, setToken] = useState(() => {
    const token = localStorage.getItem("@Habit:token");
    return token ? token : "";
  });

  const signInFunction = (formData) => {
    api
      .post("/sessions/", formData)
      .then((response) => {
        const { access: token } = response.data;
        const tokenDecodificado = jwt_decode(token);
        const { user_id } = tokenDecodificado;

        localStorage.setItem("@Habit:token", token);
        localStorage.setItem("@Habit:userId", user_id);

        setToken(token);
        setUserId(user_id);
        setIsAuth(true);
      })
      .catch((error) => setErrorMessage(error.message));
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        userId,
        signInFunction,
        isAuth,
        setIsAuth,
        errorMessage,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
