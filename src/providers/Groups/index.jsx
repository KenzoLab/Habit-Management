import { createContext, useContext, useState } from 'react';
import api from '../../services/api';

const GroupsContext = createContext({});

const GroupsProvider = ({ children }) => {
  const [allGroupsList, setAllGroupsList] = useState({});

  const token = localStorage.getItem('@Habit:token');
  const AuthorizationObj = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const listGroupsFunction = () => {
    api
      .get('/groups/', AuthorizationObj)
      .then((response) => console.log(response.data))
      .car((error) => console.log(error));
  };

  return (
    <GroupsContext.Provider value={{ listGroupsFunction, allGroupsList }}>
      {children}
    </GroupsContext.Provider>
  );
};
const useGroups = () => useContext(GroupsContext);

export { GroupsProvider, useGroups };
