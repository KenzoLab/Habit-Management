import HamburguerMenu from "../../components/HamburguerMenu";
//import { FiSearch } from "react-icons/fi";
import { App, Container, MainContainer, Footer, Header, Cards } from "./styles";
import ActivitiesCard from "../../components/ActivitiesCard";
import { useCurrentPage } from "../../providers/CurrentPage";
import { useEffect } from "react";
import { useState } from "react";
import { useGroups } from "../../providers/Groups";

function Activities() {
  const { allGroupsList, listGroupsFunction } = useGroups();
  const [allActivities, setAllActivities] = useState([]);
  const { defineCurrentPageFunction } = useCurrentPage();

  const getAllActivities = (allGroupsList) => {
    const activities = allGroupsList.flatMap((group) => group.activities);
    setAllActivities([...activities]);
  };

  const getGroupTitle = (groupId) => {
    const foundGroup = allGroupsList.find((group) => group.id === groupId);
    const title = foundGroup.name;
    return title;
  };

  useEffect(() => {
    getAllActivities(allGroupsList);
  }, [allGroupsList]);

  useEffect(() => {
    listGroupsFunction();
    defineCurrentPageFunction("activities");
  }, []);

  return (
    <App>
      <Container>
        <div>
          <HamburguerMenu />
        </div>
        <Header>
          <section className="header-top">
            <h2>Activites</h2>
            <div className="header-search">
              {/*<ContSearch>
                <div>
                  <BtnSearch onClick={() => procurar()}>
                    <FiSearch />
                  </BtnSearch>
                  <InputSearch
                    type="text"
                    placeholder="Search..."
                    onChange={(evt) => setSearch(evt.target.value.toString())}
                  />
                </div>
              </ContSearch>*/}
            </div>
          </section>

          <section className="header-bottom">
            <div id="blues">
              {/*<ButtonToday
                className="filter-buttons"
                onClick={() => filtering("Daily")}
                filter={filter}
              >
                Today
              </ButtonToday>
              <ButtonWeek
                className="filter-buttons"
                onClick={() => filtering("Weekly")}
                filter={filter}
              >
                Week
              </ButtonWeek>
              <ButtonMonth
                className="filter-buttons"
                onClick={() => filtering("Monthly")}
                filter={filter}
              >
                Month
              </ButtonMonth>*/}
            </div>
          </section>
        </Header>
        <MainContainer>
          <Cards>
            {allActivities.map((activities, index) => (
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
