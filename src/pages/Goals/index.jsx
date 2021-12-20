import HamburguerMenu from "../../components/HamburguerMenu";
import { App, Container, MainContainer, Footer, Header, Cards } from "./styles";
import GoalsCard from "../../components/GoalsCard";
import { useCurrentPage } from "../../providers/CurrentPage";
import { useEffect } from "react";
import { useState } from "react";
import { useGroups } from "../../providers/Groups";

function Goals() {
  const { allGroupsList, listGroupsFunction } = useGroups();
  const [allGoals, setAllGoals] = useState([]);
  const { defineCurrentPageFunction } = useCurrentPage();

  const getAllGoals = (allGroupsList) => {
    const goals = allGroupsList.flatMap((group) => group.goals);
    setAllGoals([...goals]);
  };

  const getGroupTitle = (groupId) => {
    const foundGroup = allGroupsList.find((group) => group.id === groupId);
    const title = foundGroup.name;
    return title;
  };

  useEffect(() => {
    getAllGoals(allGroupsList);
  }, [allGroupsList]);

  useEffect(() => {
    listGroupsFunction();
    defineCurrentPageFunction("goals");
  }, []);

  return (
    <App>
      <Container>
        <div>
          <HamburguerMenu />
        </div>
        <Header>
          <section className="header-top">
            <h2>Goals</h2>
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
            {allGoals.map((goal, index) => (
              <GoalsCard
                key={index}
                title={goal.title}
                status={100 - goal.how_much_achieved}
                group={getGroupTitle(goal.group)}
                difficult={goal.difficulty}
              />
            ))}
          </Cards>
          <Footer></Footer>
        </MainContainer>
      </Container>
    </App>
  );
}

export default Goals;
