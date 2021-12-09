import { createContext, useContext, useState } from "react";
import api from "../../services/api";

const GroupsContext = createContext({});

const GroupsProvider = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [lastCreatedGroup, setLastCreatedGroup] = useState({});
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

  const createGroupFunction = async (formData) => {
    console.log(formData);
    try {
      const response = await api.post("/groups/", formData, AuthorizationObj);
      setLastCreatedGroup(response.data);
    } catch (error) {
      setErrorMessage(error);
    }
    // api
    //   .post("/groups/", formData, AuthorizationObj)
    //   .then((response) => console.log(response.data))
    //   .catch((error) => console.log(error));
  };

  return (
    <GroupsContext.Provider
      value={{
        errorMessage,
        listGroupsFunction,
        allGroupsList,
        createGroupFunction,
        lastCreatedGroup,
      }}>
      {children}
    </GroupsContext.Provider>
  );
};
const useGroups = () => useContext(GroupsContext);

export { GroupsProvider, useGroups };
