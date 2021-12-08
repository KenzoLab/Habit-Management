import { createContext, useContext, useState } from 'react';
import api from '../../services/api';

const HabitContext = createContext({});

const HabitProvider = ({ children }) => {
  const [listHabits, setListHabits] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const token = localStorage.getItem('@Habit:token');
  const AuthorizationObj = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const listHabitsFunction = () => {
    api
      .get('/habits/personal/', AuthorizationObj)
      .then((response) => setListHabits([...response.data]))
      .catch((error) => console.log(error.message));
  };

  const createHabitFunction = (formData) => {
    api
      .post('/habits/', formData, AuthorizationObj)
      .then(
        (response) =>
          console.log(response.data) /* toast register habit success */,
      )
      .catch((error) => setErrorMessage(error.message));
  };

  const deleteHabitFunction = (id) => {
    api
      .delete(`/habits/${id}/`, AuthorizationObj)
      .then(
        (response) =>
          console.log(response.data) /* toast delete habit success */,
      )
      .catch((error) => setErrorMessage(error.message));
  };

  return (
    <HabitContext.Provider
      value={{
        createHabitFunction,
        listHabitsFunction,
        listHabits,
        deleteHabitFunction,
        errorMessage,
      }}>
      {children}
    </HabitContext.Provider>
  );
};

const useHabit = () => useContext(HabitContext);

export { HabitProvider, useHabit };
