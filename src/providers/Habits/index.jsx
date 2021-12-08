import { createContext, useContext, useState } from 'react';
import api from '../../services/api';

const HabitContext = createContext({});

const HabitProvider = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const token = localStorage.getItem('@Habit:token');
  const AuthorizationObj = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const createHabit = (formData) => {
    api
      .post('/habits/', formData, AuthorizationObj)
      .then(
        (response) =>
          console.log(response.data) /* toast register habit success */,
      )
      .catch((error) => setErrorMessage(error.message));
  };

  return (
    <HabitContext.Provider value={{ createHabit, errorMessage }}>
      {children}
    </HabitContext.Provider>
  );
};

const useHabit = () => useContext(HabitContext);

export { HabitProvider, useHabit };
