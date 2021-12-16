import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

import api from "../../services/api";

import { useAuth } from "../AuthProvider";

const GroupsContext = createContext({});

const GroupsProvider = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [allGroupsList, setAllGroupsList] = useState([]);
  const [userGroups, setUserGroups] = useState([]);
  const [lastCreatedGroup, setLastCreatedGroup] = useState({});
  const [updatedGroup, setUpdatedGroup] = useState({});
  const [subscriptions, setSubscriptions] = useState([]);

  const { token, userId } = useAuth();

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
      filterGroupsUser(allGroupsList);
    } catch (error) {
      setErrorMessage(error);
    }
  };

  const filterGroupsUser = (arr) => {
    const intId = parseInt(userId);
    const groupsUser = arr.filter((item) =>
      item.users_on_group.some((elem) => elem.id === 303)
    );

    setUserGroups(groupsUser);
  };

  const createGroupFunction = async (formData) => {
    const dataGroup = {
      name: formData.title,
      description: formData.description,
      category: formData.category.value,
    };

    try {
      const response = await api.post("/groups/", dataGroup, AuthorizationObj);
      setLastCreatedGroup(response.data);
      toast.success(
        "Successfully created group!"
      ); /* toast register habit success */
      // listGroupsFunction();
    } catch (error) {
      setErrorMessage(error);
    }
  };

  const updateGroupFunction = async (groupId, formData) => {
    // To update group the logged user must be creator of the group
    try {
      const response = await api.patch(
        `/groups/${groupId}/`,
        formData,
        AuthorizationObj
      );
      setUpdatedGroup(response.data);
    } catch (error) {
      setErrorMessage(error);
    }
  };

  const searchSubscriptionsFunction = async () => {
    try {
      const response = await api.get(
        "/groups/subscriptions/",
        AuthorizationObj
      );
      setSubscriptions(response.data);
    } catch (error) {
      setErrorMessage(error);
    }
  };

  const subscribeFunction = async (groupId) => {
    try {
      const response = await api.post(
        `/groups/${groupId}/subscribe/`,
        "",
        AuthorizationObj
      );
    } catch (error) {
      setErrorMessage(error);
    }
  };

  const unsubscribeFunction = async (groupId) => {
    try {
      const response = await api.delete(
        `/groups/${groupId}/unsubscribe/`,
        AuthorizationObj
      );
      console.log("deu certo");
    } catch (error) {
      setErrorMessage(error);
    }
  };

  return (
    <GroupsContext.Provider
      value={{
        errorMessage,
        listGroupsFunction,
        allGroupsList,
        createGroupFunction,
        lastCreatedGroup,
        updateGroupFunction,
        updatedGroup,
        searchSubscriptionsFunction,
        subscriptions,
        subscribeFunction,
        unsubscribeFunction,
        userGroups,
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
};
const useGroups = () => useContext(GroupsContext);

export { GroupsProvider, useGroups };
