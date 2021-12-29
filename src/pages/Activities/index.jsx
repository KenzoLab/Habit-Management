import HamburguerMenu from "../../components/HamburguerMenu";
import { FiSearch } from "react-icons/fi";
import {
  App,
  Container,
  MainContainer,
  Footer,
  Header,
  Cards,
  ContSearch,
  BtnSearch,
  InputSearch,
} from "./styles";
import ActivitiesCard from "../../components/ActivitiesCard";
import { useCurrentPage } from "../../providers/CurrentPage";
import { useEffect } from "react";
import { useState } from "react";
import { useGroups } from "../../providers/Groups";

function Activities() {
  const { allGroupsList, listGroupsFunction } = useGroups();
  const [allActivities, setAllActivities] = useState([]);
  const { defineCurrentPageFunction } = useCurrentPage();
  const [filteredList, setFilteredList] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [search, setSearch] = useState("");

  const getAllActivities = (allGroupsList) => {
    const activities = allGroupsList.flatMap((group) => group.activities);
    setAllActivities([...activities]);
  };

  const getGroupTitle = (groupId) => {
    const foundGroup = allGroupsList.find((group) => group.id === groupId);
    const title = foundGroup.name;
    return title;
  };

  function searchFunction() {
    if (search !== "") {
      const cardSearch = allActivities.filter((activity) => {
        const activityTitle = activity.title.toLowerCase();
        return activityTitle.includes(search.toLowerCase());
      });
      setIsFiltered(true);
      setFilteredList(cardSearch);
    } else {
      setIsFiltered(false);
      setFilteredList([]);
    }
  }

  useEffect(() => {
    searchFunction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  useEffect(() => {
    getAllActivities(allGroupsList);
  }, [allGroupsList]);

  useEffect(() => {
    listGroupsFunction();
    defineCurrentPageFunction("activities");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <App>
      <Container>
        <div>
          <HamburguerMenu />
        </div>
        <Header>
          <section className="header-top">
            <h2>Activities</h2>
            <div className="header-search">
              <ContSearch>
                <div>
                  <BtnSearch
                    onClick={(e) =>
                      e.currentTarget.parentElement.lastChild.focus()
                    }
                  >
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
        </Header>
        <MainContainer>
          <Cards>
            {isFiltered
              ? filteredList.map((activities, index) => (
                  <ActivitiesCard
                    key={index}
                    title={activities.title}
                    date={activities.realization_time}
                    group={getGroupTitle(activities.group)}
                  />
                ))
              : allActivities.map((activities, index) => (
                  <ActivitiesCard
                    key={index}
                    title={activities.title}
                    date={activities.realization_time}
                    group={getGroupTitle(activities.group)}
                  />
                ))}
          </Cards>
          <Footer>
            {/*<BasicSpeedDial handleModalHabits={handleModalHabits} />*/}
            {/*<ModalHabits open={openModalHabits} handle={handleModalHabits} />*/}
          </Footer>
        </MainContainer>
      </Container>
    </App>
  );
}

export default Activities;
