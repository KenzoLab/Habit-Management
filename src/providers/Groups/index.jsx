import { createContext, useContext, useState } from "react";
import api from "../../services/api";

const GroupsContext = createContext({});

const GroupsProvider = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [allGroupsList, setAllGroupsList] = useState([]);
  const [lastCreatedGroup, setLastCreatedGroup] = useState({});
  const [updatedGroup, setUpdatedGroup] = useState({});

  const token = localStorage.getItem("@Habit:token");
  const AuthorizationObj = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const listGroupsFunction = async () => {
    let counter = 0;
    let array = [];
    let response = {};
    try {
      do {
        counter++;
        response = await api.get(`/groups/?page=${counter}`, AuthorizationObj);
        const currentPage = response.data.results;
        array = [...array, ...currentPage];
      } while (response.data.next);
      setAllGroupsList([...array]);
    } catch (error) {
      setErrorMessage(error);
    }
  };

  const createGroupFunction = async (formData) => {
    try {
      const response = await api.post("/groups/", formData, AuthorizationObj);
      setLastCreatedGroup(response.data);
    } catch (error) {
      setErrorMessage(error);
    }
  };

  // const updateGroupFunction = (groupId, formData) => {
  //   const response = await api.patch(
  //     `/groups/${groupId}`,
  //     formData,
  //     AuthorizationObj,
  //   );
  //   setUpdatedGroup(response.data);
  // };

  return (
    <GroupsContext.Provider
      value={{
        errorMessage,
        listGroupsFunction,
        allGroupsList,
        createGroupFunction,
        lastCreatedGroup,
        // updateGroupFunction,
        // updatedGroup,
      }}>
      {children}
    </GroupsContext.Provider>
  );
};
const useGroups = () => useContext(GroupsContext);

export { GroupsProvider, useGroups };
