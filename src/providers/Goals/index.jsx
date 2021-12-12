import { createContext, useState } from "react";
import { useContext } from "react";

import api from "../../services/api";

export const GoalsContext = createContext();

export const GoalsProvider = ({ children }) => {
  const token = localStorage.getItem("@Habit:token");

  const AuthObj = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const [goals, setGoals] = useState([]);
  const [message, setMessage] = useState([]); //VERIFICAR O QUE ESTÁ CHEGANDO NESTE STATE E TRATAR

  const loadGoals = (idGroup) => {
    api
      .get(`/goals/?group=${idGroup}`, AuthObj)
      .then((response) => {
        setGoals([...response.data]);
        setMessage(response);
      })
      .catch((err) => setMessage(err));
  };

  const addGoal = (data) => {
    api
      .post("/goals/", AuthObj, data)
      .then((response) => {
        setMessage(response);
      })
      .catch((err) => setMessage(err));
  };

  const updateGoal = (idGoal, dataUpdate) => {
    api
      .patch(`/goals/${idGoal}`, AuthObj, dataUpdate)
      .then((response) => {
        setMessage(response);
      })
      .catch((err) => setMessage(err));
  };

  const deleteGoal = (idGoal) => {
    api
      .delete(`/goals/${idGoal}`, AuthObj)
      .then((response) => {
        setMessage(response);
      })
      .catch((err) => setMessage(err));
  };

  return (
    <GoalsContext.Provider
      value={{ message, goals, loadGoals, addGoal, updateGoal, deleteGoal }}
    >
      {children}
    </GoalsContext.Provider>
  );
};

export const useGoals = () => useContext(GoalsContext);
