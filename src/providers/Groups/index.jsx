import { createContext, useContext, useState } from "react";
import api from "../../services/api";

const GroupsContext = createContext({});

const GroupsProvider = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [allGroupsList, setAllGroupsList] = useState([]);

  const token = localStorage.getItem("@Habit:token");
  const AuthorizationObj = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const listGroupsFunction = async () => {
    try {
      const response = await api.get("/groups/", AuthorizationObj);
      setAllGroupsList([...response.data.results]);
    } catch (error) {
      setErrorMessage(error);
    }
  };

  return (
    <GroupsContext.Provider
      value={{ errorMessage, listGroupsFunction, allGroupsList }}>
      {children}
    </GroupsContext.Provider>
  );
};
const useGroups = () => useContext(GroupsContext);

export { GroupsProvider, useGroups };
