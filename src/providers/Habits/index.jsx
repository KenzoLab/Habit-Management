import { createContext, useContext, useState } from "react";
import api from "../../services/api";

const HabitContext = createContext({});

const HabitProvider = ({ children }) => {
  const [listHabits, setListHabits] = useState([]);
  const [lastHabitCreated, setLastHabitCreated] = useState({});
  const [updatedHabit, setUpdatedHabit] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const token = localStorage.getItem("@Habit:token");
  const AuthorizationObj = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const listHabitsFunction = async (token) => {
    const AuthorizationObj = {
      headers: { Authorization: `Bearer ${token}` },
    };
    try {
      const response = await api.get("/habits/personal/", AuthorizationObj);
      console.log("provider habit", response.data);
      setListHabits([...response.data]);
    } catch (error) {
      console.log(error.message);
    }

    // api
    //   .get("/habits/personal/", AuthorizationObj)
    //   .then((response) => {
    //     setListHabits([...response.data]);
    //   })
    //   .catch((error) => console.log(error.message));
  };

  const createHabitFunction = (formData) => {
    api
      .post("/habits/", formData, AuthorizationObj)
      .then(
        (response) =>
          setLastHabitCreated(response.data) /* toast register habit success */,
      )
      .catch((error) => setErrorMessage(error.message));
  };

  const deleteHabitFunction = (habitId) => {
    api
      .delete(`/habits/${habitId}/`, AuthorizationObj)
      .then(
        (response) =>
          console.log(response.data) /* toast delete habit success */,
      )
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
