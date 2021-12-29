import HamburguerMenu from "../../components/HamburguerMenu";
import { FiSearch } from "react-icons/fi";
import {
  App,
  Container,
  Footer,
  Header,
  Cards,
  InputSearch,
  BtnSearch,
  ContSearch,
  MainContainer,
  ButtonDiscovery,
  ButtonRegistered,
} from "./styles";
import GroupCard from "../../components/GroupCard";
import { useAuth } from "../../providers/AuthProvider";
import { useEffect } from "react";
import BasicSpeedDial from "../../components/SpeedDialHabits";
import { useState } from "react";
import ModalGroups from "../../components/GroupModal";
import { useGroups } from "../../providers/Groups";
import { useCurrentPage } from "../../providers/CurrentPage";

function Groups() {
  const [openModalGroups, setOpenModalGroups] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);
  const [filter, setFilter] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const { defineCurrentPageFunction } = useCurrentPage();
  const { listGroupsFunction, allGroupsList } = useGroups();
  const { userId } = useAuth();
  const [search, setSearch] = useState("");

  const handleModalGroups = () => {
    setOpenModalGroups(!openModalGroups);
  };

  const filtering = (registeredOrNotRegistered) => {
    if (!isFiltered || filter !== registeredOrNotRegistered) {
      setIsFiltered(true);
      setFilter(registeredOrNotRegistered);
    } else if (filter === registeredOrNotRegistered) {
      setIsFiltered(false);
      setFilter("");
    }
  };

  function searchFunction() {
    setFilter("");
    if (search !== "") {
      const cardSearch = allGroupsList.filter((group) => {
        const groupName = group.name.toLowerCase();
        return groupName.includes(search.toLowerCase());
      });
      setFilteredList(cardSearch);
      setIsFiltered(true);
    } else {
      setIsFiltered(false);
      setFilteredList([]);
    }
  }

  const filterListFunction = (userId, filteredGroups) => {
    if (filter === "Registered") {
      filteredGroups = allGroupsList.filter((group) =>
        group.users_on_group.some((user) => user.id === userId),
      );
    } else if (filter === "Discovery") {
      filteredGroups = allGroupsList.filter(
        (group) => !group.users_on_group.some((user) => user.id === userId),
      );
    }
    setFilteredList([...filteredGroups]);
  };

  useEffect(() => {
    searchFunction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  useEffect(() => {
    filterListFunction(parseInt(userId), filteredList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFiltered, filter]);

  useEffect(() => {
    listGroupsFunction();
    defineCurrentPageFunction("groups");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <App>
      <HamburguerMenu />
      <Container>
        <Header>
          <section className="header-top">
            <h2>Groups</h2>
            <div className="header-search">
              <ContSearch>
                <div>
                  <BtnSearch
                    onClick={(e) =>
                      console.log(
                        e.currentTarget.parentElement.lastChild.focus(),
                      )
                    }>
                    <FiSearch />
                  </BtnSearch>
                  <InputSearch
                    type="text"
                    placeholder="Type to Search..."
                    onChange={(evt) => setSearch(evt.target.value.toString())}
                  />
                </div>
              </ContSearch>
            </div>
          </section>

          <section className="header-bottom">
            <div id="blues">
              <ButtonDiscovery
                className="filter-buttons"
                onClick={() => filtering("Discovery")}
                filter={filter}>
                Discovery
              </ButtonDiscovery>
              <ButtonRegistered
                className="filter-buttons"
                onClick={() => filtering("Registered")}
                filter={filter}>
                Registered
              </ButtonRegistered>
            </div>
          </section>
        </Header>
        <MainContainer>
          <Cards>
            {isFiltered
              ? filteredList.map((group, index) => (
                  <GroupCard cardType="group" group={group} key={index} />
                ))
              : allGroupsList.map((group, index) => (
                  <GroupCard cardType="group" group={group} key={index} />
                ))}
          </Cards>
          <Footer>
            <BasicSpeedDial handleModal={[handleModalGroups]} />
            <ModalGroups open={openModalGroups} handle={handleModalGroups} />
          </Footer>
        </MainContainer>
      </Container>
    </App>
  );
}

export default Groups;
