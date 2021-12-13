import { useContext, createContext, useState } from "react";
import api from "../../services/api";
import jwt_decode from "jwt-decode";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    const token = localStorage.getItem("@Habit:token");
    return token ? true : false;
  });

  const [userId, setUserId] = useState(() => {
    const id = JSON.parse(localStorage.getItem("@Habit:userId"));
    return id ? id : null;
  });

  const [token, setToken] = useState(() => {
    const token = localStorage.getItem("@Habit:token");
    return token ? token : "";
  });

  const signInFunction = (formData, toastError) => {
    api
      .post("/sessions/", formData)
      .then((response) => {
        const { access: token } = response.data;
        const tokenDecodificado = jwt_decode(token);
        const { user_id } = tokenDecodificado;

        localStorage.setItem("@Habit:token", token);
        localStorage.setItem(
          "@Habit:userId",
          JSON.stringify({ userId: user_id }),
        );

        setToken(token);
        setUserId(user_id);
        setIsAuth(true);
      })
      .catch((error) => toastError("Invalid email or password"));
  };
  return (
    <AuthContext.Provider
      value={{
        token,
        userId,
        signInFunction,
        isAuth,
        setIsAuth,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
