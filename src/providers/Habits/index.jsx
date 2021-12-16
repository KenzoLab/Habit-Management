import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

import api from "../../services/api";

import { useAuth } from "../AuthProvider";

const HabitContext = createContext({});

const HabitProvider = ({ children }) => {
  const [listHabits, setListHabits] = useState([]);
  const [lastHabitCreated, setLastHabitCreated] = useState({});
  const [updatedHabit, setUpdatedHabit] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const { token, userId } = useAuth();

  const AuthorizationObj = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const listHabitsFunction = () => {
    api
      .get("/habits/personal/", AuthorizationObj)
      .then((response) => {
        setListHabits([...response.data]);
      })
      .catch((error) => console.log(error.message));
  };

  const createHabitFunction = (formData) => {
    const dataHabit = {
      title: formData.title,
      category: formData.category.value,
      difficulty: formData.difficulty.value,
      frequency: formData.frequency.value,
      achieved: false,
      how_much_achieved: 30,
      user: userId,
    };

    api
      .post("/habits/", dataHabit, AuthorizationObj)
      .then(() => {
        toast.success(
          "Successfully added habit!",
        ); /* toast register habit success */
        listHabitsFunction();
        setLastHabitCreated(dataHabit);
      })
      .catch((error) => setErrorMessage(error.message));
  };

  const deleteHabitFunction = (habitId) => {
    api
      .delete(`/habits/${habitId}/`, AuthorizationObj)
      .then(() => {
        toast.success("Deleted habit!");
        /* toast delete habit success */
        listHabitsFunction();
      })
      .catch((error) => setErrorMessage(error.message));
  };

  const updateHabitFunction = (obj, habitId) => {
    api
      .patch(`/habits/${habitId}/`, obj, AuthorizationObj)
      .then(
        (response) =>
          setUpdatedHabit(response.data) /* toast update habit success */,
      )
      .catch((error) => setErrorMessage(error.message));
  };

  return (
    <HabitContext.Provider
      value={{
        createHabitFunction,
        lastHabitCreated,
        listHabitsFunction,
        listHabits,
        deleteHabitFunction,
        updateHabitFunction,
        updatedHabit,
        errorMessage,
      }}>
      {children}
    </HabitContext.Provider>
  );
};

const useHabit = () => useContext(HabitContext);

export { HabitProvider, useHabit };
