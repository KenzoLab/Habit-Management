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
import GoalsCard from "../../components/GoalsCard";
import { useCurrentPage } from "../../providers/CurrentPage";
import { useEffect } from "react";
import { useState } from "react";
import { useGroups } from "../../providers/Groups";

function Goals() {
  const { allGroupsList, listGroupsFunction } = useGroups();
  const [allGoals, setAllGoals] = useState([]);
  const { defineCurrentPageFunction } = useCurrentPage();
  const [filteredList, setFilteredList] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [search, setSearch] = useState("");

  const getAllGoals = (allGroupsList) => {
    const goals = allGroupsList.flatMap((group) => group.goals);
    setAllGoals([...goals]);
  };

  const getGroupTitle = (groupId) => {
    const foundGroup = allGroupsList.find((group) => group.id === groupId);
    const title = foundGroup.name;
    return title;
  };

  function searchFunction() {
    if (search !== "") {
      const cardSearch = allGoals.filter((goal) => {
        const goalTitle = goal.title.toLowerCase();
        return goalTitle.includes(search.toLowerCase());
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
  }, [search]);

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
              <ContSearch>
                <div>
                  <BtnSearch
                    onClick={(e) =>
                      e.currentTarget.parentElement.lastChild.focus()
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
        </Header>
        <MainContainer>
          <Cards>
            {isFiltered
              ? filteredList.map((goal, index) => (
                  <GoalsCard
                    key={index}
                    title={goal.title}
                    status={100 - goal.how_much_achieved}
                    group={getGroupTitle(goal.group)}
                    difficult={goal.difficulty}
                  />
                ))
              : allGoals.map((goal, index) => (
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
