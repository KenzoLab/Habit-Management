import { createContext, useState } from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import api from "../../services/api";

export const SignUpContext = createContext();

export const SignUpProvider = ({ children }) => {
  const history = useHistory();

  const token = localStorage.getItem("@Habit:token");

  const AuthObj = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const [message, setMessage] = useState([]);

  const postSignUp = (data) => {
    api
      .post("/users/", data)
      .then(() => {
        toast.success("Registration successfully completed!");
        history.push("/");
      })
      .catch((err) => {
        toast.error("Error registering! Check the data informed.");
        setMessage(err);
      });
  };

  const patchUpdateUser = (idUser, dataUpdate) => {
    api
      .patch(`/users/${idUser}`, AuthObj, dataUpdate)
      .then((response) => {
        setMessage(response);
      })
      .catch((err) => setMessage(err));
  };

  return (
    <SignUpContext.Provider value={{ postSignUp, message, patchUpdateUser }}>
      {children}
    </SignUpContext.Provider>
  );
};

export const useSignUp = () => useContext(SignUpContext);
