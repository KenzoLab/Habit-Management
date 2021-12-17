import { createContext, useState } from "react";
import { useContext } from "react";
import { toast } from "react-toastify";

import api from "../../services/api";

import { useAuth } from "../AuthProvider";

export const GoalsContext = createContext();

export const GoalsProvider = ({ children }) => {
  const { token } = useAuth();

  const AuthObj = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const [currentGroup, setCurrentGroup] = useState("");
  const [goals, setGoals] = useState([]);
  const [message, setMessage] = useState([]);

  const loadGoals = async (idGroup) => {
    setCurrentGroup(idGroup);

    let counter = 0;
    let array = [];
    let response = {};
    try {
      do {
        counter++;
        response = await api.get(
          `/goals/?group=${idGroup}&page=${counter}`,
          AuthObj
        );
        const currentPage = response.data.results;
        array = [...array, ...currentPage];
      } while (response.data.next);
      setGoals([...array]);
    } catch (err) {
      setMessage(err);
    }
  };

  const addGoal = (data) => {
    const dataGoal = {
      title: data.title,
      difficulty: data.difficulty.value,
      how_much_achieved: 100,
      achieved: false,
      group: parseInt(currentGroup),
    };

    api
      .post("/goals/", dataGoal, AuthObj)
      .then(() => {
        toast.success(
          "Successfully added goal!"
        ); /* toast register goal success */
        loadGoals(currentGroup);
      })
      .catch((err) => setMessage(err));
  };

  const updateGoal = (idGoal, dataUpdate) => {
    const dataGoal = {
      title: dataUpdate.title,
      difficulty: dataUpdate.difficulty.value,
      how_much_achieved: 100,
      achieved: false,
      group: parseInt(currentGroup),
    };

    api
      .patch(`/goals/${idGoal}`, AuthObj, dataGoal)
      .then((response) => {
        toast.success(
          "Successfully updated goal!"
        ); /* toast update goal success */
        setMessage(response);
        loadGoals(currentGroup);
      })
      .catch((err) => setMessage(err));
  };

  const deleteGoal = (idGoal) => {
    api
      .delete(`/goals/${idGoal}/`, AuthObj)
      .then(() => {
        toast.success(
          "Successfully removed goal!"
        ); /* toast remove goal success */
        loadGoals(currentGroup);
      })
      .catch((err) => setMessage(err));
  };

  return (
    <GoalsContext.Provider
      value={{
        message,
        goals,
        loadGoals,
        addGoal,
        updateGoal,
        deleteGoal,
      }}
    >
      {children}
    </GoalsContext.Provider>
  );
};

export const useGoals = () => useContext(GoalsContext);
