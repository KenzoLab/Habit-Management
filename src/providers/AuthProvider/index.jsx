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
    const id = localStorage.getItem("@Habit:userId");
    return id ? id : null;
  });

  const [token, setToken] = useState(() => {
    const token = localStorage.getItem("@Habit:token");
    return token ? token : "";
  });

  const [userInfo, setUserInfo] = useState({});
  const [message, setMessage] = useState([]);

  const signInFunction = (formData, toastError) => {
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
      .catch((error) => {
        toastError("Invalid email or password");
        setMessage(error.message);
      });
  };

  const getUserInfo = (userId) => {
    api
      .get(`/users/${userId}/`)
      .then((response) => {
        setUserInfo({ ...response.data });
      })
      .catch((error) => setMessage(error.message));
  };

  const logoutFunction = () => {
    localStorage.removeItem("@Habit:userId");
    localStorage.removeItem("@Habit:token");
    setToken("");
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        userId,
        signInFunction,
        isAuth,
        setIsAuth,
        getUserInfo,
        userInfo,
        logoutFunction,
        message,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
