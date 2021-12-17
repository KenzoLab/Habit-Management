import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

import api from "../../services/api";

import { useAuth } from "../AuthProvider";

const GroupsContext = createContext({});

const GroupsProvider = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [allGroupsList, setAllGroupsList] = useState([]);
  const [lastCreatedGroup, setLastCreatedGroup] = useState({});
  const [updatedGroup, setUpdatedGroup] = useState({});
  const [subscriptions, setSubscriptions] = useState([]);

  const { token, userId } = useAuth();

  const AuthorizationObj = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const listGroupsFunction = async (token) => {
    let counter = 0;
    let array = [];
    let response = {};
    try {
      do {
        counter++;
        response = await api.get(`/groups/?page=${counter}`, token);
        const currentPage = response.data.results;
        array = [...array, ...currentPage];
      } while (counter < 2);
      setAllGroupsList([...array]);
    } catch (error) {
      setErrorMessage(error);
    }
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
        "Successfully created group!",
      ); /* toast register group success */
      listGroupsFunction();
      searchSubscriptionsFunction();
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
        AuthorizationObj,
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
        AuthorizationObj,
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
        AuthorizationObj,
      );
      toast.success(
        "Successfully subscribed!",
      ); /* toast subscribe group success */
      listGroupsFunction();
      searchSubscriptionsFunction();
    } catch (error) {
      setErrorMessage(error);
    }
  };

  const unsubscribeFunction = async (groupId) => {
    try {
      const response = await api.delete(
        `/groups/${groupId}/unsubscribe/`,
        AuthorizationObj,
      );

      toast.success(
        "Successfully unsubscribed!",
      ); /* toast unsubscribe group success */
      listGroupsFunction();
      searchSubscriptionsFunction();
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
        userId,
      }}>
      {children}
    </GroupsContext.Provider>
  );
};
const useGroups = () => useContext(GroupsContext);

export { GroupsProvider, useGroups };
