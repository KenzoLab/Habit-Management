import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

import api from "../../services/api";

const GroupsContext = createContext({});

const GroupsProvider = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [allGroupsList, setAllGroupsList] = useState([]);
  const [lastCreatedGroup, setLastCreatedGroup] = useState({});
  const [updatedGroup, setUpdatedGroup] = useState({});
  const [subscriptions, setSubscriptions] = useState([]);

  const token = localStorage.getItem("@Habit:token");

  const AuthorizationObj = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const arrCategory = [
    "Financial",
    "Health",
    "Intellectual",
    "Mindset",
    "Productivity",
    "Relationships",
    "Sports",
  ];

  const listGroupsFunction = async () => {
    let counter = 0;
    let array = [];
    let response = {};
    try {
      do {
        counter++;
        for (let i = 0; i < arrCategory.length; i++) {
          response = await api.get(
            `/groups/?page=${counter}&category=${arrCategory[i]}`,
            AuthorizationObj,
          );
          const currentPage = response.data.results;
          array = [...array, ...currentPage].sort((a, b) => {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          });
        }
      } while (response.data.previous !== null);
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
      toast.success("Successfully created group!");
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
      }}>
      {children}
    </GroupsContext.Provider>
  );
};
const useGroups = () => useContext(GroupsContext);

export { GroupsProvider, useGroups };
