import { createContext, useState } from "react";
import { useContext } from "react";

import api from "../../services/api";

export const ActivityContext = createContext();

export const ActivityProvider = ({ children }) => {
  const token = localStorage.getItem("@Habit:token");

  const AuthObj = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const [activities, setActivities] = useState([]);
  const [message, setMessage] = useState([]); //VERIFICAR O QUE ESTÁ CHEGANDO NESTE STATE E TRATAR

  const loadActivities = (idGroup) => {
    api
      .get(`/activities/?group=${idGroup}`, AuthObj)
      .then((response) => {
        setActivities([...response.data]);
        setMessage(response);
      })
      .catch((err) => setMessage(err));
  };

  const addActivity = (data) => {
    api
      .post("/activities/", AuthObj, data)
      .then((response) => {
        setMessage(response);
      })
      .catch((err) => setMessage(err));
  };

  const updateActivity = (idGoal, dataUpdate) => {
    api
      .patch(`/activities/${idGoal}`, AuthObj, dataUpdate)
      .then((response) => {
        setMessage(response);
      })
      .catch((err) => setMessage(err));
  };

  const deleteActivity = (idGoal) => {
    api
      .delete(`/activities/${idGoal}`, AuthObj)
      .then((response) => {
        setMessage(response);
      })
      .catch((err) => setMessage(err));
  };

  return (
    <ActivityContext.Provider
      value={{
        message,
        activities,
        loadActivities,
        addActivity,
        updateActivity,
        deleteActivity,
      }}
    >
      {children}
    </ActivityContext.Provider>
  );
};

export const useActivities = () => useContext(ActivityContext);
