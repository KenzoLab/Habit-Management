import { createContext, useContext, useState } from "react";

const CurrentPageContext = createContext();

const CurrentPageProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("");

  const defineCurrentPageFunction = (page) => {
    setCurrentPage(page);
  };

  return (
    <CurrentPageContext.Provider
      value={{ defineCurrentPageFunction, currentPage }}
    >
      {children}
    </CurrentPageContext.Provider>
  );
};

const useCurrentPage = () => useContext(CurrentPageContext);

export { useCurrentPage, CurrentPageProvider };
