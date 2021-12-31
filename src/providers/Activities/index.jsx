import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { useContext } from "react";

import api from "../../services/api";

import { useAuth } from "../AuthProvider";

export const ActivityContext = createContext();

export const ActivityProvider = ({ children }) => {
  const { token } = useAuth();

  const AuthObj = {
    headers: { Authorization: `Bearer ${token}` },
  };

  // const [currentGroup, setCurrentGroup] = useState("");
  const [activities, setActivities] = useState([]);
  const [message, setMessage] = useState([]);

  const loadActivities = async (idGroup) => {
    // setCurrentGroup(idGroup);

    let counter = 0;
    let array = [];
    let response = {};
    try {
      do {
        counter++;
        response = await api.get(
          `/activities/?group=${idGroup}&page=${counter}`,
          AuthObj
        );
        const currentPage = response.data.results;
        array = [...array, ...currentPage];
      } while (response.data.next);
      setActivities([...array]);
    } catch (err) {
      setMessage(err);
    }
  };

  const addActivity = (data, idGroup) => {
    const dataActivity = {
      title: data.title,
      realization_time: "2022-01-01T18:00:00Z",
      group: parseInt(idGroup),
    };

    api
      .post("/activities/", dataActivity, AuthObj)
      .then(() => {
        toast.success(
          "Successfully added activity!"
        ); /* toast register activity success */
        loadActivities(idGroup);
      })
      .catch((err) => setMessage(err));
  };

  const updateActivity = (idActivity, dataUpdate, idGroup) => {
    const dataActivity = {
      title: dataUpdate.title,
      realization_time: "2022-01-01T15:00:00Z",
      group: parseInt(idGroup),
    };

    api
      .patch(`/activities/${idActivity}`, dataActivity, AuthObj)
      .then(() => {
        toast.success(
          "Successfully updated activity!"
        ); /* toast update activity success */
        loadActivities(idGroup);
      })
      .catch((err) => setMessage(err));
  };

  const deleteActivity = (idActivity, idGroup) => {
    api
      .delete(`/activities/${idActivity}/`, AuthObj)
      .then(() => {
        toast.success(
          "Successfully removed activity!"
        ); /* toast remove activity success */
        loadActivities(idGroup);
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
